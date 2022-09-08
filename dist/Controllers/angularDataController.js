"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appData = void 0;
const appData_1 = require("./../Models/appData");
const appData = (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    console.log(req.headers);
    res.json(appData_1.appDataModel);
};
exports.appData = appData;
//# sourceMappingURL=angularDataController.js.map