import express from "express";
import {
  getAllRecords,
  searchRecords,
  createRecord,
} from "../controllers/recordController";

const router = express.Router();

router.get("/", getAllRecords);
router.get("/search", searchRecords);
router.post("/", createRecord);

export default router;
