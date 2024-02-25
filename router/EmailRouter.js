import express from "express";
const router = express.Router();
import { EmailController } from "../controller/EmailController.js";

router.route("/sendemail").post(EmailController);

export default router;
