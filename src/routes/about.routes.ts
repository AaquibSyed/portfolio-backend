import { Router } from "express";
import { getAbout } from "../controllers/about.controller.ts";

const router = Router();

router.get("/", getAbout);

export default router;
