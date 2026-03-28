import { receiveIncomingMessage } from "../messaging/receiveMessage.js";

export const webhookHandler = async (req, res) => {
  try {
    const entry = req.body.entry?.[0];
    const changes = entry?.changes?.[0];
    const value = changes?.value;

    const message = value?.messages?.[0];

    if (message) {
      const phone = message.from;
      const text = message.text?.body || "";

      // 🔥 AD SOURCE DETECT
      let source = "whatsapp";

      if (value?.metadata?.display_phone_number) {
        source = "meta_ads";
      }

      await receiveIncomingMessage({
        name: "Ad Lead",
        phone,
        text,
        source,
      });
    }

    res.sendStatus(200);
  } catch (err) {
    console.error("Webhook Error:", err.message);
    res.sendStatus(500);
  }
};

export const verifyWebhook = (req, res) => {
  const VERIFY_TOKEN = "my_verify_token";

  if (req.query["hub.verify_token"] === VERIFY_TOKEN) {
    return res.send(req.query["hub.challenge"]);
  }

  res.sendStatus(403);
};
