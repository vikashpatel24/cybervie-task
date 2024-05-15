const axios = require("axios");
 const DeviceDetector = require("node-device-detector");
 const ClientHints = require("node-device-detector/client-hints");
const User = require("../models/User");

const generateOTP = async (req, res) => {
  const { email, phone } = req.body;
  console.log(req.body);

  try {
    const existingUser = await User.findOne({ $or: [{ email }, { phone }] });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Email or phone number already registered" });
    }

    // const otp = Math.floor(100000 + Math.random() * 900000);
    return res.status(200).json({ msg: "Done" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const register = async (req, res) => {
  const { name, email, phone, loc } = req.body;
  console.log(req.body);



  // init app
  const deviceDetector = new DeviceDetector({
    clientIndexes: true,
    deviceIndexes: true,
    deviceAliasCode: false,
  });
  const clientHints = new ClientHints();

  const hasBotResult = (result) => {
    return result && result.name;
  };

  const userg = req.headers["user-agent"];
  const clientHintsData = clientHints.parse(req.headers);

  req.useragent = userg;
  req.device = deviceDetector.detect(userg, clientHintsData);
  req.bot = deviceDetector.parseBot(userg);

  const detectResult = req.device;
  const os = detectResult.os;
  const client = detectResult.client;
  const device = detectResult.device;
  console.log(os, client, device);
  const dd = JSON.stringify(
    os.name +
      ", " +
      os.version +
      ", " +
      client.type +
      ", " +
      client.name +
      ", " +
      device.type +
      ", " +
      device.brand +
      ", " +
      device.model
  );

  try {
    await User.create({
      name,
      email,
      phone,
      device: dd,
      location: loc,
      otp: null,
    });

    res.json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { generateOTP, register };
