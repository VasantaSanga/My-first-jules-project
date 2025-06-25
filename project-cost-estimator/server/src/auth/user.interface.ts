export interface User {
  id: number;
  username: string;
  email: string;
  password_hash: string; // This will store the hashed password
  created_at?: Date;
  updated_at?: Date;
}

// This is a placeholder for actual database interactions.
// In a real application, this would involve querying the PostgreSQL database.
export const MOCK_USERS: User[] = []; // Start with an empty array

// Helper type for user creation (omits id, created_at, updated_at)
export type CreateUserDto = Omit<User, 'id' | 'created_at' | 'updated_at'>;
