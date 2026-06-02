import getContacts from "../services/myContacts.service";
import { Request, Response } from "express";

export const myContacts = (req: Request, res: Response) => {
  const contacts = getContacts();

  res.json(contacts);
};
