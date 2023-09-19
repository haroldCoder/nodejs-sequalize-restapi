"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const projects_controllers_1 = require("../controllers/projects.controllers");
const router = (0, express_1.Router)();
router.get('/projects', projects_controllers_1.getProjects);
router.post('projects');
router.get('projects/:id');
router.put('projects/:id');
router.delete('projects/:id');
exports.default = router;
