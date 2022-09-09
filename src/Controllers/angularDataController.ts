import { Request, Response } from 'express';

import { appDataModel } from './../Models/appData';
import { landingpageDataModel } from "../Models/landingpageData";
import { aboutmeDataModel } from "../Models/aboutmeData";
import { projectsDataModel } from "../Models/projectsData";

export const appData = (req: Request, res: Response) => {
  res.json(appDataModel);
};

export const landingpageData = (req: Request, res: Response) => {
  res.json(landingpageDataModel);
};

export const aboutmeData = (req: Request, res: Response) => {
  res.json(aboutmeDataModel);
};

export const projectsData = (req: Request, res: Response) => {
  res.json(projectsDataModel);
};
