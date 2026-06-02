import express from "express";
import cors from "cors";

import aboutRoutes from "./routes/about.routes";
import skillsRoutes from "./routes/skills.route";
import contactRoutes from "./routes/contact.routes";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/about", aboutRoutes);
app.use("/api/skills", skillsRoutes);
app.use("/api/contact", contactRoutes);

app.get("/", (_, res) => {
  res.send("Portfolio API running");
});

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
