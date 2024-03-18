import express from "express";
import dotenv from "dotenv";

import intializeDatabase from "./db";
import authRoute from "./routes/auth.routes";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

intializeDatabase();

app.use(express.json());

app.get("/health", (req, res) => {
  res.send({ status: "working" });
});

app.use(authRoute);

app.listen(PORT, () => {
  console.log(`Listining in port ${PORT}.....`);
});
