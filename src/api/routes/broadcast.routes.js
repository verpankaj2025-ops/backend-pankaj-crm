import express from "express";
import Lead from "../../leads/lead.model.js";
import Followup from "../../scheduler/followup.model.js";
import { sendWhatsAppMessage } from "../../messaging/sendMessage.js";

const router = express.Router();

// 🔥 INSTANT + FILTER BROADCAST
router.post("/send", async (req, res) => {
  const { message, status } = req.body;

  const leads = status
    ? await Lead.find({ status })
    : await Lead.find();

  for (let lead of leads) {
    if (lead.phone) {
      await sendWhatsAppMessage(lead.phone, message);
    }
  }

  res.json({
    message: `Broadcast sent to ${status || "all"} leads 🚀`,
  });
});


// 🔥 SCHEDULE BROADCAST
router.post("/schedule", async (req, res) => {
  const { message, time, status } = req.body;

  const leads = status
    ? await Lead.find({ status })
    : await Lead.find();

  for (let lead of leads) {
    await Followup.create({
      leadId: lead._id,
      message,
      scheduledAt: new Date(time),
    });
  }

  res.json({
    message: "Broadcast scheduled successfully ⏰",
  });
});

export default router;
