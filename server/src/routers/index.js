import authRouter from "./auth.js";
import homeRouter from "./home.js";
import userDetailRouter from "./user_detail.js";

const router = (app) => {
  app.use("", homeRouter);
  app.use("/auth", authRouter);
  app.use("/user_detail", userDetailRouter);
};

export default router;
