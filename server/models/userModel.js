import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  nombre: { type: String, required: true, minlength: 3, maxlength: 40, },
  apellidos: { type: String, required: true, minlength: 3, maxlength: 40, },
  avatar: { type: String, required: false, default: 'defaultAvatar.jpg', },
  correo: { type: String, required: true, match: /.+\@.+\..+/, unique: true, },
  password: { type: String, required: true, minlength: 6 },
},{
  timestamps: true,
});

export default mongoose.model('User', userSchema);