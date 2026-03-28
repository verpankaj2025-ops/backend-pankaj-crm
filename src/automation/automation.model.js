import mongoose from "mongoose";

const ruleSchema = new mongoose.Schema({
  keyword: String,
  reply: String,
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

export default mongoose.model("AutomationRule", ruleSchema);
