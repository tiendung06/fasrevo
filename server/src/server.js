import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routers/index.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router(app);

app.listen(3030);