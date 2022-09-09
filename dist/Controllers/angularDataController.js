"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectsData = exports.aboutmeData = exports.landingpageData = exports.appData = void 0;
const appData_1 = require("./../Models/appData");
const landingpageData_1 = require("../Models/landingpageData");
const aboutmeData_1 = require("../Models/aboutmeData");
const projectsData_1 = require("../Models/projectsData");
const appData = (req, res) => {
    res.json(appData_1.appDataModel);
};
exports.appData = appData;
const landingpageData = (req, res) => {
    res.json(landingpageData_1.landingpageDataModel);
};
exports.landingpageData = landingpageData;
const aboutmeData = (req, res) => {
    res.json(aboutmeData_1.aboutmeDataModel);
};
exports.aboutmeData = aboutmeData;
const projectsData = (req, res) => {
    res.json(projectsData_1.projectsDataModel);
};
exports.projectsData = projectsData;
//# sourceMappingURL=angularDataController.js.map