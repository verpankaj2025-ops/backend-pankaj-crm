import OpenAI from "openai";
import User from "../users/user.model.js";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateAIReply = async (message, userId) => {
  const user = await User.findById(userId);

  // FREE PLAN LIMIT
  if (user.plan === "free" && user.messagesUsed > 50) {
    return "Upgrade to pro for unlimited AI replies 🚀";
  }

  const completion = await openai.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      { role: "user", content: message },
    ],
  });

  user.messagesUsed += 1;
  await user.save();

  return completion.choices[0].message.content;
};
