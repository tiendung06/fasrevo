import authRouter from './auth.js';
import userRouter from './user.js';
import categoryRouter from './category.js';
import categoryDetailRouter from './category-detail.js';
import collectionsRouter from './collections.js';
import productRouter from './product.js';
import vnpayRouter from './vnpay.js';
import searchRouter from './search.js';
import productImageRouter from './product-image.js';
import productDetailRouter from './product-detail.js';
import cartRouter from './cart.js';

const router = (app) => {
  app.use('/auth', authRouter);
  app.use('/user', userRouter);
  app.use('/category', categoryRouter);
  app.use('/category-detail', categoryDetailRouter);
  app.use('/collections', collectionsRouter);
  app.use('/product', productRouter);
  app.use('/search', searchRouter);
  app.use('/vnpay', vnpayRouter);
  app.use('/product-images', productImageRouter);
  app.use('/product-detail', productDetailRouter);
  app.use('/cart', cartRouter);
};

export default router;
