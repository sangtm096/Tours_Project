import express from "express";
import {
  createTour,
  deleteTour,
  getAllTour,
  getFeaturedTours,
  getTour,
  getTourBySearch,
  getTourCount,
  updateTour,
} from "../controllers/tourController.js";

import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//create new tour
router.post("/", createTour);

//update tour
router.put("/:id", updateTour);

//delete tour
router.delete("/:id", deleteTour);

//get tour
router.get("/:id", getTour);

//get All tour
router.get("/", getAllTour);

//get tour by search
router.get("/search/getTourBySearch", getTourBySearch);
router.get("/search/getFeaturedTours", getFeaturedTours);
router.get("/search/getTourCount", getTourCount);

export default router;
