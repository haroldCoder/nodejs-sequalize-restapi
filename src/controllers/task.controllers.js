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
exports.deleteTask = exports.updateTask = exports.createTask = exports.getTask = void 0;
const Tasks_1 = require("../models/Tasks");
const getTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Tasks_1.Task.findAll().then((result) => {
            res.json(result);
        });
    }
    catch (err) {
        res.send(err);
    }
});
exports.getTask = getTask;
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, done, projectid } = req.body;
    try {
        const newTask = yield Tasks_1.Task.create({
            name,
            done,
            projectid
        }, { fields: ["name", "done", "projectid"] })
            .then(() => {
            res.send(newTask);
        });
    }
    catch (err) {
        res.send(err);
    }
});
exports.createTask = createTask;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, done, projectid } = req.body;
    const { id } = req.params;
    try {
        yield Tasks_1.Task.update({
            name, done, projectid
        }, { where: { id } })
            .then(() => {
            res.send("task update");
        });
    }
    catch (err) {
        res.send(err);
    }
});
exports.updateTask = updateTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const task = yield Tasks_1.Task.findByPk(id);
        task === null || task === void 0 ? void 0 : task.destroy().then(() => {
            res.send("task delete");
        });
    }
    catch (err) {
        res.send(err);
    }
});
exports.deleteTask = deleteTask;
