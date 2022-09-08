import { Request, Response } from 'express';

import { appDataModel } from './../Models/appData';

export const appData = (req: Request, res: Response) => {
  res.set('Access-Control-Allow-Origin', '*');
  console.log(req.headers);
  res.json(appDataModel);
};
