import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routers/zindex.js";
import { PORT } from "./config/configuration.js";
import upload from "./middleware/handleFile.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(
  cors({
    credentials: true,
    origin: true,
  }),
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.post("/test", upload.single("image"), async (req, res) => {
  console.log(req.file);
  res.send(req.body);
});

router(app);

app.listen(PORT);
