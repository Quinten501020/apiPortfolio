import * as express from 'express';

import * as dataModuleController from '../Controllers/angularDataController';

export const router = express.Router();

router.get('/appData', dataModuleController.appData);