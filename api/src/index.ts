import express, { Request, Response } from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { rateLimit } from "express-rate-limit";

dotenv.config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

//req limit
const limiter = rateLimit({
  windowMs: 1000 * 60 * 15, //15 min
  max: 10000, //max of 10,000 req every 15 min
});
app.use(limiter);

//routes
import templateRoutes from "./routes/templateRoutes";

app.use("/temp", templateRoutes);

const PORT = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("API 1.0");
});

app.listen(PORT, () => {
  console.log("server running in port: " + PORT);
});
