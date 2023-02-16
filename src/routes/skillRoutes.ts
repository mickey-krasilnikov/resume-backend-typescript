import express from "express";
import { SkillController } from "../controllers/skillController";
import { authenticateUser } from "../middleware/authMiddleware";

const router = express.Router();
const skillController = new SkillController();

router.get("/skills", skillController.getAllSkills);
router.get("/skills/:id", skillController.getSkillById);
router.post("/skills", authenticateUser, skillController.createSkill);
router.put("/skills/:id", authenticateUser, skillController.updateSkill);
router.delete("/skills/:id", authenticateUser, skillController.deleteSkill);

export default router;
