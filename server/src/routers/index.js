import authRouter from "./auth.js";
import homeRouter from "./home.js";

const router = (app) => {
  app.use("", homeRouter);
  app.use("/auth", authRouter);
};

export default router;
