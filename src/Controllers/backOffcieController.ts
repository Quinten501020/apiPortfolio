import { Request, Response } from 'express';
import { updatePageData } from "../mariadb";

export const updateData = (req: Request, res: Response) => {
  updatePageData(req.body)
    .then(() => {
      res.json({msg: "page has been updated"})
    })
}

export const login = (req: Request, res: Response) => {
  const email = req.body.email;
  const password = req.body.password;

  if(email === "501020@vistacollege.nl" && password == "Hv7bJZnjxzNElJ2z") {
    res.json({})
  }
  else {
    res.status(401).send({ error: 'Incorrect credentials' });
  }
}