import { Request, Response } from 'express';

import { getPageData } from "../mariadb";

async function handleData(page: string, res: Response) {
  await getPageData(page)
  .then((row: any) => {
    row = JSON.parse(row[0].PageData);
    console.log(row)
    res.json(row)
  })
}

export const page = (req: Request, res: Response) => {
  switch(req.params.page) {
    case "app":
      handleData('app', res)
      break;
    case "landingpage":
      handleData('landingpage', res)
      break;
    case 'aboutme':
      handleData('aboutme', res)
      break;
    case 'projects':
      handleData('projects', res)
      break;
    case 'landingpage-backoffice':
      handleData('landingpage-backoffice', res)
      break;
  }
};