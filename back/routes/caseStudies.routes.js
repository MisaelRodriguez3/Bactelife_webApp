import { Router } from "express";
import { adminRequired } from "../middlewares/validateToken.js";
import { createCase, getCase, getCases, updateCase, deleteCase } from "../controllers/caseStudies.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createCaseSchema, updateCaseSchema } from "../schemas/caseStudies.schema.js";

const router = Router();

router.get('/case/:id', getCase);
router.get('/cases', getCases);
router.post('/case', adminRequired, validateSchema(createCaseSchema), createCase);
router.delete('/delete-case/:id', adminRequired, deleteCase);
router.put('/update-case/:id', adminRequired, validateSchema(updateCaseSchema), updateCase);

export default router;