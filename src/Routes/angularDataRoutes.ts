import * as express from 'express';

import * as dataModuleController from '../Controllers/angularDataController';

export const router = express.Router();

router.get('/appData', dataModuleController.appData);
router.get('/landingpageData', dataModuleController.landingpageData);
router.get('/aboutmeData', dataModuleController.aboutmeData);
router.get('/projectsData', dataModuleController.projectsData);