const bcrypt = require("bcrypt");
const pool = require("../../config/db");

// Create a new user
const createUser = async (username, password, role) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  await pool.query(
    "INSERT INTO users (username, password, role) VALUES ($1, $2, $3)",
    [username, hashedPassword, role]
  );
};

// Find a user by their username
const findUserByUsername = async (username) => {
  const result = await pool.query("SELECT * FROM users WHERE username = $1", [
    username,
  ]);
  return result.rows[0];
};

// Compare the password provided by the user with the hashed password stored in the database
const checkPassword = async (password, userPassword) => {
  return await bcrypt.compare(password, userPassword);
};

module.exports = { createUser, findUserByUsername, checkPassword };
