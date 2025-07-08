const axios = require('axios');
require('dotenv').config();

const sendSmsOtp = async (mobile, otp) => {
  const payload = {
    route: 'otp',
    variables_values: otp,
    numbers: mobile,
  };

  const headers = {
    authorization: process.env.FAST2SMS_API_KEY,
    'Content-Type': 'application/json',
  };

  console.log("📤 Fast2SMS payload:", payload);
  console.log("📤 Fast2SMS headers:", headers);

  try {
    const response = await axios.post('https://www.fast2sms.com/dev/bulkV2', payload, { headers });
    console.log("✅ Fast2SMS Response:", response.data);
    return response.data;
  } catch (error) {
    console.error('📛 Fast2SMS Error:', error.response?.data || error.message);
    throw new Error('Failed to send OTP via Fast2SMS');
  }
};

module.exports = sendSmsOtp;
