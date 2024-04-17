import mongoose from "mongoose";
import { boolean } from "webidl-conversions";

const infoSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  pasportNumber: {
    type: String,
    required: true,
  },
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Логин обязателен!"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Почта обязательна!"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Пароль обязателен!"],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  information: {
    type: infoSchema,
    required: false,
  },
  cardId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Card",
  },
});

export const User = mongoose.model("User", userSchema);
