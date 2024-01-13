import { User } from "../models/User.js";

export const addFavorites = async (req, res, next) => {
  const { favoritesId } = req.body;
  const user = await User.findById(req.user._conditions._id);

  try {
    console.log(user.favorites);
    if (user.favorites.includes(favoritesId)) {
      const filtered = user.favorites.filter((el) => el !== favoritesId);
      user.favorites = filtered;
      user.save();
      res.status(200).json({ message: "succesfull" });
    } else {
      user.favorites.push(favoritesId);
      await user.save();
      res.status(201).json({ message: "succesfully added" });
    }
  } catch (error) {
    next(error);
  }
};
