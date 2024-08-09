const express = require("express");
const app = express();
app.use(express.json());

const userRoute = require("./api/routes/User");

app.use("/api/user", userRoute);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
