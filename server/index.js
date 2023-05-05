import express from "express";
import { router as cappRoutes } from "./routes/cappRoutes.js";

const port = 5000;

const app = express();

app.use(express.json());

app.use("/api/users", cappRoutes);

const startServer = async () => {
  try {
    app.listen(port, () => console.log(`listening to the port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

startServer();
