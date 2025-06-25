import { Router, Request, Response } from 'express';
import { createUser, findUserByEmail, findUserByUsername } from './user.service'; // Using mock service
import { comparePassword, generateToken } from './auth.utils';
import { CreateUserDto } from './user.interface';
import { authenticateJWT, AuthenticatedRequest } from './auth.middleware';

const router = Router();

// POST /api/auth/register
router.post('/register', async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Username, email, and password are required.' });
  }

  try {
    // Check if user already exists
    let existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(409).json({ message: 'User with this email already exists.' });
    }
    existingUser = await findUserByUsername(username);
    if (existingUser) {
      return res.status(409).json({ message: 'User with this username already exists.' });
    }

    const createUserDto: CreateUserDto = { username, email, password_hash: password }; // Pass plain password
    const newUser = await createUser(createUserDto);

    // Omit password_hash from the response
    const { password_hash, ...userWithoutPassword } = newUser;
    res.status(201).json({ message: 'User registered successfully.', user: userWithoutPassword });

  } catch (error: any) {
    // Check if error is an instance of Error and has a message property
    if (error instanceof Error) {
        res.status(500).json({ message: 'Error registering user.', error: error.message });
    } else {
        res.status(500).json({ message: 'An unknown error occurred during registration.' });
    }
  }
});

// POST /api/auth/login
router.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  try {
    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials. User not found.' });
    }

    const isPasswordValid = await comparePassword(password, user.password_hash);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials. Password incorrect.' });
    }

    const token = generateToken(user);
    const { password_hash, ...userWithoutPassword } = user;

    res.json({ message: 'Login successful.', token, user: userWithoutPassword });

  } catch (error: any) {
     if (error instanceof Error) {
        res.status(500).json({ message: 'Error logging in.', error: error.message });
    } else {
        res.status(500).json({ message: 'An unknown error occurred during login.' });
    }
  }
});

// Example protected route: GET /api/auth/profile
router.get('/profile', authenticateJWT, (req: AuthenticatedRequest, res: Response) => {
  // req.user is populated by authenticateJWT middleware
  if (!req.user) {
    return res.status(401).json({ message: "Not authorized" }); // Should not happen if middleware is correct
  }
  // Send back some user information (excluding sensitive data like password hash)
  // The actual user data might be fetched again from service if more details are needed
  res.json({ message: 'Profile accessed successfully.', user: req.user });
});


export default router;
