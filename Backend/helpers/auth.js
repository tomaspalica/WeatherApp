import { User } from "../models/User.js";

export const updateUser = (id, fields) => {
  return User.findByIdAndUpdate({ _id: id }, { $set: fields }, { new: true });
};
