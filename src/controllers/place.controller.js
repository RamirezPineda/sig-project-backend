import PlaceService from "../services/place.service.js";

const isAlive = async (req, res) => {
  return res.status(200).json({ message: "is Ok" });
};

const getAllPlaces = async (req, res) => {
  try {
    const allPlaces = await PlaceService.getAllPlaces();

    return res.status(200).json(allPlaces);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Ocurrio un error con el server" });
  }
};

export default { getAllPlaces, isAlive };
