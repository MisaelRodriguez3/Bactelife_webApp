import { Router } from "express";
import { adminRequired } from "../middlewares/validateToken.js";
import { addMember, getMember, getMembers, updateMember, deleteMember } from "../controllers/memebers.controller.js";

const router = Router();

router.get('/member/:id', getMember);
router.get('/members', getMembers);
router.post('/add-member', adminRequired, addMember);
router.put('/update-memeber/:id', adminRequired, updateMember);
router.delete('/delete-memeber/:id', adminRequired, deleteMember);

export default router;