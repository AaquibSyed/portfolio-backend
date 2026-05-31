import { Router } from "express";
import { getSkills } from "../controllers/skills.controller.ts";

const router = Router();

router.get("/", getSkills);

export default router;
