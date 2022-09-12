"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.page = void 0;
const mariadb_1 = require("../mariadb");
const page = (req, res) => {
    switch (req.params.page) {
        case "app":
            (0, mariadb_1.getPageData)('app')
                .then((row) => {
                row = JSON.parse(row[0].PageData);
                res.json(row);
            });
            break;
        case "landingpage":
            (0, mariadb_1.getPageData)('landingpage')
                .then((row) => {
                row = JSON.parse(row[0].PageData);
                res.json(row);
            });
            break;
        case 'aboutme':
            (0, mariadb_1.getPageData)('aboutme')
                .then((row) => {
                row = JSON.parse(row[0].PageData);
                res.json(row);
            });
            break;
        case 'projects':
            (0, mariadb_1.getPageData)('projects')
                .then((row) => {
                row = JSON.parse(row[0].PageData);
                res.json(row);
            });
    }
};
exports.page = page;
//# sourceMappingURL=angularDataController.js.map