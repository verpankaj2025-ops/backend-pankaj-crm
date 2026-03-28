import express from "express";
import {
  sendMessage,
  getMessages,
  getChats
} from "../../chats/chat.controller.js";

const router = express.Router();

router.post("/send", sendMessage);
router.get("/", getChats);
router.get("/:chatId/messages", getMessages);

export default router;
