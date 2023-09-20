import { Router } from "express";
import { createTask, deleteTask, getTask, updateTask } from "../controllers/task.controllers";

const router = Router();

router.get('/tasks', getTask);
router.post('/tasks', createTask)
router.get('/tasks/:id')
router.put('/tasks/:id', updateTask)
router.delete('/tasks/:id', deleteTask)

export default router;