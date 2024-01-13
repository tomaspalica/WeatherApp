import mongoose, { Schema, mongo } from "mongoose";
import bCrypt from "bcrypt";
const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "username is required"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "email is required"],
  },
  password: {
    type: String,
    required: true,
  },
  //   verificationToken: {
  //     type: String,
  //     required: true,
  //   },
  //   refreshToken: {
  //     type: String,
  //     required: true,
  //   },
  token: {
    type: String,
    default: null,
  },
  favorites: [{ type: String }],
});

userSchema.methods.setPassword = async function (password) {
  this.password = await bCrypt.hash(password, 12);
};
userSchema.methods.validPassword = async function (password) {
  return bCrypt.compare(password, this.password);
};

export const User = mongoose.model("user", userSchema);
