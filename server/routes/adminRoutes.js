const router = require("express").Router();
const {
  getAllUsers,
} = require("../controllers/userController");

router.get("/users", getAllUsers);

module.exports = router;
