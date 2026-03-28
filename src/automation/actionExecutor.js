import { sendMessageService } from "../chats/chat.service.js";

export const executeAction = async ({ leadId, reply }) => {
  const data = await sendMessageService({
    leadId,
    text: reply,
    sender: "bot",
  });

  if (global.io) {
    global.io.emit("bot-reply", data);
  }

  return data;
};
