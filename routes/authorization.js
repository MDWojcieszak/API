const router = require("express").Router();
const User = require("../models/User");
const requireAuth = require("../middlewares/authentication");
const authController = require("../controllers/authController");

router.post("/register", authController.register);

router.post("/login", authController.login);

router.post("/logout", authController.logout);

router.get("/info", requireAuth, async (req, res) => {
  const user = await User.findOne({ _id: req.user_id });
  res.send(user);
});

module.exports = router;
