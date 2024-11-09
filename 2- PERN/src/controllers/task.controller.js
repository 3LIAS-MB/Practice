import { pool } from "../db.js";

export const getAllTasks = async (req, res, next) => {
  const result = await pool.query("SELECT * FROM task WHERE user_id = $1", [
    req.userId,
  ]);
  return res.json(result.rows);
};

export const getTask = async (req, res) => {
  const result = await pool.query(`SELECT * FROM task WHERE id = $1`, [
    req.params.id,
  ]);
  if (result.rows.length === 0) { // result.rowCount
    return res.status(404).json({
      messsage: "No existe una tarea con ese id",
    });
  }
  // { id: 124, title: 'asd', description: 'aasd', user_id: 135 }
  return res.json(result.rows[0]);
};

export const createTask = async (req, res, next) => {
  const { title, description } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO task (title, description, user_id) VALUES ($1, $2, $3) RETURNING *",
      [title, description, req.userId]
    );

    res.json(result.rows[0]);
  } catch (error) {
    if (error.code === "23505") {
      return res.status(409).json({
        messsage: "Ya existe una tarea con ese titulo",
      });
    }
    // le decimos que vaya al siguiente error, al de app
    next(error);
  }
};

export const updateTask = async (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;

  // RETURNING es para que despues de eliminar retorne la tarea, la retorna en 'rows []'
  const result = await pool.query(
    "UPDATE task SET title = $1, description = $2 WHERE id = $3 RETURNING *",
    [title, description, id]
  );

  if (result.rowCount === 0) {
    return res.json({
      messsage: "No existe tarea con esa id",
    });
  }
  return res.json(result.rows[0]);
};

export const deleteTask = async (req, res) => {
  const result = pool.query("DELETE FROM task WHERE id = $1", [req.params.id]);
  if (result.rowCount === 0) {
    return res.status(404).json({
      messsage: "No existe una tarea con ese id",
    });
  }

  return res.sendStatus(204);
};
