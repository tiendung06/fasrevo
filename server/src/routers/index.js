import authRouter from "./auth.js";

const router = (app) => {
  app.use("/auth", authRouter);
};

export default router;
