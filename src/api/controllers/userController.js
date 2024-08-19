const {
  createUser,
  findUserByUsername,
  checkPassword,
} = require("../models/userModel");

const SignUpUser = async (req, res) => {
  try {
    // Extract the username, password, and role from the request body
    const { username, password, role } = req.body;
    await createUser(username, password, role);
    res.status(201).send();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const LoginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Check if the user exists
    const user = await findUserByUsername(username);
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Check if the password is valid
    const validPassword = await checkPassword(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Invalid username or password" });
    }
    res.status(200).json({ message: "Login successful" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { SignUpUser, LoginUser };
