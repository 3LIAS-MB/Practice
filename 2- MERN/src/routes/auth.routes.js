// Para que tengamos todas las rutas relacionadas a la autenticacion
import { Router } from "express";

const router = Router();

router.post('/signing', (req, res) => res.send('ingresando'))

router.post("/signup", (req, res) => res.send('registrando'))

router.post("/signout", (req, res) => res.send('cerrando sesion'))

router.get("/profile", (req, res) => res.send('perfil del usuario'))

export default router

