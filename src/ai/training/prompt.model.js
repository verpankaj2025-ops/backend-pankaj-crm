import mongoose from "mongoose";

const promptSchema = new mongoose.Schema({
  text: String,
}, { timestamps: true });

export default mongoose.model("Prompt", promptSchema);
