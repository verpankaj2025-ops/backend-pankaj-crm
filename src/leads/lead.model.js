import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: String,
  phone: String,
  source: String,

  status: {
    type: String,
    enum: ["new", "hot", "warm", "cold", "paid"],
    default: "new",
  },

}, { timestamps: true });

export default mongoose.model("Lead", leadSchema);
