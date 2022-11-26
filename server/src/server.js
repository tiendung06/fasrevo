import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routers/zindex.js";
import { PORT } from "./config/configuration.js";
import { isEmailValid } from "./config/EmailConfig.js";
import upload from "./middleware/handleFile.js";
import verifyToken from "./middleware/verifyToken.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/demo", verifyToken, async (req, res) => {
  const { valid, reason, validators } = await isEmailValid(
    "vutrubaola2001@gmail.com",
  );
  if (valid) {
    res.send("OK");
  } else {
    res.send("No");
  }
});

app.post("/test", upload.single("image"), async (req, res) => {
  console.log(req.file);
  res.send(req.body);
});

router(app);

app.listen(PORT);
