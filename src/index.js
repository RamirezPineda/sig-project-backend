import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";

import { dbConnet, seeders } from "./config/mongo.js";
import places from "./routes/place.routes.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api", places);

console.log("Connecting MongoDB");
try {
  await dbConnet();
  console.log("MongoDB connect");

  // solo debe ejecutar una sola vez esta funcion de seeders(),
  // seeders();
} catch (error) {
  console.log(`Ocurrio un error: ${error}`);
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server on port ${PORT}`));
