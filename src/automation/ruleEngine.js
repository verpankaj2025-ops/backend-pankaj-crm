import AutomationRule from "./automation.model.js";

export const checkRules = async (message) => {
  const rules = await AutomationRule.find({ isActive: true });

  const lowerMsg = message.toLowerCase();

  for (let rule of rules) {
    if (lowerMsg.includes(rule.keyword.toLowerCase())) {
      return {
        matched: true,
        reply: rule.reply,
      };
    }
  }

  return { matched: false };
};
