import express from 'express';
import { deleteUser, getUser, loginUser, registerUser, updateUser } from '../controllers/userController.js';

export const router = express.Router();
router.get('/', (req, res)=>{
  res.send('Bienvenidos, estamos trabajando en el servidor');
});

export const userRouter = express.Router();
userRouter.get('/:id', getUser);
userRouter.post('/', registerUser);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

export const login = express.Router();
login.post('/', loginUser);