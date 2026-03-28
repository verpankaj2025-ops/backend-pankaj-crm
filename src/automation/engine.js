import { checkRules } from "./ruleEngine.js";
import { executeAction } from "./actionExecutor.js";

export const automationEngine = async ({ leadId, message }) => {
  // 1. Rule check
  const ruleResult = await checkRules(message);

  if (ruleResult.matched) {
    // 2. Auto reply
    await executeAction({
      leadId,
      reply: ruleResult.reply,
    });

    return { type: "rule-based" };
  }

  // 3. AI fallback (next step)
  return { type: "ai-needed" };
};
