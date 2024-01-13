import { User } from "../models/User.js";
import "dotenv/config";
import jwt from "jsonwebtoken";
import { updateUser } from "../helpers/auth.js";
export const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !user.validPassword(password)) {
    return res.status(401).json({ message: "Incoret user or password" });
  }
  try {
    const payload = {
      id: user.id,
      email: user.email,
    };

    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    const result = await updateUser(user.id, { token });
    res.status(200).json({ ourtoken: token, data: result });
  } catch (error) {
    next(error);
  }
};
