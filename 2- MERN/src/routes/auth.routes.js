// import { Router } from "express";
import Router from "express-promise-router";

import { profile, signin, signup, signut } from "../controller/auth.controller.js";

const router = Router();

router.post('/signing', signin)

router.post("/signup", signup)

router.post("/signout", signut)

router.get("/profile", profile)

export default router

