import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  chatId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Chat",
  },
  sender: {
    type: String, // user / customer / ai
  },
  text: String,
}, { timestamps: true });

export default mongoose.model("Message", messageSchema);
