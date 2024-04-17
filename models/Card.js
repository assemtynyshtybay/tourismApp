import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    requred: true,
  },
  tours: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Tour",
    default: [],
  },
});

export const Card = mongoose.model("Card", cardSchema);
