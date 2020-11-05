const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
  registerValidation,
  loginValidation,
} = require("./middlewares/validation");
const authenticateToken = require("./middlewares/authentication");

router.post("/register", async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });

  const emailCheck = await User.findOne({ email: req.body.email });
  if (emailCheck)
    return res.status(400).send({ error: "Email already exists" });

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
  });
  user
    .save()
    .then((result) => {
      res.status(201).json({
        message: "User created successfully!",
        createdUser: {
          name: result.name,
          email: result.email,
        },
      });
    })
    .catch((error) => {
      res.statue(500).json({ error: error });
    });
});

router.post("/login", async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });

  const user = await User.findOne({ email: req.body.email });
  if (!user)
    return res.status(400).send({ error: "Email or password is incorrect" });

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(400).send({ error: "Email or password is incorrect" });
  const accessToken = jwt.sign(
    { _id: user._id },
    process.env.ACCESS_TOKEN_SECRET
  );
  res.json({ accessToken: accessToken, message: "Logged in successfully" });
});

router.post("/logout", (req, res) => {});
router.get("/test", authenticateToken, async (req, res) => {
  const user = await User.findOne({ _id: req.user_id });
  res.send(user);
});

module.exports = router;
