"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const angularDataRoutes = require("./Routes/angularDataRoutes");
const app = express();
const port = 5000;
app.use(cors({ origin: 'http://localhost:8080' }));
app.use(bodyParser.json());
app.use('/angularData', angularDataRoutes.router);
app.listen(port, () => console.log(`Running on port ${port}`));
//# sourceMappingURL=index.js.map