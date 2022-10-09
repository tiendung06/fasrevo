import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routers/index.js";
import { PORT } from "./config/configuration.js";
import verifyToken from "./middleware/verifyToken.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/demo", verifyToken, (req, res) => {
  res.send("OK"); 
});

router(app);

app.listen(PORT);
