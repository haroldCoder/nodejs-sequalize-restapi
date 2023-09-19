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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const conexion_1 = require("./database/conexion");
const projects_routes_1 = __importDefault(require("./routes/projects.routes"));
const body_parser_1 = __importDefault(require("body-parser"));
app_1.default.use(body_parser_1.default.json());
app_1.default.listen(3500, () => __awaiter(void 0, void 0, void 0, function* () {
    yield conexion_1.sequalize.sync({ force: false }).then(() => __awaiter(void 0, void 0, void 0, function* () {
        console.log(`conected db`);
        app_1.default.use("/", projects_routes_1.default);
    }))
        .catch((err) => {
        console.log(err);
    });
    console.log(`Server on port 3500`);
}));
