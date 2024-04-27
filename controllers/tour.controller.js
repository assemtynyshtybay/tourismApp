import { User } from "../models/User.js";
import { Tour } from "../models/Tour.js";

export async function getTourById(req, res) {
  try {
    const { id } = req.params;
    const result = await Tour.findById(id);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
}
export async function deleteTourById(req, res) {
  try {
    const { id } = req.params;
    const result = await Tour.findByIdAndDelete(id);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
}
export async function updateTourById(req, res) {
  try {
    const { id } = req.params;
    const result = await Tour.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
}
export async function createTour(req, res) {
  try {
    const newTour = new Tour({
      ...req.body,
    });
    const result = await newTour.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
}

export const getTours = async (req, res) => {
  try {
    const result = await Tour.find();
    res.status(201).json({ statusCode: 1, count: result.length, data: result });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const buyTour = async (req, res) => {
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
};
