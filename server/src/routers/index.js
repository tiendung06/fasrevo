import authRouter from "./auth.js";
import homeRouter from "./home.js";
import categoryRouter from "./category.js";

const router = (app) => {
  app.use("", homeRouter);
  app.use("/auth", authRouter);
  app.use("/category", categoryRouter);
};

export default router;
