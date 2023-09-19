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
exports.createProduct = exports.getProjects = void 0;
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
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, priority, description } = req.body;
    try {
        let newProject = yield Projects_1.Projects.create({
            name,
            priority,
            description
        }, { fields: ["name", "priority", "description"] });
        return res.json(newProject);
    }
    catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
});
exports.createProduct = createProduct;
