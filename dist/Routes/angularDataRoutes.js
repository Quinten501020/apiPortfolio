"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express = require("express");
const csrf = require("csurf");
const dataModuleController = require("../Controllers/angularDataController");
var csrfProtection = csrf({ cookie: true });
exports.router = express.Router();
exports.router.post('/appData', dataModuleController.appData);
//# sourceMappingURL=angularDataRoutes.js.map