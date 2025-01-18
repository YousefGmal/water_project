import { NextFunction, Request, Response } from "express";
// import  User  from "./user.model";
import pool from "../../config/database";
import { Employee } from "./user.model";

export const addUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await Employee.create(req.body);

    res.status(201).json("user is created successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await Employee.find();
    res.status(200).json({ data: result });

    // res.json(result.rows);
  } catch (error) {
    res.status(500).json(error);
  }
};
