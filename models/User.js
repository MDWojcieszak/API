const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { isEmail } = require("validator");
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter name"],
  },
  email: {
    type: String,
    unique: true,
    require: [true, "Please enter email"],
    validate: [isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    require: [true, "Please enter password"],
    minlength: [6, "Minimum password length is 6 characters"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  type: {
    type: String,
    default: "user",
  },
});
UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });

  if (user) {
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
      return user;
    }
    throw Error("incorrect data");
  }
  throw Error("incorrect data");
};

module.exports = mongoose.model("User", UserSchema);
