import express from "express";
import cors from "cors";

import aboutRoutes from "../src/routes/about.routes.ts";

const PORT = 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/about", aboutRoutes);

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
