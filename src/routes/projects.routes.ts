import { Router } from "express";
import {getProjects} from '../controllers/projects.controllers'
const router = Router();

router.get('/projects', getProjects);
router.post('projects')
router.get('projects/:id')
router.put('projects/:id')
router.delete('projects/:id')

export default router;