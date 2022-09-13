"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateData = void 0;
const mariadb_1 = require("../mariadb");
const updateData = (req, res) => {
    (0, mariadb_1.updatePageData)(req.body)
        .then((row) => {
        res.json({ msg: "page has been updated" });
    });
};
exports.updateData = updateData;
//# sourceMappingURL=backOffcieController.js.map