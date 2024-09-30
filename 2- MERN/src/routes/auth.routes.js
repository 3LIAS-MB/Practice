// import { Router } from "express";
import Router from "express-promise-router";
import { isAuth } from "../middlewares/auth.middleware.js";

import { profile, signin, signup, signout } from "../controller/auth.controller.js";

const router = Router();

router.post('/signin', signin)

router.post("/signup", signup)

router.post("/signout", signout)

router.get("/profile", isAuth, profile)

export default router

