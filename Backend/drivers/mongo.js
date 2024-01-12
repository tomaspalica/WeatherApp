import mongoose from "mongoose";

export const conectToMongo = () => {
  const { DB_HOST: uriDb } = process.env;
  return mongoose.connect(uriDb);
};
