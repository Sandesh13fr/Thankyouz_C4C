// prompt.js (OpenRouter)
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const configuration = new Configuration({
  apiKey: process.env.OPENROUTER_API_KEY,
  basePath: 'https://openrouter.ai/api/v1',
});

const openai = new OpenAIApi(configuration);

// You can choose any supported model like `mistralai/mixtral-8x7b` or `openai/gpt-3.5-turbo`
const MODEL = "openai/gpt-4"; // or "openai/gpt-4", "anthropic/claude-3-opus", etc.

async function generateThankYou({ name, amount, cause, region }) {
  const prompt = `
  Write a heartfelt thank-you letter to ${name}, who donated ₹${amount} for ${cause}.
  The message should reflect Indian values like seva and compassion, and be culturally warm for someone from ${region}.
  Keep it concise and under 150 words.
  `;

  const completion = await openai.createChatCompletion({
    model: MODEL,
    messages: [
      {
        role: "user",
        content: prompt
      }
    ],
    temperature: 0.8
  });

  return completion.data.choices[0].message.content.trim();
}

module.exports = generateThankYou;
