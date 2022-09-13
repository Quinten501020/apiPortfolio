import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from "body-parser";

import * as angularDataRoutes from './Routes/angularDataRoutes';
import * as backofficeRoutes from './Routes/backofficeRoutes';

const app = express();
const port = 5000;

app.use(cors({origin: 'http://localhost:8080'}));
app.use(bodyParser.json());

app.use('/angularData', angularDataRoutes.router);
app.use('/backoffice', backofficeRoutes.router);

app.listen(port, () => console.log(`Running on port ${port}`));
