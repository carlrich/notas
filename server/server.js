import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.listen(7500, ()=>{
  console.log('Servidor iniciado en http://localhost:7500/');
});