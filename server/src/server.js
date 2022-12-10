import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routers/zindex.js";
import { PATH, PORT } from "./config/configuration.js";
import cookieParser from "cookie-parser";
import upload from "./middleware/handleFile.js";

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
app.post("/test", upload.single("image"), (req, res) => {
  res.send(req.file);
});

router(app);

app.listen(PORT);
