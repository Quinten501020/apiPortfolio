"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express = require("express");
const backOffcieController = require("../Controllers/backOffcieController");
exports.router = express.Router();
exports.router.post('/updateData', backOffcieController.updateData);
exports.router.post('/login', backOffcieController.login);
//# sourceMappingURL=backofficeRoutes.js.map