import express from "express";
import morgan from "morgan";

const app = express();

const PORT = process.env.port || 3000;

app.use(morgan("dev"));

app.get("/", (req, res) => {
  const body = { message: "invisimark.ai" };
  res.json(body);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
