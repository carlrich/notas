import { connect } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.ATLAS_URI;

export const conexion = connect(uri).then(()=>{
  console.log('MongoDB conexión exitosa');
}).catch((error)=>{
  console.log('No se pudo establecer la conexión con MongoDB');
})
