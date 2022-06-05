import express from "express";

import { version } from "../controllers/controller.dev.js";

const router = express.Router();

router.get("/version", version);

export default router;
