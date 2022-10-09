import express from "express";
import HomeController from "../controller/HomeController.js";

const router = express.Router();

router.get("/", HomeController.home);

export default router;
