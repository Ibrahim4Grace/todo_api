import express from 'express';
import { registerUser, loginUser } from '../controllers/authCtlr.js';
import { validateData, authenticate } from '../middlewares/index.js';
import { loginSchema, registerSchema } from '../validations/validation.js';

const router = express.Router();

router.post('/register', validateData(registerSchema), registerUser);
router.post('/login', authenticate, validateData(loginSchema), loginUser);

export default router;
