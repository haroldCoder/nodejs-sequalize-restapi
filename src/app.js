"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const tasks_routes_1 = __importDefault(require("./routes/tasks.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(tasks_routes_1.default);
app.use((0, morgan_1.default)("dev"));
exports.default = app;
