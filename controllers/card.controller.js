import { Card } from "../models/Card.js";

export async function deleteCard(req, res) {
  try {
    const { userId } = req.body;
    const result = await Card.findOneAndDelete({ userId });
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
    const { userId, tourId } = req.body;
    console.log(req.body);

    const result = await Card.findOneAndUpdate(
      { userId },
      {
        $pull: { tours: tourId },
      },
      { new: true }
    );
    console.log(result);
    res.status(201).json({ message: "Тур удален из корзины", data: result });
  } catch (error) {
    res.status(500).json(error);
  }
};

//корзина
export const getCard = async (req, res) => {
  try {
    const { userId } = req.params;

    const result = await Card.findOneAndUpdate(
      { userId },
      { new: true }
    ).populate({
      path: "tours",
      select: "locationName price currency duration images imageCover",
    });
    res.status(201).json({
      message: `Ваша корзина ${!result ? "пуста" : ""}`,
      data: result,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export async function createCard(req, res) {
  try {
    const { userId, tourIds } = req.body;
    const oldCard = await Card.findOne({ userId });
    let cardId = "";
    if (!oldCard) {
      const newCard = new Card({
        userId: userId,
      });
      await newCard.save();
      cardId = newCard._id;
    } else {
      cardId = oldCard._id;
    }
    console.log(oldCard);
    let result = {};
    for (const tourId of tourIds) {
      result = await Card.findByIdAndUpdate(
        cardId,
        {
          $addToSet: { tours: tourId },
        },
        { new: true }
      );
    }

    res
      .status(201)
      .json({ message: "Тур успешно добавлен в корзину!", data: result });
  } catch (error) {
    console.log("create error", error);

    res.status(500).json(error);
  }
}
