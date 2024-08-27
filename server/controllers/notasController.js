import notaModel from "../models/notaModel.js";
import userModel from "../models/userModel.js";

export const getNotasByUsuarioId  = async (req, res)=>{
  try {
    const id_user = req.params.usuario_id;
    if(!id_user.length){
      return res.json({
        status: false,
        message: 'El ID de usuario no especificado.',
      });
    }
    const notas = await notaModel.find({ usuario_id: id_user, });
    if(!notas.length){
      return res.json({
        status: false,
        message: 'No se encontraron notas para el usuario con el ID proporcionado.',
      });
    }
    res.json({ notas });
  } catch (error) {
    return res.status(500).json({ status: false, message: 'Error en el servidor ' + error });
  }
}

export const getNota = async (req, res)=>{
  try {
    const nota = await notaModel.findById(req.params.id);
    if(!nota){
      return res.json({
        status: false,
        message: 'No se encontró la nota con el ID proporcionado.'
      });
    }
    res.json({ nota });
  } catch (error) {
    return res.status(500).json({ status: false, message: 'Error en el servidor ' + error });
  }
}

export const createNota = async (req, res)=>{
  try {
    const { usuario_id, titulo, texto } = req.body;
    if(!usuario_id || !titulo || !texto){
      return res.json({
        status: false,
        message: 'Todos los campos son necesario.'
      });
    }
    const user = await userModel.findById(usuario_id);
    if(!user){
      return res.json({
        status: false,
        message: 'Usuario no encontrado.'
      });
    }
    const response = await notaModel.create(req.body);
    if(response){
      return res.json({
        status: true,
        message: 'Nueva nota creada correctamente.',
        notaId: response._id,
      });
    }else{
      return res.json({
        status: false,
        message: 'No se pudo crear la nota, error: ' + response
      });
    }
  } catch (error) {
    return res.status(500).json({ status: false, message: 'Error en el servidor ' + error });
  }
}

export const editNota = async (req, res)=>{
  try {
    if(!req.params.id){
      return res.json({
        status: false,
        message: 'No se especifico el ID.'
      });
    }
    const nota = await notaModel.findById(req.params.id);
    if(!nota){
      return res.json({
        status: false,
        message: 'No se encontro la nota con el ID especificado.'
      });
    }
    const { titulo, texto } = req.body;
    if(!titulo || !texto){
      return res.json({
        status: false,
        message: 'Todos los campos son necesarios'
      });
    }
    const response = await notaModel.updateOne(
      { _id: req.params.id },
      { $set: req.body },
    );
    if(!response){
      return res.json({
        status: false,
        message: 'No se pudo actualizar, error: ' + response,
      });
    }
    res.json({
      status: true,
      message: 'Se a actualizado correctamente',
    });
  } catch (error) {
    return res.status(500).json({ status: false, message: 'Error en el servidor ' + error });
  }
}

export const deleteNota = async (req, res)=>{
  try {
    if(!req.params.id){
      return res.json({
        status: false,
        message: 'No se especifico el ID',
      });
    }
    const nota = await notaModel.deleteOne({ _id: req.params.id, });
    if(!nota){
      return res.json({
        status: false,
        message: 'No se encontro la nota con el ID especificado.',
      });
    }
    const response = await notaModel.deleteOne({ _id: req.params.id, });
    if(response.deletedCount > 0){
      return res.json({
        status: true,
        message: 'Nota eliminada correctamente.',
      });
    }else{
      return res.json({
        status: false,
        message: 'No se puedo eliminar la Nota.',
      });
    }
  } catch (error) {
    return res.status(500).json({ status: false, message: 'Error en el servidor ' + error });
  }
}