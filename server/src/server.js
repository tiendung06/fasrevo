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

app.get("/demo", (req, res) => {
  res.send("OK");
});

app.post("/regis", async (req, res) => {
  const { valid, reason, validators } = await isEmailValid(req.body.email);

  if (valid) return res.send({ message: "OK" });

  return res.status(400).send({
    message: "Please provide a valid email address.",
    reason: validators[reason].reason,
  });
});

router(app);

app.listen(PORT);
