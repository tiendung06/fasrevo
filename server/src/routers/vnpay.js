import express from "express";
import VnPayController from "../controller/VnPayController.js";

const router = express.Router();

router.post("/create-payment-url", VnPayController.paymentUrl);

export default router;
