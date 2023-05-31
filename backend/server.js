/** @format */

import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
dotenv.config();

const Port = process.env.Port || 8001;

const app = express();

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send(`server is ready at ${Port}`);
});

app.use(notFound);
app.use(errorHandler);

app.listen(Port, () => {
  console.log(`sever start at ${Port}`);
});
