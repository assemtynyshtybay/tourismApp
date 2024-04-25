import { User } from "../models/User.js";

export async function getUserInfo(req, res) {
  try {
    const { email } = req.body;
    const result = await User.findOne({ email });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function updateUser(req, res) {
  try {
    const { id } = req.params;
    const { fullName, username, email, pasportNumber } = req.body;
    const updatedUser = await User.findOneAndUpdate(
      id,
      { email, username, information: { fullName, pasportNumber } },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "Пользователь не найден" });
    }

    res.json(updatedUser);
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
