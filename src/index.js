const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const userRoute = require("./api/routes/userRoutes");
const bookRoute = require("./api/routes/bookRoutes");

app.use("/api/user", userRoute);
app.use("/api/books", bookRoute);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
