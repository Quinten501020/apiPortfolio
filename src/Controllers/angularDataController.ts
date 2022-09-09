import { Request, Response } from 'express';

import { appDataModel } from './../Models/appData';
import { landingpageDataModel } from "../Models/landingpageData";
import { aboutmeDataModel } from "../Models/aboutmeData";
import { projectsDataModel } from "../Models/projectsData";

export const page = (req: Request, res: Response) => {
  switch(req.params.page) {
    case "app": 
      res.json(appDataModel);
      break;
    case "landingpage":
      res.json(landingpageDataModel);
      break;
    case 'aboutme':
      res.json(aboutmeDataModel);
      break;
    case 'projects':
      res.json(projectsDataModel);
  }
};
