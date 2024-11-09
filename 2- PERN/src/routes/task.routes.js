// import { Router } from "express";

// express-promise-router es una alternativa al Router estándar de Express que permite manejar promesas automáticamente en rutas asíncronas. Esto elimina la necesidad de rodear cada controlador con bloques try-catch, ya que los errores son manejados automáticamente.
import Router from "express-promise-router";

// Operaciones CRUD
import {
  createTask,
  deleteTask,
  getAllTasks,
  getTask,
  updateTask,
} from "../controllers/task.controller.js";
import { isAuth } from "../middlewares/auth.middleware.js";
import { validateSchema } from '../middlewares/validate.middleware.js'
// datos esperados para crear o actualizar una tarea, y son usados
// en las rutas POST y PUT para validar la información entrante.
import { createTaskSchema, updateTaskSchema } from '../schemas/task.schema.js'

const router = Router();

// usamos el middleware antes de q llegue a la ruta
router.get("/tasks", isAuth, getAllTasks);

router.get("/tasks/:id", isAuth, getTask);
    
router.post("/tasks", isAuth, validateSchema(createTaskSchema), createTask);

router.put("/tasks/:id", isAuth, validateSchema(updateTaskSchema), updateTask);

router.delete("/tasks/:id", isAuth, deleteTask);

export default router;
