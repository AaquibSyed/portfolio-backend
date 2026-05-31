import express from "express";
import cors from "cors";

const PORT = 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.send("Portfolio backend service running");
});

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
