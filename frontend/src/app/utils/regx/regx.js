const patterns = {
  email: /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
  mobile: /^[6-9]\d{9}$/,
  weakPassword: /^[a-zA-Z]{4,}$/, // Only letters, minimum 4 characters
  numericPassword: /^\d{4,}$/, // Only numbers, minimum 4 digits
  mediumPassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/, // Lower + Upper + Digit
  strongPassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, // + Special char
  veryStrongPassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[^\s]{10,}$/, // 10+ chars + any special char
  ultraSecurePassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])(?!.*(.)\1)[^\s]{12,}$/, // No repeat, 12+
  pin4Digits: /^\d{4}$/, // 4 digit PIN
  pin6Digits: /^\d{6}$/ // 6 digit PIN
};

export default patterns;
