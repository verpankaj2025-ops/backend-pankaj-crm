import {
  sendMessageService,
  getMessagesService,
  getChatsService
} from "./chat.service.js";

export const sendMessage = async (req, res) => {
  try {
    const data = await sendMessageService(req.body);

    // 🔥 REAL-TIME EMIT
    if (global.io) {
      global.io.emit("new-message", data);
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getMessages = async (req, res) => {
  const messages = await getMessagesService(req.params.chatId);
  res.json(messages);
};

export const getChats = async (req, res) => {
  const chats = await getChatsService();
  res.json(chats);
};
