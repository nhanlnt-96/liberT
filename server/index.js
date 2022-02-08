const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

const db = require("./models");

app.get("/", (req, res) => {
  res.send("Welcome to our server");
});

const bannerRouter = require("./routes/Banner");
app.use("/banner", bannerRouter);

const userRouter = require("./routes/User");
app.use("/user", userRouter);

db.sequelize.sync().then(() => {
  app.listen((process.env.PORT || 3001), () => {
    console.log(`Server is running on port 3001 in ${app.settings.env} mode`);
  });
}).catch((error) => {
  console.log(error);
});
