// test-openrouter.js
require('dotenv').config();

async function testAPI() {
  try {
    console.log('Testing OpenRouter API with fetch...');
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'HTTP-Referer': process.env.OPENROUTER_REFERER,
        'X-Title': 'ThankYouz C4C Test',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'openai/gpt-3.5-turbo',
        messages: [
          { role: 'user', content: 'Say hello' }
        ],
        max_tokens: 50
      })
    });

    console.log('Response status:', response.status);
    const data = await response.json();
    
    if (response.ok) {
      console.log('✅ Success:', data.choices[0].message.content);
    } else {
      console.log('❌ Error:', data);
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

testAPI();
