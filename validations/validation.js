import { z } from 'zod';

export const todoSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  completed: z.boolean().optional(),
});

export const userSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
