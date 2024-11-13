import { Request, Response } from 'express';

export const login = (req: Request, res: Response) => {
  res.send({ message: 'User logged in' });
};

export const register = (req: Request, res: Response) => {
  res.send({ message: 'User registered' });
};
