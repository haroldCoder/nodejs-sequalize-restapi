import { Router } from "express";
import {createProjects, deleteProject, getProjects, updateProject} from '../controllers/projects.controllers'
const router = Router();

router.get('/projects', getProjects);
router.post('/projects', createProjects)
router.get('/projects/:id')
router.put('/projects/:id', updateProject)
router.delete('projects/:id', deleteProject)

export default router;