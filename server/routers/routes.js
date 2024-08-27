import express from 'express';
import { deleteUser, getUser, loginUser, registerUser, updateUser } from '../controllers/userController.js';
import { createNota, editNota, getNota, getNotasByUsuarioId } from '../controllers/notasController.js';

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

export const notaRouter = express.Router();
notaRouter.get('/:id', getNota);
notaRouter.get('/usuario/:usuario_id', getNotasByUsuarioId);
notaRouter.post('/', createNota);
notaRouter.put('/:id', editNota);