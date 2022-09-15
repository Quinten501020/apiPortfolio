"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.updateData = void 0;
const mariadb_1 = require("../mariadb");
const updateData = (req, res) => {
    (0, mariadb_1.updatePageData)(req.body)
        .then((row) => {
        res.json({ msg: "page has been updated" });
    });
};
exports.updateData = updateData;
const login = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    if (email === "501020@vistacollege.nl" && password == "Hv7bJZnjxzNElJ2z") {
        res.json({});
    }
    else {
        res.status(401).send({ error: 'Incorrect credentials' });
    }
};
exports.login = login;
//# sourceMappingURL=backOffcieController.js.map