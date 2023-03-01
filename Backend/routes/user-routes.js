const express = require("express");
const {
  register,
  login,
  verifyToken,
  refreshToken,
  getUser,
  logout,
} = require("../controllers/user-controller");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/user", verifyToken, getUser);
router.get("/refresh", refreshToken, verifyToken, getUser);
router.post("/logout", verifyToken, logout);
module.exports = router;
