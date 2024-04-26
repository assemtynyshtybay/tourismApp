import { Router } from "express";
import {
  createCard,
  deleteCard,
  deleteCardElement,
  getCard,
} from "../controllers/card.controller.js";

const router = Router();

router.patch("/deleteOneTour", deleteCardElement);
router.post("/addToCard", createCard);
router.delete("/deleteCard", deleteCard);
router.get("/getInfo", getCard);

export default router;
