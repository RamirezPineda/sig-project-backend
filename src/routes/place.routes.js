import { Router } from "express";
import PlaceController from "../controllers/place.controller.js";

const router = Router();

router.get("/isAlive", PlaceController.isAlive);

router.get("/places", PlaceController.getAllPlaces);


export default router;
