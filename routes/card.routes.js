import { Router } from "express";
import {
  createCard,
  deleteCard,
  deleteCardElement,
  getCard,
} from "../controllers/card.controller.js";
import { authUser } from "../middleware/auth.middleware.js";

const router = Router();

router.patch("/deleteOneTour", authUser, deleteCardElement);
router.post("/addToCard", authUser, createCard);
router.delete("/deleteCard", authUser, deleteCard);
router.get("/getInfo/:userId", authUser, getCard);

export default router;
