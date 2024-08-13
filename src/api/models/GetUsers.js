const pool = require("../../config/db");

const GetAllUser = async () => {
  try {
    const getAllUsers = await pool.query(
      "SELECT id, username, role FROM users"
    );
    return getAllUsers.rows;
  } catch (err) {
    throw new Error("Error fetching users");
  }
};

module.exports = { GetAllUser };
