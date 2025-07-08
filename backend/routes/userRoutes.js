const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');

//router.post('/send-otp', userControllers.sendOtp);
//router.post('/verify-otp', userControllers.verifyOtpAndCreateUser);
router.post('/users', userControllers.userDetails)
module.exports = router;