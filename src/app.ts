import express from "express";
import cors from "cors";

import aboutRoutes from "../src/routes/about.routes.ts";
import skillsRoutes from "../src/routes/skills.route.ts";

const PORT = 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/about", aboutRoutes);
app.use("/api/skills", skillsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
