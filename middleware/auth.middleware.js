import jwt from "jsonwebtoken";
import "dotenv/config";

// const { JWT_SECRET_KEY } = process.env;

export const authUser = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Токен отсутсвует" });
  }

  const token = authHeader.replace(/^Bearer\s+/, "");

  try {
    const decoded = jwt.verify(token, "secretkey");
    req.userId = decoded.userId;
    req.isAdmin = decoded.isAdmin;
    next();
  } catch (error) {
    res.status(401).json({ meassage: "Невалидный токен" });
  }
};

export const checkIsAdmin = (req, res, next) => {
  if (req.isAdmin) {
    next();
  } else {
    res.status(403).json({ message: "Нет доступа" });
  }
};
