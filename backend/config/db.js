require('dotenv').config(); // 👈 MUST be first

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB
});

connection.connect((err) => {
  if (err) {
    console.error('❌ MySQL connection error:', err.message);
    return;
  }
  console.log('✅ MySQL connected');
});

module.exports = connection;
