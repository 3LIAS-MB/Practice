import { pool } from "../db.js";

export const getAllTasks = async (req, res, next) => {
  const result = await pool.query("SELECT * FROM task");
  console.log(result);
  return res.json(result.rows);
};

export const getTask = async (req, res) => {
  const result = await pool.query(`SELECT * FROM task WHERE id = $1`, [
    req.params.id,
  ]);
  if (result.rows.length === 0) { // result.rowCount
    return res.status(404).json({
      messsage: "No existe una tarea con ese id"
    });
  }

  return res.json(result.rows[0]);
};

export const createTask = async (req, res, next) => {
  const { title, description } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *",
      [title, description]
    );

    res.json(result.rows[0]);
  } catch (error) {
    if (error.code == "23505") {
      return res.status(409).json({
        messsage: "Ya existe una tarea con ese titulo",
      });
    }
    // le decimos que vaya al siguiente error, al de app
    next(error);
  }
};

export const updateTask = (req, res) => res.send("actualizando tarea");

export const deleteTask = (req, res) => res.send("eliminando tarea");
