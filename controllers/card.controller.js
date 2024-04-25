import { User } from "../models/User.js";
import { Card } from "../models/Card.js";
import { Tour } from "../models/Tour.js";

export async function deleteCard(req, res) {
  try {
    const { id } = req.params;
    const result = await Card.findOneAndDelete(id);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function updateCardById(req, res) {
  try {
    const { id } = req.params;
    const result = await Card.findOneAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
}

export const deleteCardElement = async (req, res) => {
  try {
    const { id, tourId } = req.body;

    const result = await Card.findOneAndUpdate(
      { id },
      {
        $pull: { tours: tourId },
      },
      { new: true }
    );
    res.status(201).json({ message: "Ваша корзина", data: result });
  } catch (error) {
    res.status(500).json(error);
  }
};

//корзина
export const getCard = async (req, res) => {
  try {
    const { userId } = req.body;

    const result = await Card.findOneAndUpdate({ userId: userId }).populate({
      path: "tours",
      select: "locationName price currency duration",
    });
    res.status(201).json({ message: "Ваша корзина", data: result });
  } catch (error) {
    res.status(500).json(error);
  }
};

export async function createCard(req, res) {
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
}
