import { Router } from "express";
import { adminRequired } from "../middlewares/validateToken.js";
import { register, login, logout } from "../controllers/auth.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { authSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post('/login', validateSchema(authSchema), login);
router.post('/register', adminRequired, validateSchema(authSchema), register);
router.post('/logout', adminRequired, logout)

export default router;