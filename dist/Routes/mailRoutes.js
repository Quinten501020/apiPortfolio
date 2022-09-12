"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express = require("express");
const mailController = require("../Controllers/mailController");
exports.router = express.Router();
exports.router.post('/contact', mailController.contact);
//# sourceMappingURL=mailRoutes.js.map