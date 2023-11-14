import { Router } from "express";
import { addMember, getMember, getMembers, updateMember, deleteMember } from "../controllers/memebers.controller.js";

const router = Router();

router.get('/member/:id', getMember);
router.get('/members', getMembers);
router.post('/add-member', addMember);
router.put('/update-memeber/:id', updateMember);
router.delete('/delete-memeber/:id', deleteMember);

export default router;