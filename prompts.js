// prompt.js
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });

async function generateThankYou({ name, amount, cause, region }) {
  const prompt = `
  Write a heartfelt thank-you letter to ${name}, who donated ₹${amount} for ${cause}.
  The message should be warm, culturally appropriate for someone from ${region}, and reflect Indian values like compassion, seva, and gratitude.
  Keep it under 150 words.
  `;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}

module.exports = generateThankYou;
