import express from "express";
import {
  getUsers,
  addUser,
  deleteUser,
  editeUser,
} from "../controllers/cappControllers.js";

export const router = express.Router();

router.route("/").get(getUsers).post(addUser);
router.route("/:id").delete(deleteUser).patch(editeUser);
