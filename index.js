import express from "express";
import mongoose from "mongoose";
import setupRoutes from "./routes/routes.js";
import { User } from "./models/User.js";
import { Tour } from "./models/Tour.js";
import { Card } from "./models/Card.js";
import "dotenv/config";

const app = express();
const PORT = 3044;
const dbURL =
  "mongodb+srv://adminUser:Admin2000@clustertourism.1fbk1r9.mongodb.net/Alpha";

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello!");
});

async function start() {
  try {
    await mongoose.connect(dbURL);
    setupRoutes(app);
    app.listen(PORT, () => {
      console.log(`Server running at https://localhost:${PORT}`);
    });
  } catch (error) {
    console.log("Error accured while connection to MongoDB", error);
  }
}

start();
