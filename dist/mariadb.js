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
const mariadb = require("mariadb");
const connection = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'domein'
});
function getPageData(page) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield connection.getConnection();
        const rows = yield conn.query(`SELECT * from pagedata WHERE PageName='${page}'`);
        yield conn.release();
        return rows;
    });
}
exports.getPageData = getPageData;
function updatePageData(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const page = data.page;
        delete data.page;
        const payload = JSON.stringify(data).replace(/'/g, "\\'");
        const conn = yield connection.getConnection();
        const rows = yield conn.query(`UPDATE pageData SET PageData='${payload}' WHERE PageName='${page}'`);
        yield conn.release();
        return rows;
    });
}
exports.updatePageData = updatePageData;
//# sourceMappingURL=mariadb.js.map