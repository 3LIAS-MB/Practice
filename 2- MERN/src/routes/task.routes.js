import { Router } from "express";
import {
  createTask,
  deleteTask,
  getAllTask,
  getTask,
  updateTask,
} from "../controller/task.controller.js";

const router = Router();

router.get("/tasks", getAllTask);

router.get("/tasks/:id", getTask);

router.post("/tasks", createTask);

router.put("/tasks/:id", updateTask);

router.delete("/tasks/:id", deleteTask);

export default router;
