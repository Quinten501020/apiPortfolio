import * as express from 'express';
import * as cors from 'cors';


import * as angularDataRoutes from './Routes/angularDataRoutes';

const app = express();
const port = 5000;

app.use(cors({origin: 'http://localhost:8080'}));

app.use('/angularData', angularDataRoutes.router);

app.listen(port, () => console.log(`Running on port ${port}`));
