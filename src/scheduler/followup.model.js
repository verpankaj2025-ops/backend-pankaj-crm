import mongoose from "mongoose";

const followupSchema = new mongoose.Schema({
  leadId: String,
  message: String,
  scheduledAt: Date,
  status: {
    type: String,
    default: "pending",
  },
}, { timestamps: true });

export default mongoose.model("Followup", followupSchema);
