import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  title: String,
  body : String,
  status: Boolean
});

export default mongoose.model('Posts', PostSchema);