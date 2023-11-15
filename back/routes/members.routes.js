import { Router } from "express";
import { adminRequired } from "../middlewares/validateToken.js";
import { addMember, getMember, getMembers, updateMember, deleteMember } from "../controllers/memebers.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createMemberSchema, updateMemberSchema } from "../schemas/memeber.schema.js";

const router = Router();

router.get('/member/:id', getMember);
router.get('/members', getMembers);
router.post('/add-member', adminRequired, validateSchema(createMemberSchema), addMember);
router.put('/update-memeber/:id', adminRequired, validateSchema(updateMemberSchema), updateMember);
router.delete('/delete-memeber/:id', adminRequired, deleteMember);

export default router;