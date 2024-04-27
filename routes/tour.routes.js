import { Router } from "express";
import {
  createTour,
  deleteTourById,
  getTourById,
  getTours,
  updateTourById,
} from "../controllers/tour.controller.js";
import { authUser, checkIsAdmin } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/create", authUser, checkIsAdmin, createTour);
router.get("/getAll", authUser, getTours);
router.get("/getById/:id", authUser, getTourById);
router.delete("/delete/:id", authUser, checkIsAdmin, deleteTourById);
router.patch("/update/:id", authUser, checkIsAdmin, updateTourById);

export default router;
