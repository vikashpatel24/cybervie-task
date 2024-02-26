const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();

const port = process.env.PORT || 5000;
const uri = process.env.MONGODB_URL;

// Middlewares
app.use(cors());
app.use(express.json());

mongoose
  .connect(uri)
  .then(() => {
    console.log(`Connected to ${uri}`);
  })
  .catch((err) => {
    console.log(err);
  });

const allRoutes = require("./routes/registerRoutes");
app.use("/", allRoutes);

const userRoutes = require("./routes/adminRoutes");
app.use("/admin", userRoutes);


app.get("/", (req, res) => {
  res.send("Hello!");
});

app.listen(port, () => {
  console.log(`Server started running on port ${port}`);
});
