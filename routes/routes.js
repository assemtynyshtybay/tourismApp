import express from "express";
import authRoutes from "./auth.routes.js";
import userRoutes from "./user.routes.js";
import toursRoutes from "./tour.routes.js";
import cardRoutes from "./card.routes.js";

export default function (app) {
  app.use(express.json());
  app.use("/auth", authRoutes);
  app.use("/user", userRoutes);
  app.use("/tours", toursRoutes);
  app.use("/card", cardRoutes);
}
