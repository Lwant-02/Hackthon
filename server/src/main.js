import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import { connectDB } from "./lib/db.js";
import { authRouter } from "./route/auths.route.js";
import { bookingRouter } from "./route/bookings.route.js";
import { chatBotRouter } from "./route/chat-bot.route.js";

dotenv.config();
const app = express();
const port = process.env.PORT;

// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:3001", credentials: true }));
app.use(cookieParser());

// Routes
app.use("/v1/api/auths", authRouter);
app.use("/v1/api/bookings", bookingRouter);
app.use("/v1/api/chat", chatBotRouter);

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
  connectDB();
});
