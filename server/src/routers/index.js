import userRouter from "./user.js";

const router = app => {
  app.use("/user", userRouter);
};

export default router;
