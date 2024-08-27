import express from 'express';
import cors from 'cors';
import { login, notaRouter, router, userRouter } from './routers/routes.js';
import './database/db.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', router);
app.use('/user', userRouter);
app.use('/login', login);
app.use('/notas/', notaRouter);

app.listen(7500, ()=>{
  console.log('Servidor iniciado en http://localhost:7500/');
});