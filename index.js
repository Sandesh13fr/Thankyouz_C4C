// index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const generateThankYou = require('./prompt');
const sendEmail = require('./emailer');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/webhook', async (req, res) => {
  const donation = req.body;
  console.log('🎯 New donation:', donation);

  try {
    const message = await generateThankYou(donation);

    await sendEmail({
      to: donation.email || process.env.TEST_EMAIL,
      subject: `Thank You, ${donation.name}!`,
      text: message,
    });

    res.status(200).json({ status: 'Email sent successfully!', message });
  } catch (error) {
    console.error('❌ Error:', error);
    res.status(500).json({ status: 'Failed to send email', error: error.message });
  }
});

app.get('/', (req, res) => {
  res.send('🎉 ThankYouz Webhook is Live');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
