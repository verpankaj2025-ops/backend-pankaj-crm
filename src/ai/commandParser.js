export const parseCommand = (text) => {
  const lower = text.toLowerCase();

  // simple pattern extraction
  if (lower.includes("price")) {
    return {
      keyword: "price",
      reply: "Our packages start from ₹1499 💆‍♂️"
    };
  }

  if (lower.includes("location")) {
    return {
      keyword: "location",
      reply: "We are located in Gomti Nagar, Lucknow 📍"
    };
  }

  return null;
};
