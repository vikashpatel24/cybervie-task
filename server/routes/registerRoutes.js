const router = require("express").Router();
const { generateOTP, register } = require("../controllers/accountController");


router.post("/generate-otp", generateOTP);

router.post("/register", register);


module.exports = router;