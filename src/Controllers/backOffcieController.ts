import { Request, Response } from 'express';
import { updatePageData } from "../mariadb";

export const updateData = (req: Request, res: Response) => {
  updatePageData(req.body)
    .then((row) => {
      res.json({msg: "page has been updated"})
    })
}