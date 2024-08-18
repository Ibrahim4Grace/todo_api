import Todo from '../models/todoModel.js';
import { todoSchema } from '../validators/todoValidator.js';

/**
 * @swagger
 * /todos:
 *   get:
 *     summary: Retrieve a list of todos
 *     responses:
 *       200:
 *         description: A list of todos
 */
export const getTodos = async (req, res) => {
  const todos = await Todo.findAll();
  res.status(200).json(todos);
};

/**
 * @swagger
 * /todos:
 *   post:
 *     summary: Create a new todo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Todo'
 *     responses:
 *       201:
 *         description: The created todo
 */
export const createTodo = async (req, res) => {
  const validation = todoSchema.safeParse(req.body);

  if (!validation.success) {
    return res.status(400).json(validation.error);
  }

  const todo = await Todo.create(req.body);
  res.status(201).json(todo);
};
