import { Request, Response } from 'express';

import { appDataModel } from './../Models/appData';

export const appData = (req: Request, res: Response) => {
  res.json(appDataModel);
};
