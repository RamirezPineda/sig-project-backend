import "dotenv/config";
import { connect } from "mongoose";

import PlaceModel from "../models/places.model.js";
import { dataUAGRM } from "./data.js";

export const dbConnet = async () => {
  const DB_URI = process.env.DB_URI || "";
  await connect(DB_URI);
};

export const seeders = async () => {
  await PlaceModel.insertMany(dataUAGRM);
  console.log("Datos insetados correctamente");
};
