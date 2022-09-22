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
exports.page = void 0;
const mariadb_1 = require("../mariadb");
function handleData(page, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, mariadb_1.getPageData)(page)
            .then((row) => {
            row = JSON.parse(row[0].PageData);
            console.log(row);
            res.json(row);
        });
    });
}
const page = (req, res) => {
    switch (req.params.page) {
        case "app":
            handleData('app', res);
            break;
        case "landingpage":
            handleData('landingpage', res);
            break;
        case 'aboutme':
            handleData('aboutme', res);
            break;
        case 'projects':
            handleData('projects', res);
            break;
        case 'landingpage-backoffice':
            handleData('landingpage-backoffice', res);
            break;
    }
};
exports.page = page;
//# sourceMappingURL=angularDataController.js.map