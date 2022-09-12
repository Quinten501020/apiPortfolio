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
exports.contact = void 0;
const nodemailer = require("nodemailer");
function main(req) {
    return __awaiter(this, void 0, void 0, function* () {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            auth: {
                user: "service.vandervalkit.nl",
                pass: "2ksHBSwh1A7hkGd1"
            },
        });
        let info = yield transporter.sendMail({
            from: req.body.email,
            to: "quintenvandervalk@gmail.com",
            subject: "Hello ✔",
            text: "Hello world?",
            html: "<b>Hello world?</b>", // html body
        });
    });
}
const contact = (req, res) => {
    main(req);
    res.json({});
};
exports.contact = contact;
//# sourceMappingURL=mailController.js.map