"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express = require("express");
const dataModuleController = require("../Controllers/angularDataController");
exports.router = express.Router();
exports.router.get('/appData', dataModuleController.appData);
//# sourceMappingURL=angularDataRoutes.js.map