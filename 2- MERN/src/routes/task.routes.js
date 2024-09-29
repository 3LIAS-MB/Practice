// import { Router } from "express";
// Nos ayuda a simplificar los errores try catch
import Router from "express-promise-router";

import {
  createTask,
  deleteTask,
  getAllTasks,
  getTask,
  updateTask,
} from "../controller/task.controller.js";
import { isAuth } from "../middlewares/auth.middleware.js";

const router = Router();

// usamos el middleware antes de q llegue a la ruta
router.get("/tasks", isAuth, getAllTasks);

router.get("/tasks/:id", isAuth, getTask);

router.post("/tasks", isAuth, createTask);

router.put("/tasks/:id", isAuth, updateTask);

router.delete("/tasks/:id", isAuth, deleteTask);

export default router;
