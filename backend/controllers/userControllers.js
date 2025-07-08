const db = require('../config/db');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const regex = require('../utils/regex');
const UserValidateInput = require('../utils/uservailidate');

exports.userDetails = async (req, res) => {
  try {
    const rawContact = req.body.contact;
    const contactStr = typeof rawContact === 'number' ? rawContact.toString() : String(rawContact).trim();

    const data = {
      firstname: req.body.firstname?.replace(regex.name, ''),
      lastname: req.body.lastname?.replace(regex.name, ''),
      gender: req.body.gender?.trim(),
      email: req.body.email?.trim(),
      password: req.body.password?.trim(),
      userid: uuidv4(),
      contact: Number(contactStr)
    };

    // Validate user input
    const validationError = UserValidateInput({ ...data, contact: contactStr }); // pass contact as string
    if (validationError) {
      return res.status(400).json({ message: validationError });
    }

    // Check if user already exists (by email or contact)
    const checkSql = 'SELECT * FROM users WHERE email = ? OR contact = ?';
    db.query(checkSql, [data.email, data.contact], async (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Database error', error: err });
      }

      if (result.length > 0) {
        return res.status(409).json({ message: 'User already registered' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(data.password, 10);

      // Insert user into database
      const insertSql = `
        INSERT INTO users (userid, firstname, lastname, gender, contact, email, password)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `;

      db.query(insertSql, [data.userid, data.firstname, data.lastname, data.gender, data.contact, data.email, hashedPassword], (insertErr, insertResult) => {
        if (insertErr) {
          return res.status(500).json({ message: 'Database insert error', error: insertErr });
        }

        res.status(201).json({
          message: 'User created successfully',
          userId: result.insertId,
          user: {
            userid: data.userid,
            firstname: data.firstname,
            lastname: data.lastname,
            gender: data.gender,
            contact: data.contact,
            email: data.email
          }
        });
      });
    });

  } catch (err) {
    console.error('Internal server error:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};
