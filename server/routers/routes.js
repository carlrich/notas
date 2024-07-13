import express from 'express';
import { getUser, registerUser } from '../controllers/userController.js';

export const router = express.Router();
router.get('/', (req, res)=>{
  res.send('Bienvenidos, estamos trabajando en el servidor');
});

export const userRouter = express.Router();
userRouter.get('/', getUser);
userRouter.post('/', registerUser);