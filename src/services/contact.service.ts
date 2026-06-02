import fs from "fs";
import path from "path";

const contactsFilePath = path.join(
  process.cwd(),
  "src",
  "data",
  "contacts.json",
);

export const saveContact = (
  name: string,
  email: string,
  phone: string,
  message: string,
) => {
  console.log("constact filr path", contactsFilePath);
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
