import { Schema, model } from "mongoose";

// description  = descripcion
// buildingCode = codigo de edificio
// latitude = latitud
// longitude = longitud
// group = grupo
// initials = sigla

const PlaceSchema = new Schema(
  {
    description: String,
    buildingCode: String,
    latitude: String,
    longitude: String,
    group: String,
    initials: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const PlaceModel = model("Place", PlaceSchema);

export default PlaceModel;
