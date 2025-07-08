// regex.js

const patterns = {
  email: /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
  mobile: /^[6-9]\d{9}$/,
  strongPassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  name: /\s+/g

};

module.exports = patterns;
