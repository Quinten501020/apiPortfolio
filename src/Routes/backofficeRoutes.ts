import * as express from 'express';

import * as backOffcieController from "../Controllers/backOffcieController";

export const router = express.Router();

router.post('/updateData', backOffcieController.updateData);