// prompt.js (OpenRouter + OpenAI SDK v4)
require('dotenv').config();
const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: 'https://openrouter.ai/api/v1',
});

// Choose your model here
const MODEL = 'openai/gpt-4'; // You can change to gpt-4 or claude as needed

async function generateThankYou({ name, amount, cause, region }) {
  const prompt = `
    Write a heartfelt thank-you letter to ${name}, who donated ₹${amount} for ${cause}.
    The message should reflect Indian values like seva and compassion, and be culturally warm for someone from ${region}.
    Keep it under 150 words.
  `;

  const response = await openai.chat.completions.create({
    model: MODEL,
    messages: [
      { role: 'user', content: prompt }
    ],
    temperature: 0.8
  });

  return response.choices[0].message.content.trim();
}

module.exports = generateThankYou;
