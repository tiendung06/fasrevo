import authRouter from "./auth.js";
import homeRouter from "./home.js";
import userRouter from "./user.js";
import categoryRouter from "./category.js";
import categoryDetailRouter from "./category-detail.js";
import productRouter from "./product.js";
import vnpayRouter from "./vnpay.js";

const router = (app) => {
  app.use("", homeRouter);
  app.use("/auth", authRouter);
  app.use("/user", userRouter);
  app.use("/category", categoryRouter);
  app.use("/category-detail", categoryDetailRouter);
  app.use("/product", productRouter);
  app.use("/vnpay", vnpayRouter);
};

export default router;
