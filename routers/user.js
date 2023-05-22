import { Router } from "express";
import {
  addUsuarios,
  deleteUsuarios,
  getUsuarios,
  updateUsuarios,
} from "../controllers/user.js";

export const router = Router();

router.get("/", getUsuarios);

router.post("/", addUsuarios);

router.put("/:id", updateUsuarios);

router.delete("/", deleteUsuarios);
