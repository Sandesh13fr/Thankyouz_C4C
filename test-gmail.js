// test-gmail.js
require('dotenv').config();
const nodemailer = require('nodemailer');

async function testGmailAuth() {
  console.log('Testing Gmail authentication...');
  console.log('Gmail User:', process.env.GMAIL_USER);
  console.log('Gmail Pass length:', process.env.GMAIL_PASS ? process.env.GMAIL_PASS.length : 'undefined');
  
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    // Verify the connection
    await transporter.verify();
    console.log('✅ Gmail authentication successful!');
    
    // Send a test email
    const info = await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.TEST_EMAIL,
      subject: 'Test Email from ThankYouz',
      text: 'This is a test email to verify Gmail authentication.',
    });
    
    console.log('✅ Test email sent successfully!');
    console.log('Message ID:', info.messageId);
  } catch (error) {
    console.error('❌ Gmail authentication failed:');
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);
  }
}

testGmailAuth();
