import bcrypt from "bcrypt";
import { pool } from "../db.js";
import { createAccessToken } from "../libs/jwt.js";
import md5 from "md5";

// Ingresar
export const signin = async (req, res) => {
  const { email, password } = req.body;

  const result = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);

  if (result.rowCount === 0) {
    return res.status(400).json({
      message: "El correo no está registrado",
    });
  }

  // 'compare' recibe primero el dato o string que yo
  // este pasando en este momento, por ej password,
  // la encripta y lo compara con otro
  const validPassword = await bcrypt.compare(password, result.rows[0].password);

  if (!validPassword) {
    return res.status(400).json({
      message: "La contraseña es incorrecta",
    });
  }

  const token = await createAccessToken({ id: result.rows[0].id });

  res.cookie("token", token, {
    // httpOnly: true,
    // para que se puedan ver las cookies en el navegador
    pecure: true,
    secure: true,
    // para decir que entre dominios se pueden consultar
    sameSite: "none",
    // tiempo que dura la cookie
    maxAge: 24 * 60 * 60 * 1000,
  });

  return res.json(result.rows[0]);
};

// Registrarse
export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    // Generar un avatar encriptando el email con md5
    const gravatar = `https://www.gravatar/com/avatar/${md5(email)}`;

    const result = await pool.query(
      "INSERT INTO users(name, email, password, gravatar) VALUES($1, $2, $3, $4) RETURNING *",
      [name, email, hashedPassword, gravatar]
    );

    const token = await createAccessToken({ id: result.rows[0].id });

    // enviamos el token a través de la cookie o cabecera
    res.cookie("token", token, {
      // httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    // el cuerpo de la respuesta son los datos del usuario
    return res.json(result.rows[0]);
  } catch (error) {
    if (error.code === "23505") {
      return res.status(404).json({
        message: "El correo ya está registrado",
      });
    }

    next(error);
  }

  return res.send("registrando");
};

// Cerrar sesión
export const signout = (req, res) => {
  res.clearCookie("token"); // limpio las cookies
  res.sendStatus(200);
};

export const profile = async (req, res) => {
  const result = await pool.query("SELECT * FROM users WHERE id = $1", [
    req.userId,
  ]);
  return res.json(result.rows[0]);
};
