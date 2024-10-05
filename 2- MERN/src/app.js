import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import taskRoutes from "./routes/task.routes.js";
import authRoutes from "./routes/auth.routes.js";
import { ORIGIN } from "./confing.js";
import { pool } from "./db.js";

const app = express();

// MIDDLEWARES
// El problema de las CORS
app.use(
  cors({
    origin: ORIGIN,
    credentials: true,
  })
);
// Nos ayuda a ver por consola las peticiones que van llegando
app.use(morgan("dev"));
// Para listar las cookies del header en un objeto
app.use(cookieParser());
// Si llega un objeto en formato json lo convierte en un objeto js
app.use(express.json());
// para cuando enviamos formularios desde el front
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => res.json({ message: "welcome to my API XDD" }));
app.get("/api/ping", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  return res.json(result.rows[0]);
});

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
