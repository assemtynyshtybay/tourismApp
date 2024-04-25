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

router.post("/create", createTour);
router.get("/getAll", getTours);
router.get("/getById", getTourById);
router.delete("/delete/", authUser, checkIsAdmin, deleteTourById);
router.patch("/update/", updateTourById);

export default router;
