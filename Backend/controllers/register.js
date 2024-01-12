import { User } from "../models/User.js";

export const register = async (req, res, next) => {
  const { email, password, username } = req.body;
  const user = await User.findOne({ email }).lean();
  if (user) {
    res.status(409).json({ message: "Email is already in use" });
  }
  try {
    console.log(password);
    const newUser = new User({ username, email });

    await newUser.setPassword(password);

    await newUser.save();

    res.status(201).json({ message: "registration succesfull" });
  } catch (error) {
    next(error);
  }
};
