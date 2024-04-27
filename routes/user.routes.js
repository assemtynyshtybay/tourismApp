import { Router } from "express";
import {
  deleteUser,
  getUserInfo,
  updateUser,
} from "../controllers/user.controller.js";
import { authUser, checkIsAdmin } from "../middleware/auth.middleware.js";
// import { updateValidator } from "../validators/auth.validator.js";

const router = Router();

router.get("/getInfo/:id", authUser, getUserInfo);
router.delete("/delete/", authUser, checkIsAdmin, deleteUser); //admin
router.patch("/update/:id", authUser, updateUser);

export default router;
