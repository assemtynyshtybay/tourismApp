import express from "express";
import authRoutes from "./auth.routes.js";
import userRoutes from "./user.routes.js";
import toursRoutes from "./tour.routes.js";
import cardRoutes from "./card.routes.js";

export default function (app) {
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); // Allow requests from any origin
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Allow specified methods
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Allow specified headers
    next();
  });
  app.use(express.json());
  app.use("/auth", authRoutes);
  app.use("/user", userRoutes);
  app.use("/tours", toursRoutes);
  app.use("/card", cardRoutes);
}
