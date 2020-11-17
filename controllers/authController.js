const User = require("../models/User");
const jwt = require("jsonwebtoken");

const maxAge = 3 * 24 * 60 * 60;
const handleError = (err) => {
  console.log(err);
  let errors = {};
  if (err.code === 11000) {
    errors.email = "Email already exists";
  }
  if (err.message === "incorrect data") {
    errors = "Email or password is incorrect";
  }
  if (err.message.includes("User validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};
const createToken = (id) => {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: maxAge,
  });
};

module.exports.register = async (req, res) => {
  const { name, email, password, avatar_img } = req.body;
  try {
    const user = await User.create({ name, email, password, avatar_img });
    const accessToken = createToken(user._id);
    res.status(201).json({
      message: "User created successfully!",
      user: {
        name: user.name,
        email: user.email,
        avatar_img: user.avatar_img,
      },
      accessToken: accessToken,
    });
  } catch (err) {
    const error = handleError(err);
    res.status(500).json({ error });
  }
};
module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const accessToken = createToken(user._id);
    res.status(200).json({
      user: {
        name: user.name,
        email: user.email,
        avatar_img: user.avatar_img,
      },
      accessToken: accessToken,
      message: "Logged in successfully",
    });
  } catch (err) {
    const error = handleError(err);
    res.status(400).json({ error });
  }
};
module.exports.logout = async (req, res) => {};
