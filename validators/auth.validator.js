import { body } from "express-validator";
import { createCustomValidatorMiddleware } from "./general.validator.js";

const userName = body("username")
  .exists()
  .withMessage("Поле username обязательна!")
  .isString()
  .withMessage("Поле username должно быть строкой!");

const email = body("email")
  .exists()
  .withMessage("Поле email обязательна!")
  .isEmail()
  .withMessage("Поле email должно иметь в себе символы `@`, `.`!");

const password = body("password")
  .exists()
  .withMessage("Поле password обязательна!")
  .isString()
  .withMessage("Поле password должно быть строкой!")
  .isStrongPassword()
  .withMessage("Ваш пароль слишком простой!");

const fullName = body("fullName")
  .exists()
  .isString()
  .withMessage("Поле fullName должно быть строкой!");

const pasportNumber = body("pasportNumber")
  .exists()
  .isString()
  .withMessage("Поле pasportNumber должно быть строкой!");

export const registerValidator = createCustomValidatorMiddleware([
  userName,
  email,
  password,
]);

export const loginValidator = createCustomValidatorMiddleware([
  email,
  password,
]);

export const updateValidator = createCustomValidatorMiddleware([
  userName,
  email,
  fullName,
  pasportNumber,
]);
