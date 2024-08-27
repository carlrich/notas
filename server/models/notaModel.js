import mongoose from "mongoose";

const notaSchema = new mongoose.Schema({
  usuario_id: { type: String, required: true, },
  titulo: { type: String, required: true, minlength: 1, maxlength: 255, },
  texto: { type: String, required: true, }
},{
  timestamps: true,
});

export default mongoose.model('Nota', notaSchema);