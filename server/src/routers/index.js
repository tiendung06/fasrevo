import authRouter from "./auth.js";
import homeRouter from "./home.js";

const router = (app) => {
  app.use("/auth", authRouter);
  app.use("", homeRouter);
};

export default router;
