import express from "express";
import { webhookHandler } from "../../integrations/webhookManager.js";
import { saveWhatsAppConfig } from "../../integrations/whatsapp.service.js";

const router = express.Router();

router.post("/webhook", webhookHandler);

router.post("/whatsapp/connect", (req, res) => {
  saveWhatsAppConfig(req.body);
  res.json({ message: "Connected" });
});

export default router;
