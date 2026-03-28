import Chat from "./chat.model.js";
import Message from "./message.model.js";

export const sendMessageService = async ({ leadId, text, sender }) => {
  let chat = await Chat.findOne({ leadId });

  // Create chat if not exists
  if (!chat) {
    chat = await Chat.create({ leadId, lastMessage: text });
  } else {
    chat.lastMessage = text;
    await chat.save();
  }

  const message = await Message.create({
    chatId: chat._id,
    sender,
    text,
  });

  return { chat, message };
};

export const getMessagesService = async (chatId) => {
  return await Message.find({ chatId }).sort({ createdAt: 1 });
};

export const getChatsService = async () => {
  return await Chat.find().sort({ updatedAt: -1 });
};
