require("dotenv").config();

async function generateThankYou({ name, amount, cause, region, organization, descriptiveCause }) {
  const prompt = `Write a heartfelt thank-you letter in English to ${name}, who donated ₹${amount} for ${descriptiveCause} at ${organization}.
Make it culturally warm for someone from ${region}, incorporating Indian values like seva (selfless service), gratitude, and community care. Keep the letter under 1000 words.

Guidelines:
- Begin with a regional greeting that resonates with the recipient's background
- Express sincere gratitude for the donation, highlighting seva and compassion values
- Personalize the impact with specific outcomes enabled by the donation
- Use warm, inclusive language that emphasizes community and collective progress
- Mention the organization (${organization}) and the specific cause (${descriptiveCause})
- Close with a culturally familiar sign-off like "Dhanyavaad" or "With heartfelt thanks"

**Format the output as visually appealing HTML, and include the image from this URL/path at the top: https://iili.io/F0Tf3YP.jpg.**
`;

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'HTTP-Referer': process.env.OPENROUTER_REFERER,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'openai/gpt-4o',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.8
      })
    });

    if (response.ok) {
      const data = await response.json();
      let message = data.choices[0].message.content.trim();
      message = message.replace(/^```html\s*/i, '').replace(/```$/i, '').trim();

      const imageHtml = `<div style="text-align:center;"><img src="https://iili.io/F0Tf3YP.jpg" alt="Thank You" style="max-width:300px; margin-bottom:20px;"/></div>`;
      message = message.replace(/<img[^>]*>/gi, '');
      
      message = message
        .replace(new RegExp(name, 'gi'), `<b>${name}</b>`)
        .replace(new RegExp(`₹${amount}`, 'gi'), `<b>₹${amount}</b>`)
        .replace(new RegExp(organization, 'gi'), `<b>${organization}</b>`)
        .replace(new RegExp(descriptiveCause, 'gi'), `<b>${descriptiveCause}</b>`);
      const formattedMessage = `${imageHtml}<p>${message.replace(/\n+/g, '</p><p>').trim()}</p>`;
      return formattedMessage;
    } else {
      const message = data.choices[0].message.content.trim();
      let highlighted = message
        .replace(new RegExp(name, 'gi'), `<b>${name}</b>`)
        .replace(new RegExp(`₹${amount}`, 'gi'), `<b>₹${amount}</b>`)
        .replace(new RegExp(organization, 'gi'), `<b>${organization}</b>`)
        .replace(new RegExp(descriptiveCause, 'gi'), `<b>${descriptiveCause}</b>`);
      const formattedMessage = `<p>${highlighted.replace(/\n+/g, '</p><p>').trim()}</p>`;
      const imageHTML = '<div style="text-align:center;"><img src="https://iili.io/F0Tf3YP.jpg" alt="Thank You" style="max-width:300px; margin-bottom:20px;"/></div>';
      return `${imageHTML}${formattedMessage}`;
    }
  } catch (error) {
    console.log(
      "OpenRouter API error, using fallback template:",
      error.message
    );
    return generateFallbackMessage({ name, amount, cause, region, organization, descriptiveCause });
  }
}

function generateFallbackMessage({ name, amount, cause, region, organization, descriptiveCause }) {
  const templates = [
    `<div style="text-align:center;"><img src="https://iili.io/F0Tf3YP.jpg" alt="Thank You" style="max-width:300px; margin-bottom:20px;"/></div>
    <p>Dear <b>${name}</b>,</p>
    <p>Namaste! 🙏</p>
    <p>We are deeply grateful for your generous donation of <b>₹${amount}</b> towards <b>${descriptiveCause}</b> at <b>${organization}</b>. Your kindness embodies the spirit of <b>seva</b> and compassion that makes our community stronger.</p>
    <p>From <b>${region}</b>, your support reaches far and wide, touching lives and bringing hope to those in need. Your contribution is not just a donation—it's a blessing that will create lasting impact.</p>
    <p>With heartfelt gratitude and warm regards,<br><b>${organization} Team</b></p>`,

    `<div style="text-align:center;"><img src="https://iili.io/F0Tf3YP.jpg" alt="Thank You" style="max-width:300px; margin-bottom:20px;"/></div>
    <p>Pranaam <b>${name}</b>! 🙏</p>
    <p>Your beautiful gesture of donating <b>₹${amount}</b> for <b>${descriptiveCause}</b> at <b>${organization}</b> has filled our hearts with joy and gratitude. The values of <b>daan</b> and <b>seva</b> that you've shown are truly inspiring.</p>
    <p>People like you from <b>${region}</b> remind us why we believe in the power of collective kindness. Your support will make a real difference in the lives of those we serve.</p>
    <p>May this act of generosity bring you abundant blessings!</p>
    <p>With deepest appreciation,<br><b>${organization} Team</b></p>`,

    `<div style="text-align:center;"><img src="https://iili.io/F0Tf3YP.jpg" alt="Thank You" style="max-width:300px; margin-bottom:20px;"/></div>
    <p>Dear <b>${name}</b>,</p>
    <p>Your contribution of <b>₹${amount}</b> towards <b>${descriptiveCause}</b> at <b>${organization}</b> is a shining example of the beautiful Indian tradition of helping others. We are touched by your generosity and commitment to making a positive change.</p>
    <p>From <b>${region}</b> to everywhere our work reaches, your kindness creates ripples of hope and healing. Thank you for being a beacon of compassion in our community.</p>
    <p>With gratitude and warm wishes,<br><b>${organization} Team</b></p>`,
  ];

  return templates[Math.floor(Math.random() * templates.length)];
}

module.exports = generateThankYou;