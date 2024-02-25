import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import cors from "cors";
import emailRouter from "./router/EmailRouter.js";
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use("/api/v1", emailRouter);

app.listen(PORT, () => {
  console.log(`Server is running at PORT:${PORT}`);
});
