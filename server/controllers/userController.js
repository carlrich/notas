import userModel from "../models/userModel.js";
import multer from 'multer';
import path from "path";
import { fileURLToPath } from "url";
import fs from 'fs';
import bcrypt from 'bcrypt';
import validator from "validator";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const almacenarImagen = multer.diskStorage({
  destination: path.join(__dirname, '../avatars'),
  filename: (req, file, cb)=>{
    cb(null, Date.now() + '_' + file.originalname);
  }
})

export const cargarImagen = multer({
  storage: almacenarImagen,
}).single('avatar');

export const getUser = async (req, res)=>{
  try {
    res.send('Datos del usuario');
  } catch (error) {
    
  }
}
export const registerUser = async (req, res)=>{
  try {
    const { nombre, apellidos, correo, password } = req.body;
    if(!nombre || !apellidos || !password){
      return res.json({
        status: false,
        message: 'Todos los campos son necesarios',
      });
    }
    if(!validator.isEmail(correo)){
      return res.json({
        status: false,
        message: 'Correo invalido',
      });
    }
    if(!validator.isStrongPassword(password)){
      return res.json({
        status: false,
        message: 'Contraseña no segura',
      });
    }
    const existingUser = await userModel.findOne({ correo });
    if (existingUser) {
      return res.json({
        status: false,
        message: 'Ya está registrado este correo',
      });
    }
    const passwordSegura = bcrypt.hashSync(password, 10);
    const newUser = {
      nombre,
      apellidos,
      correo,
      avatar: 'defaultAvatar.jpg',
      password: passwordSegura,
    }
    const response = await userModel.create(newUser);
    if(response){
      return res.json({
        status: true,
        message: 'Usuario creado correctamente',
        userId: response._id,
      });
    }else{
      return res.json({
        status: false,
        message: 'No se pudo crear el usuario, error: ' + response
      });
    }
  } catch (error) {
    return res.status(500).json({ status: false, message: 'Error en el servidor ' + error });
  }
}

export const updateUser = async (req, res)=>{
  try {
    const user = await userModel.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        status: false,
        message: 'Usuario no encontrado',
      });
    }
    const oldFilename = user.avatar;
    let updateFields = {
      nombre: req.body.nombre,
      apellidos: req.body.apellidos,
    };
    if(req.file){
      const { filename } = req.file;
      // Eliminar la imagen anterior
      if(oldFilename !== 'defaultAvatar.jpg'){
        fs.unlinkSync(path.join(__dirname, '../avatars/', oldFilename));
      }
      updateFields.avatar = filename;
    }
    const response = await userModel.updateOne(
      { _id: req.params.id },
      { $set: updateFields }
    );
    if(response.nModified > 0){
      return res.json({
        status: true,
        message: 'Se actualizado correctamente',
      });
    }else{
      return res.json({
        status: false,
        message: 'Error al intentar actualizar ' + response,
      });
    }
  } catch (error) {
    return res.status(500).json({ status: false, message: 'Error en el servidor ' + error });
  }
}