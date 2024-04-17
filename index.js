import express from "express";
import mongoose from "mongoose";
import { User } from "./models/User.js";
import { Tour } from "./models/Tour.js";

const app = express();
const PORT = 3044;
const dbURL =
  "mongodb+srv://adminUser:Admin2000@clustertourism.1fbk1r9.mongodb.net/Alpha";

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.get("/users", async (req, res) => {
  try {
    const result = await User.find();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.post("/users", async (req, res) => {
  try {
    const newUser = new User(req.body);
    const result = await newUser.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.post("/tours/:adminId", async (req, res) => {
  try {
    const { adminId } = req.params;
    const newTour = new Tour({
      ...req.body,
      adminId: adminId,
    });
    const result = await newTour.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

//корзина
app.post("/card/:userId", async (req, res) => {
    try {
      const { userId } = req.params;
      const newCard = new Card({
        ...req.body,
        adminId: adminId,
      });
      const result = await newTour.save();
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  });

async function start() {
  await mongoose.connect(dbURL);
  app.listen(PORT, () => {
    console.log(`Server running at https://localhost:${PORT}`);
  });
}

start();
