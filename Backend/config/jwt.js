import JWT from "jsonwebtoken";
import passport from "passport";
import passportJWT from "passport-jwt";
import "dotenv/config";
import { User } from "../models/User.js";

export const setJWTStrategy = () => {
  const secret = process.env.SECRET_KEY;

  const ExtractJWT = passportJWT.ExtractJwt;
  const Strategy = passportJWT.Strategy;
  const params = {
    secretOrKey: secret,
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  };

  passport.use(
    new Strategy(params, async function (payload, done) {
      try {
        const user = User.find({ _id: payload.id }).lean();
        if (!user) {
          return done(new Error("User not found"));
        }
        return done(null, user);
      } catch (e) {
        return done(e);
      }
    })
  );
};

export const createTokens = async (
  data,
  accesTokenExpIn = "1h",
  refreshTokenExpIn = "1d"
) => {
  const secret = process.env.SECRET_KEY;
  const refreshSecret = process.env.REFRESH_SECRET_KEY;

  const jwtToken = await JWT.sign(data, secret, accesTokenExpIn);
  const refreshToken = await JWT.sign(data, refreshSecret, refreshTokenExpIn);
  return { jwtToken, refreshToken };
};
