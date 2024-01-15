import { User } from "../models/User.js";

export const getFavorites = async (req, res, next) => {
  const user = await User.findById(req.user._conditions._id);
  if (!user) {
    return res.status(401).json({ message: "User not found" });
  }
  try {
    return res.status(200).json({ data: user.favorites });
  } catch (error) {
    next(error);
  }
};
