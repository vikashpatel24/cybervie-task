const User = require("../models/User");
// import  firebase from "../utils/firebase";







const generateOTP = async (req, res) => {
  const { email, phone } = req.body;
  console.log(req.body)

  // Check if email or phone already registered
  try {
  const existingUser = await User.findOne({ $or: [{ email }, { phone }] });
  if (existingUser) {
    return res
      .status(400)
      .json({ message: "Email or phone number already registered" });
  }

  // const otp = Math.floor(100000 + Math.random() * 900000);
  return res.status(200).json({msg:"Done"})
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const register = async (req, res) => {
  const { name, email, phone } = req.body;
  console.log(req.body);

  try {
      await User.create({ name, email, phone, otp: null });
 

    res.json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { generateOTP, register };
