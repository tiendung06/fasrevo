import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routers/index.js";
import { PORT } from "./config/configuration.js";
import { isEmailValid } from "./config/EmailConfig.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/demo", async (req, res) => {
  const { valid, reason, validators } = await isEmailValid(
    "vutrubaola2001@gmail.com",
  );
  if (valid) {
    res.send("OK");
  } else {
    res.send("No");
  }
});

router(app);

app.listen(PORT);
