import express from "express";
import morgan from "morgan";
import cookieParser from 'cookie-parser'

import taskRoutes from "./routes/task.routes.js" 
import authRoutes from './routes/auth.routes.js'

const app = express();

// Nos ayuda a ver por consola las peticiones que van llegando
app.use(morgan("dev"));
// Para listar las cookies del header en un objeto
app.use(cookieParser())
// Si llega un objeto en formato json lo convierte en un objeto js
app.use(express.json());
// para cuando enviamos formularios desde el front
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => res.json({ message: "welcome to my API XDD" }));
app.use('/api', taskRoutes)
app.use('/api', authRoutes)


// Error handler
app.use((err, req, res, next) => {
  res.status(500).json({
    status: "error",
    message: err.message,
  });
});
export default app;
