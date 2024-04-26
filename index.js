import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import setupSwagger from "./swagger.js";
import setupRoutes from "./routes/routes.js";
import "dotenv/config";

const app = express();
const PORT = 3044;
// const dbURL =
//   "mongodb+srv://adminUser:Admin2000@clustertourism.1fbk1r9.mongodb.net/Alpha";

app.use(cors());

async function start() {
  try {
    await mongoose.connect(process.env.DB_URL);

    setupRoutes(app);
    setupSwagger(app);

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log("Error accured while connection to MongoDB", error);
  }
}

start();
