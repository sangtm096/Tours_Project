import express from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getUser,
  updateFavorite,
  updateUser,
  getFavorites,
} from "../controllers/userController.js";

import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// create user
router.post("/user", createUser);

//update user
router.put("/:id", updateUser);

// update favorite
router.put("/favorite/:id", updateFavorite);

//delete user
router.delete("/:id", deleteUser);

//get user
router.get("/favorites/:id", getFavorites);
router.get("/:id", getUser);

//get All user
router.get("/", getAllUser);

export default router;
