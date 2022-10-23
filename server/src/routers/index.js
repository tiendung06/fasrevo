import authRouter from './auth.js';
import homeRouter from './home.js';
import userRouter from './user.js';
import categoryRouter from './category.js';

const router = (app) => {
  app.use('', homeRouter);
  app.use('/auth', authRouter);
  app.use('/user', userRouter);
  app.use('/category', categoryRouter);
};

export default router;
