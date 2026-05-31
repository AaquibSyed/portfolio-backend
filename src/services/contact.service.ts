import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contactsFilePath = path.join(__dirname, "../data/contacts.json");

export const saveContact = (
  name: string,
  email: string,
  phone: string,
  message: string,
) => {
  const fileData = fs.readFileSync(contactsFilePath, "utf8");

  const contacts = JSON.parse(fileData);

  contacts.push({
    name,
    email,
    phone,
    message,
    createdAt: new Date().toISOString(),
  });

  fs.writeFileSync(contactsFilePath, JSON.stringify(contacts, null, 2));

  console.log({
    name,
    email,
    phone,
    message,
  });

  return true;
};
