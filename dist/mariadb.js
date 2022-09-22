"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePageData = exports.getPageData = void 0;
const mysql = require("mysql");
const con = mysql.createConnection({
    host: "vandervalkit.nl",
    user: "quintenvandervalk",
    password: "dMc3f35!5",
    database: "domein"
});
con.connect(function (err) {
    if (err)
        throw err;
    console.log('Connected!');
});
const getPageData = (page) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise(function (resolve, reject) {
        con.query(`SELECT * FROM pagedata WHERE PageName='${page}'`, function (err, rows) {
            if (err) {
                return reject(err);
            }
            resolve(rows);
        });
    });
});
exports.getPageData = getPageData;
function updatePageData(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const page = data.page;
        delete data.page;
        const payload = JSON.stringify(data).replace(/'/g, "\\'");
        con.connect(() => {
            con.query(`UPDATE pagedata SET PageData='${payload}' WHERE PageName='${page}'`, function (err, rows) {
                if (err)
                    throw err;
                return rows;
            });
        });
    });
}
exports.updatePageData = updatePageData;
//# sourceMappingURL=mariadb.js.map