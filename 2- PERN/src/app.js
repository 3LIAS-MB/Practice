import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import taskRoutes from "./routes/task.routes.js";
import authRoutes from "./routes/auth.routes.js";

import { ORIGIN } from "./confing.js";
import { pool } from "./db.js";

// Framework para crear el servidor web y manejar rutas.
const app = express();

// MIDDLEWARES
// El problema de las CORS
app.use(
  cors({
    origin: ORIGIN,
    credentials: true,
  })
);
// Middleware para el registro de solicitudes HTTP, útil para ver
// en la consola detalles de cada petición que llega al servidor.
app.use(morgan("dev"));
// Middleware que permite manejar cookies en las
// solicitudes, facilitando su acceso y manipulación.
app.use(cookieParser());
// Convierte el cuerpo de solicitudes JSON en objetos JavaScript.
app.use(express.json());
// para cuando enviamos formularios desde el front
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => res.json({ message: "welcome to my API XDD" }));

app.get("/api/ping", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  return res.json(result.rows[0]);
});

//Routes for task and authentication
app.use("/api", taskRoutes);
app.use("/api", authRoutes);

// Error handler
app.use((err, req, res, next) => {
  res.status(500).json({
    status: "error",
    message: err.message,
  });
});
export default app;
