import { Router } from "express";
import { myContacts } from "../controllers/myContacts.controller";

const router = Router();

router.get("/", myContacts);

export default router;
