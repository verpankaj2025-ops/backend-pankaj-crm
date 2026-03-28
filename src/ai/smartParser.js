import OpenAI from "openai";

export const smartParse = async (text) => {
  try {
    // 🔥 create instance INSIDE function (important fix)
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const completion = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "system",
          content: `
You are an AI that converts user instructions into JSON rules.

Return ONLY JSON:
{
  "keyword": "...",
  "reply": "..."
}
          `,
        },
        {
          role: "user",
          content: text,
        },
      ],
    });

    const response = completion.choices[0].message.content;

    return JSON.parse(response);
  } catch (err) {
    console.error("Smart Parser Error:", err.message);
    return null;
  }
};
