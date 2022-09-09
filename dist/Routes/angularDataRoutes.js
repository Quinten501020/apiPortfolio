"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express = require("express");
const dataModuleController = require("../Controllers/angularDataController");
exports.router = express.Router();
exports.router.get('/appData', dataModuleController.appData);
exports.router.get('/landingpageData', dataModuleController.landingpageData);
exports.router.get('/aboutmeData', dataModuleController.aboutmeData);
exports.router.get('/projectsData', dataModuleController.projectsData);
//# sourceMappingURL=angularDataRoutes.js.map