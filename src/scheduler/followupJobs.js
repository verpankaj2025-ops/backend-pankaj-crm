import Followup from "./followup.model.js";
import { sendWhatsAppMessage } from "../messaging/sendMessage.js";
import Lead from "../leads/lead.model.js";

export const runFollowups = async () => {
  const now = new Date();

  const pending = await Followup.find({
    scheduledAt: { $lte: now },
    status: "pending",
  });

  for (let f of pending) {
    const lead = await Lead.findById(f.leadId);

    if (lead?.phone) {
      await sendWhatsAppMessage(lead.phone, f.message);
    }

    f.status = "sent";
    await f.save();

    console.log("✅ Follow-up sent");
  }
};
