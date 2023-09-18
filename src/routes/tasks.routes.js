"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('tasks');
router.post('tasks');
router.get('tasks/:id');
router.put('tasks/:id');
router.delete('tasks/:id');
exports.default = router;
