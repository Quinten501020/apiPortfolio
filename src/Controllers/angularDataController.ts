import { Request, Response } from 'express';

import { getPageData } from "../mariadb";

export const page = (req: Request, res: Response) => {
  switch(req.params.page) {
    case "app":
      getPageData('app')
        .then((row) => {
          row = JSON.parse(row[0].PageData);
          res.json(row)
        })
      break;
    case "landingpage":
      getPageData('landingpage')
        .then((row) => {
          row = JSON.parse(row[0].PageData);
          res.json(row)
        })
      break;
    case 'aboutme':
      getPageData('aboutme')
        .then((row) => {
          row = JSON.parse(row[0].PageData);
          res.json(row)
        })
      break;
    case 'projects':
      getPageData('projects')
        .then((row) => {
          row = JSON.parse(row[0].PageData);
          res.json(row)
        })
  }
};
