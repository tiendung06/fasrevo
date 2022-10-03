import homeRouter from "./home.js"
import userRouter from "./user.js";

const router = app => {
  app.use("/", homeRouter)
  app.use("/user", userRouter);
};

export default router;