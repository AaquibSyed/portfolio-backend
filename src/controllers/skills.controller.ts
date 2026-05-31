import type { Request, Response } from "express";
import { getSkillsData } from "../services/skills.service.ts";

export const getSkills = (req: Request, res: Response) => {
  const data = getSkillsData();

  res.status(200).json(data);
};
