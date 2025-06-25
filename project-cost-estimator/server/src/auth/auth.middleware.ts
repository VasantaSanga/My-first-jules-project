import { Request, Response, NextFunction } from 'express';
import { verifyToken, JwtPayload } from './auth.utils';
import { findUserById } from './user.service'; // Using mock service

// Extend Express Request type to include user
export interface AuthenticatedRequest extends Request {
  user?: JwtPayload; // Or your full User type if preferred
}

export const authenticateJWT = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1]; // Bearer <token>

    if (!token) {
      return res.status(401).json({ message: 'Access token is missing or invalid.' });
    }

    const decodedPayload = verifyToken(token);

    if (decodedPayload) {
      // Optionally, fetch user from DB/service to ensure they still exist/are active
      const user = await findUserById(decodedPayload.id);
      if (!user) {
        return res.status(401).json({ message: 'User not found.' });
      }
      req.user = decodedPayload; // Add decoded payload to request object
      next();
    } else {
      return res.status(403).json({ message: 'Invalid or expired token.' });
    }
  } else {
    return res.status(401).json({ message: 'Authorization header is missing.' });
  }
};
