import express from "express";
import { getPorras } from "../controller/porrasController.js";
const router = express.Router();

router.get("/", getPorras);

export default router;
