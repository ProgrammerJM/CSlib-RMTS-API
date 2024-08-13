const { GetAllUser } = require("../models/GetUsers");

const AllUsers = async (req, res) => {
  try {
    const users = await GetAllUser();
    res.status(200).json(users);
  } catch (err) {
    res.status(401).json("Error fetching users");
    console.log(err);
  }
};

module.exports = { AllUsers };
