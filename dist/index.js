"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const csrf = require("csurf");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const angularDataRoutes = require("./Routes/angularDataRoutes");
const app = express();
const port = 5000;
const csrfProtection = csrf({ cookie: true });
const corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(bodyParser.json());
app.use('/angularData', angularDataRoutes.router);
app.get('/fetchToken', csrfProtection, (req, res, next) => {
    const data = req.csrfToken();
    res.json({ csrfToken: data });
});
app.listen(port, () => console.log(`Running on port ${port}`));
//# sourceMappingURL=index.js.map