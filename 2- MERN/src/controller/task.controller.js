import { pool } from "../db.js";

export const getAllTasks = (req, res) => res.send("obteniendo tareas");

export const getTask = (req, res) => res.send("obteniendo tarea unica");    

export const createTask = (req, res) => {
  console.log(req.body);
  res.send("creando tareas")
};

export const updateTask = (req, res) => res.send("actualizando tarea");

export const deleteTask = (req, res) => res.send("eliminando tarea");
