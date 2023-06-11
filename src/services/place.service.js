import PlaceModel from "../models/places.model.js";

const getAllPlaces = async () => {
  const allPlaces = await PlaceModel.find();

  return allPlaces;
};

export default { getAllPlaces };
