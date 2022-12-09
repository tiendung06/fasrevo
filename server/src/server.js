import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routers/zindex.js";
import { PATH, PORT } from "./config/configuration.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/image", express.static(PATH));

// test upload image
app.get("/test", (req, res) => {
  res.status(200).json({
    profile_url: `http://localhost:3030/image/image1669538193645.jpg`,
  });
});

router(app);

app.listen(PORT);
