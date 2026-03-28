import Prompt from "./prompt.model.js";
import AutomationRule from "../../automation/automation.model.js";
import { smartParse } from "../smartParser.js";

export const trainAI = async (text) => {
  // save raw prompt
  await Prompt.create({ text });

  // 🔥 AI parsing
  const parsed = await smartParse(text);

  if (!parsed || !parsed.keyword) {
    return { message: "❌ AI समझ नहीं पाया" };
  }

  const rule = await AutomationRule.create(parsed);

  return {
    message: "✅ AI Rule created",
    rule,
  };
};
