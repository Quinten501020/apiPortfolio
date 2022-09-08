import * as express from 'express';
import * as cors from 'cors';

import * as csrf from 'csurf';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';

import * as angularDataRoutes from './Routes/angularDataRoutes';

const app = express();
const port = 5000;
const csrfProtection = csrf({ cookie: true })

const corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(cookieParser())
app.use(bodyParser.json());

app.use('/angularData', angularDataRoutes.router);

app.get('/fetchToken', csrfProtection, (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const data = req.csrfToken()
    res.json({ csrfToken: data });
});

app.listen(port, () => console.log(`Running on port ${port}`));
    