import type { Request, Response } from "express";
import { saveContact } from "../services/contact.service";

export const createContact = async (req: Request, res: Response) => {
  const { name, email, phone, message } = req.body || {};

  if (!name || !email || !phone || !message) {
    return res.status(400).json({
      message: "error :all fields are required",
    });
  }

  await saveContact(name, email, phone, message);

  res.status(201).json({
    success: true,
    message: "contact saved",
  });
};
