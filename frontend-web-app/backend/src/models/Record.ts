import mongoose, { Schema, Document } from "mongoose";

export interface IRecord extends Document {
  name: string;
  description: string;
  createdAt: Date;
}

const RecordSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<IRecord>("Record", RecordSchema);
