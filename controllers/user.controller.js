import { User } from "../models/User.js";
import { hashPassword } from "../services/bcrypt.js";

export async function getUserInfo(req, res) {
  try {
    const { id } = req.params;
    const result = await User.findById(id);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function updateUser(req, res) {
  try {
    const { id } = req.params;
    const { fullName, username, email, pasportNumber, password } = req.body;
    const hashedPassword = await hashPassword(password);
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        email,
        username,
        information: { fullName, pasportNumber },
        password: hashedPassword,
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "Пользователь не найден" });
    }

    res.json({
      updatedUser: {
        ...updatedUser,
        password: hashPassword(updateUser.password),
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
}

export async function deleteUser(req, res) {
  try {
    const { email } = req.body;
    const result = await User.findOneAndDelete({ email });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
}
