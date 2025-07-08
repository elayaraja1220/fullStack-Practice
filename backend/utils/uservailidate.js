const regex = require('./regex');

function validateUserInput({ firstname, gender, email, password, contact }) {
  // Check required fields
  if (!firstname || !gender || !contact || !email || !password) {
    return 'Firstname, gender, contact, email, and password are required.';
  }

  // Validate mobile number (as string to match regex)
  const contactStr = typeof contact === 'number' ? contact.toString() : String(contact).trim();
  if (!regex.mobile.test(contactStr)) {
    return 'Invalid mobile number. Only digits (10–15) allowed.';
  }

  // Validate email
  if (!regex.email.test(email)) {
    return 'Invalid email format.';
  }

  // Optional: Validate password strength
  if (regex.password && !regex.password.test(password)) {
    return 'Password must be at least 8 characters and include letters and numbers.';
  }

  // Optional: Validate gender value
  const validGenders = ['Male', 'Female', 'Other'];
  if (!validGenders.includes(gender)) {
    return 'Gender must be Male, Female, or Other.';
  }

  return null; // no error
}

module.exports = validateUserInput;
