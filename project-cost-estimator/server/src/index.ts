import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { PORT } from './config'; // Import port and ensure config is loaded
import authRoutes from './auth/auth.routes';
import './auth/user.service'; // Ensure user service (and default admin creation) is initialized

dotenv.config(); // Load .env file if not already done by config.ts

const app: Express = express();
const port = PORT; // Use port from config

// Middlewares
app.use(express.json()); // For parsing application/json

// Routes
app.use('/api/auth', authRoutes); // Mount auth routes under /api/auth

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server with JWT Auth');
});

// Global error handler (basic example)
app.use((err: Error, req: Request, res: Response, next: Function) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
