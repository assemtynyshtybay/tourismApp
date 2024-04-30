import { User } from "../models/User.js";
import { hashPassword, isPasswordValid } from "../services/bcrypt.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

const { SECRET_KEY } = process.env;

export async function register(req, res) {
  try {
    const { email, password, username, isAdmin } = req.body;

    const isEmailExist = await User.findOne({ email });

    if (isEmailExist) {
      res.status(409).json({ message: "Данная электронная почта занята!" });
    }
    const hashedPassword = await hashPassword(password);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      isAdmin,
    });
    const result = await newUser.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      res.status(404).json({ message: "Неверный логин или пароль!" });
    }

    const passwordIsValid = await isPasswordValid(password, user.password);

    if (!passwordIsValid) {
      res.status(404).json({ message: "Неверный логин или пароль!" });
    }

    const token = jwt.sign(
      { userId: user._id, isAdmin: user.isAdmin },
      SECRET_KEY,
      { expiresIn: "12h" }
    );
    if(token)
      res.status(201).json({ token: token, userId: user._id, isAdmin: user.isAdmin });
    else
      res.status(401).json({ data: "Аутентикация не удалась!"});
  } catch (error) {
    res.status(500).json(error);
  }
}
