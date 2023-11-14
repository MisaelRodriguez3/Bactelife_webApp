import { Router } from "express";
import { createCase, getCase, getCases, updateCase, deleteCase } from "../controllers/caseStudies.controller.js";

const router = Router();

router.get('/case/:id', getCase);
router.get('/cases', getCases);
router.post('/case', createCase);
router.delete('/delete-case/:id', deleteCase);
router.put('/update-case/:id', updateCase);

export default router;