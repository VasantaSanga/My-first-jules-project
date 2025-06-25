import { User, CreateUserDto, MOCK_USERS } from './user.interface';
import { hashPassword } from './auth.utils';
import { DEFAULT_ADMIN_EMAIL, DEFAULT_ADMIN_USERNAME, DEFAULT_ADMIN_PASSWORD } from '../config';

// Simulate a database ID sequence
let currentId = 1;

export const findUserByEmail = async (email: string): Promise<User | undefined> => {
  return MOCK_USERS.find(user => user.email === email);
};

export const findUserByUsername = async (username: string): Promise<User | undefined> => {
  return MOCK_USERS.find(user => user.username === username);
};

export const findUserById = async (id: number): Promise<User | undefined> => {
  return MOCK_USERS.find(user => user.id === id);
};

export const createUser = async (userData: CreateUserDto): Promise<User> => {
  const existingUserByEmail = await findUserByEmail(userData.email);
  if (existingUserByEmail) {
    throw new Error('User with this email already exists.');
  }
  const existingUserByUsername = await findUserByUsername(userData.username);
  if (existingUserByUsername) {
    throw new Error('User with this username already exists.');
  }

  const hashedPassword = await hashPassword(userData.password_hash); // The DTO should pass the plain password here

  const newUser: User = {
    id: currentId++,
    username: userData.username,
    email: userData.email,
    password_hash: hashedPassword,
    created_at: new Date(),
    updated_at: new Date(),
  };
  MOCK_USERS.push(newUser);
  return newUser;
};

// Initialize a default admin user for testing if not already present
// In a real app, this would be a migration or a one-time setup script.
const initializeDefaultAdmin = async () => {
  const adminUser = await findUserByEmail(DEFAULT_ADMIN_EMAIL);
  if (!adminUser) {
    console.log('Creating default admin user...');
    try {
      await createUser({
        username: DEFAULT_ADMIN_USERNAME,
        email: DEFAULT_ADMIN_EMAIL,
        password_hash: DEFAULT_ADMIN_PASSWORD, // Pass plain password for hashing in createUser
      });
      console.log(`Default admin user created: ${DEFAULT_ADMIN_USERNAME} / ${DEFAULT_ADMIN_PASSWORD}`);
    } catch (error) {
      console.error('Error creating default admin user:', error);
    }
  }
};

initializeDefaultAdmin();
