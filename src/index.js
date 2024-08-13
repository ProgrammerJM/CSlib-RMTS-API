const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const userRoute = require("./api/routes/User");
const getUsers = require("./api/routes/GetUsers");

app.use("/api/user", userRoute);
app.use("/api/getUsers", getUsers);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
