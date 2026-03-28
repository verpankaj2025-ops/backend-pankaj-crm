import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  leadId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lead",
  },
  lastMessage: String,
}, { timestamps: true });

export default mongoose.model("Chat", chatSchema);
