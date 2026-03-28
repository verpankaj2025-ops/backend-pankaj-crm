import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
  name: String,
  status: {
    type: String,
    enum: ["new", "contacted", "interested", "closed"],
    default: "new",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Lead", leadSchema);
