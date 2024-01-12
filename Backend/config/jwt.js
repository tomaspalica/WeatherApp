import JWT from "jsonwebtoken";
import passport from "passport";
import passportJWT from "passport-jwt";
import "dotenv/config";
import { User } from "../models/User.js";

export const setJWTStrategy = () => {
  const ExtractJwt = passportJWT.ExtractJwt;
  const Strategy = passportJWT.Strategy;
  const params = {
    secretOrKey: process.env.SECRET_KEY,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  };

  passport.use(
    new Strategy(params, function (payload, done) {
      try {
        const user = User.find({ _id: payload.id });

        if (!user) {
          throw new Error("User not found");
        }

        const userToken = JWT.verify(user.token, process.env.SECRET_KEY);

        if (userToken.iat !== payload.iat) {
          throw new Error("Not valid Token");
        }
        return done(null, user);
      } catch (err) {
        done(err);
      }
    })
  );
};
