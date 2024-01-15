import express from "express";
import { register } from "../controllers/register.js";
import { login } from "../controllers/login.js";
import { authMiddleware } from "../midlewares/authMiddlewere.js";
import { addFavorites } from "../controllers/favorites.js";
import { getFavorites } from "../controllers/getFavorites.js";
const router = express.Router();

router.post("/signup", register);
router.get("/login", login);
router.post("/favorites", authMiddleware, addFavorites);
router.get("/favCollection", authMiddleware, getFavorites);
export { router };
