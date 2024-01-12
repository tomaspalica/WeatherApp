import { app } from "./app.js";
import "dotenv/config";
import { conectToMongo } from "./drivers/mongo.js";

const startServer = async () => {
  try {
    await conectToMongo();
    console.log("Database connection successful");
    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000");
    });
  } catch (error) {
    console.log("Database connection failed, shutting down");
    console.error(error);
    process.exit(1);
  }
};

startServer();
