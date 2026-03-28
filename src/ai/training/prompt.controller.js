import { trainAI } from "./prompt.service.js";

export const trainPrompt = async (req, res) => {
  try {
    const result = await trainAI(req.body.text);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
