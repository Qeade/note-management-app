import { Router } from "express";
import * as notesController from "../controllers/notes";

const router: Router = Router();

router.get("/", notesController.getAll);
router.post("/", notesController.create);
router.get("/:id", notesController.getById);
router.put("/:id", notesController.update);
router.delete("/:id", notesController.remove);

export default router;
