import type { Request, Response } from "express";
import { getAboutData } from "../services/about.service.ts";

export const getAbout = (req: Request, res: Response) => {
  const data = getAboutData();

  res.status(200).json(data);
};
