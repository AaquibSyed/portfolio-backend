import fs from "fs";
import path from "path";
import { publishContactCreated } from "./pubsub.service";

const contactsFilePath = path.join(
  process.cwd(),
  "src",
  "data",
  "contacts.json",
);

export const saveContact = async (
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

  try {
    await publishContactCreated({ name, email, phone, message });
  } catch (error) {
    console.error("failed to publish pub/sub event");
  }

  return true;
};
