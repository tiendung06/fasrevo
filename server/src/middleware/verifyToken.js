import jwt from 'jsonwebtoken';
import { errorConfig, TOKEN_SECRET } from '../config/configuration.js';

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  console.log('verifyToken', token);

  if (!token) {
    res.status(401);
    return res.send({ message: 'Unauthorized' });
  }

  try {
    const verified = jwt.verify(token, TOKEN_SECRET);
    const email = jwt.decode(token).email;
    req.verified = verified;
    req.email = email;
    next();
  } catch (error) {
    res.status(401);
    return res.send({ message: 'Unauthorized' });
  }
};

export default verifyToken;
