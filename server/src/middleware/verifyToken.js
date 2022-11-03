import jwt from "jsonwebtoken";
import { errorConfig, TOKEN_SECRET } from "../config/configuration.js";

const verifyToken = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send(errorConfig.jwt.ACCESS_DENIED);

  try {
    const verified = jwt.verify(token, TOKEN_SECRET);
    next();
  } catch (error) {
    res.status(400).send(errorConfig.jwt.INVALID_TOKEN);
  }
};

export default verifyToken;
