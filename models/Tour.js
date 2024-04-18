import mongoose from "mongoose";

const tourSchema = new mongoose.Schema({
  locationName: {
    type: String,
    required: true,
    trim: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageCover: {
    type: String,
    required: false,
    default: null,
  },
  images: {
    type: [],
    required: false,
    default: null,
  },
  cards: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Card",
    default: [],
  },
  adminId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  users: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "User",
    default: [],
  },
});

export const Tour = mongoose.model("Tour", tourSchema);
