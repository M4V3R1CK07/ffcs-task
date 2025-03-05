import { Request, Response } from "express";
import Record from "../models/Record";

export const getAllRecords = async (req: Request, res: Response) => {
  try {
    const records = await Record.find().sort({ createdAt: -1 });
    res.json(records);
  } catch (error) {
    res.status(500).json({ message: "Error fetching records", error });
  }
};

export const searchRecords = async (req: Request, res: Response) => {
  try {
    const { query } = req.query;
    const records = await Record.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
      ],
    });
    res.json(records);
  } catch (error) {
    res.status(500).json({ message: "Error searching records", error });
  }
};

export const createRecord = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    const newRecord = new Record({ name, description });
    await newRecord.save();
    res.status(201).json(newRecord);
  } catch (error) {
    res.status(400).json({ message: "Error creating record", error });
  }
};
