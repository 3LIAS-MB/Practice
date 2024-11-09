// Usado para encriptar y comparar contraseñas de forma segura.
import bcrypt from "bcrypt";
// Proporciona una instancia de conexión a la base de datos PostgreSQL.
import { pool } from "../db.js";
// Función que genera un token JWT (JSON Web Token) para la autenticación.
import { createAccessToken } from "../libs/jwt.js";
// Función para generar un hash MD5 (usado aquí para  
// generar un avatar a partir del correo electrónico).
import md5 from "md5";

const cookieOptions = {
  httpOnly: true,  // Importante para seguridad
  secure: true,    // Para HTTPS
  sameSite: 'none', // Para peticiones cross-origin
  maxAge: 24 * 60 * 60 * 1000
};

// INGRESAR
export const signin = async (req, res) => {
  // { email: 'xzuan@gmail.com', password: '123123' }
  // console.log(req.body)

  const { email, password } = req.body;

  const result = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);

  if (result.rowCount === 0) {
    return res.status(400).json({
      message: "El correo no está registrado",
    });
  }

  // 'result' devuelve info sql incluyendo el obj row
  // console.log(result.rows[0])
  // {
  //   id: 135,
  //   name: 'zxuan',
  //   password: '$2b$10$3uKsRU3iC28qQSWFobijLul4m4mYSrMpQdNyo7X0TKMWxlSB0b7mG',
  //   email: 'xzuan@gmail.com',
  //   create_at: 2024-11-08T22:53:06.367Z,
  //   update_at: 2024-11-08T22:53:06.367Z,
  //   gravatar: 'https://www.gravatar.com/avatar/d26c1631439d954d1ccc1ab231de6d73'
  // }

  // 'compare' recibe primero el dato o string que yo
  // este pasando en este momento, por ej password,
  // la encripta y lo compara con otro
  const validPassword = await bcrypt.compare(password, result.rows[0].password);

  if (!validPassword) {
    return res.status(400).json({
      message: "La contraseña es incorrecta",
    });
  }

  // Token codificado -> 'eyJhbGciOiJIUzI1NiIsIn...'
  const token = await createAccessToken({ id: result.rows[0].id });

  res.cookie("token", token, cookieOptions);

  return res.json(result.rows[0]);
};

// Registrarse
export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    // Generar un avatar encriptando el email con md5
    const gravatar = `https://www.gravatar.com/avatar/${md5(email)}`;

    const result = await pool.query(
      "INSERT INTO users(name, email, password, gravatar) VALUES($1, $2, $3, $4) RETURNING *",
      [name, email, hashedPassword, gravatar]
    );

    const token = await createAccessToken({ id: result.rows[0].id });

    // enviamos el token a través de la cookie o cabecera
    res.cookie("token", token, cookieOptions);

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
