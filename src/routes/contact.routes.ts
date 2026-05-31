import { Router } from "express";
import { createContact } from "../controllers/contact.controller.ts";

const router = Router();

router.post("/", createContact);

export default router;
