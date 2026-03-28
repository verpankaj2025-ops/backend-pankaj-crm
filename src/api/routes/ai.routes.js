import express from "express";
import { trainPrompt } from "../../ai/training/prompt.controller.js";

const router = express.Router();

router.post("/train", trainPrompt);

export default router;
