import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,

  plan: {
    type: String,
    default: "free", // free / pro / premium
  },

  messagesUsed: {
    type: Number,
    default: 0,
  },

}, { timestamps: true });

export default mongoose.model("User", userSchema);
