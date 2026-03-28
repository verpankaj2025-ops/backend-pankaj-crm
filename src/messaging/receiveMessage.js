import Lead from "../leads/lead.model.js";
import { sendMessageService } from "../chats/chat.service.js";
import { automationEngine } from "../automation/engine.js";

export const receiveIncomingMessage = async ({ name, phone, text, source }) => {
  try {
    // 1. Find/Create Lead
    let lead = await Lead.findOne({ phone });

    if (!lead) {
      lead = await Lead.create({
        name: name || "Unknown",
        phone,
        source: source || "whatsapp",
      });
    }

    // 2. Save incoming message
    const data = await sendMessageService({
      leadId: lead._id,
      text,
      sender: "customer",
    });

    // 🔥 3. AUTOMATION ENGINE TRIGGER
    await automationEngine({
      leadId: lead._id,
      message: text,
    });

    // 4. Emit real-time
    if (global.io) {
      global.io.emit("incoming-message", data);
    }

    return data;
  } catch (err) {
    console.error("❌ Incoming Error:", err.message);
  }
};
