import axios from "axios";
import { getWhatsAppConfig } from "../integrations/whatsapp.service.js";

// 🔥 WhatsApp message send
export const sendWhatsAppMessage = async (to, message) => {
  try {
    const { token, phoneId } = getWhatsAppConfig();

    // ❗ अगर config नहीं है तो skip
    if (!token || !phoneId) {
      console.log("⚠️ WhatsApp not configured");
      return;
    }

    await axios.post(
      `https://graph.facebook.com/v18.0/${phoneId}/messages`,
      {
        messaging_product: "whatsapp",
        to,
        type: "text",
        text: {
          body: message,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ WhatsApp message sent");
  } catch (err) {
    console.error("❌ WhatsApp send error:", err.response?.data || err.message);
  }
};
