import { NextFunction, Request, Response } from "express";
import { Invoice } from "./invoice.model";

export const addInvoice = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await Invoice.create(req.body);

    res.status(201).json("Invoice is created successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getInvoices = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await Invoice.find();
    res.status(200).json({ data: result });

    // res.json(result.rows);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const collectInvoices = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const result = await Invoice.findOneAndUpdate(
      { _id: id },
      { isCollected: true },
      { new: true }
    );
    res.status(200).json({ data: result });

    // res.json(result.rows);
  } catch (error) {
    res.status(500).json(error);
  }
};
