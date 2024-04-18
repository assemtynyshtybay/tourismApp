import express from "express";
import mongoose from "mongoose";
import { User } from "./models/User.js";
import { Tour } from "./models/Tour.js";
import { Card } from "./models/Card.js";

const app = express();
const PORT = 3044;
const dbURL =
  "mongodb+srv://adminUser:Admin2000@clustertourism.1fbk1r9.mongodb.net/Alpha";

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello!");
});
// users
app.get("/getUserInfo", async (req, res) => {
  try {
    const { userLogin } = req.body;
    const result = await User.findOne({ username: userLogin });
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

// tours
app.post("/tours/create", async (req, res) => {
  try {
    const newTour = new Tour({
      ...req.body,
    });
    const result = await newTour.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get("/getTours", async (req, res) => {
  try {
    const result = await Tour.find();
    res.status(201).json({ statusCode: 1, count: result.length, data: result });
  } catch (error) {
    res.status(500).json(error);
  }
});

app.post("/user/buyTour", async (req, res) => {
  try {
    const { tourId, userId } = req.body;
    const result = await User.findByIdAndUpdate(userId, {
      $push: { tours: tourId },
    });
    await Tour.findByIdAndUpdate(tourId, { $push: { users: userId } });
    res.status(201).json({ message: "Тур успешно куплен!", data: result });
  } catch (error) {
    res.status(500).json(error);
  }
});
//корзина
app.get("/user/getCard", async (req, res) => {
  try {
    const { userId } = req.body;

    const result = await Card.findOneAndUpdate({ userId: userId }).populate({
      path: "tours",
      select: "loactionName price currency duration",
    });
    res.status(201).json({ message: "Ваша корзина", data: result });
  } catch (error) {
    res.status(500).json(error);
  }
});

app.post("/createCard", async (req, res) => {
  try {
    const { userId, tourId } = req.body;
    const oldCard = await Card.find({ userId: userId });
    const isExist = oldCard.length > 0;
    let cardId = oldCard[0]._id.toString();
    console.log(cardId);
    if (!isExist) {
      const newCard = new Card({
        userId: userId,
      });
      await newCard.save();
      cardId = newCard._id;
    }

    const result = await Card.findByIdAndUpdate(
      cardId,
      {
        $push: { tours: tourId },
      },
      { new: true }
    );
    res
      .status(201)
      .json({ message: "Тур успешно добавлен в корзину!", data: result });
  } catch (error) {
    console.log("create error");

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
