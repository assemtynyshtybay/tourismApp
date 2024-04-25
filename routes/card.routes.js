import { Router } from "express";
import { authUser, checkIsAdmin } from "../middleware/auth.middleware.js";
import { deleteCardElement } from "../controllers/card.controller.js";

const router = Router();

router.patch("/deleteOneTour/", deleteCardElement);

export default router;
