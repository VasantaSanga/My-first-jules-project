import dotenv from 'dotenv';

dotenv.config();

export const JWT_SECRET = process.env.JWT_SECRET || 'your-very-secret-key-for-dev'; // Keep this in .env for production!
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h'; // Token expiration time
export const PORT = process.env.PORT || 3001;

// Database configuration (placeholders, to be filled when DB connection is implemented)
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_PORT = parseInt(process.env.DB_PORT || '5432', 10);
export const DB_USER = process.env.DB_USER || 'postgres';
export const DB_PASSWORD = process.env.DB_PASSWORD || 'password';
export const DB_NAME = process.env.DB_NAME || 'project_estimator_db';

// Default admin user (for initial setup, consider moving to a seed script)
export const DEFAULT_ADMIN_EMAIL = process.env.DEFAULT_ADMIN_EMAIL || 'admin@example.com';
export const DEFAULT_ADMIN_USERNAME = process.env.DEFAULT_ADMIN_USERNAME || 'admin';
export const DEFAULT_ADMIN_PASSWORD = process.env.DEFAULT_ADMIN_PASSWORD || 'admin123';
