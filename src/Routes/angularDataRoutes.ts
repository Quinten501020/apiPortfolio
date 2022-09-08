import * as express from 'express';
import * as csrf from "csurf";

import * as dataModuleController from '../Controllers/angularDataController';

var csrfProtection = csrf({ cookie: true })

export const router = express.Router();

router.post('/appData', csrfProtection , dataModuleController.appData);
