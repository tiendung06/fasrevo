import jwt from 'jsonwebtoken';
import { errorConfig, TOKEN_SECRET } from '../config/configuration.js';

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  console.log('verifyToken', token);

  if (!token) return res.status(401);

  try {
    const verified = jwt.verify(token, TOKEN_SECRET);
    req.verified = verified;
    next();
  } catch (error) {
    res.status(400);
  }
};

export default verifyToken;
