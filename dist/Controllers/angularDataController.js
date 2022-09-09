"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.page = void 0;
const appData_1 = require("./../Models/appData");
const landingpageData_1 = require("../Models/landingpageData");
const aboutmeData_1 = require("../Models/aboutmeData");
const projectsData_1 = require("../Models/projectsData");
const page = (req, res) => {
    switch (req.params.page) {
        case "app":
            res.json(appData_1.appDataModel);
            break;
        case "landingpage":
            res.json(landingpageData_1.landingpageDataModel);
            break;
        case 'aboutme':
            res.json(aboutmeData_1.aboutmeDataModel);
            break;
        case 'projects':
            res.json(projectsData_1.projectsDataModel);
    }
};
exports.page = page;
//# sourceMappingURL=angularDataController.js.map