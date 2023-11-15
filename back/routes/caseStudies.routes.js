import { Router } from "express";
import { adminRequired } from "../middlewares/validateToken.js";
import { createCase, getCase, getCases, updateCase, deleteCase } from "../controllers/caseStudies.controller.js";

const router = Router();

router.get('/case/:id', getCase);
router.get('/cases', getCases);
router.post('/case', adminRequired, createCase);
router.delete('/delete-case/:id', adminRequired, deleteCase);
router.put('/update-case/:id', adminRequired, updateCase);

export default router;