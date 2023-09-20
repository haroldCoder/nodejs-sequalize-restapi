"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProject = exports.updateProject = exports.createProjects = exports.getProjects = void 0;
const Projects_1 = require("../models/Projects");
const getProjects = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const projects = yield Projects_1.Projects.findAll();
        res.json(projects);
    }
    catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
});
exports.getProjects = getProjects;
const createProjects = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, priority, description, deliverydate } = req.body;
    try {
        let newProject = yield Projects_1.Projects.create({
            name,
            priority,
            description,
            deliverydate
        }, { fields: ["name", "priority", "description", "deliverydate"] });
        res.json(newProject);
    }
    catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
});
exports.createProjects = createProjects;
const updateProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, priority, description } = req.body;
    const { id } = req.params;
    try {
        yield Projects_1.Projects.update({
            name,
            priority,
            description
        }, {
            where: {
                id
            }
        }).then(() => {
            console.log(`project update`);
        });
    }
    catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
});
exports.updateProject = updateProject;
const deleteProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield Projects_1.Projects.findByPk(id);
        user ? () => __awaiter(void 0, void 0, void 0, function* () { yield user.destroy(), res.send("project destroyed"); }) : res.send("project not exist");
    }
    catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
});
exports.deleteProject = deleteProject;
