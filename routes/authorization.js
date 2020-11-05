const router = require("express").Router();
const User = require("../models/User");
const { registerValidation, loginValidation } = require("../validation");

router.post("/register", async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });

  const emailCheck = await User.findOne({ email: req.body.email });
  if (emailCheck)
    return res.status(400).send({ error: "Email already exists" });
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
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

router.post("/login", (req, res) => {});

router.post("/logout", (req, res) => {});

module.exports = router;
