import mongoose, { Schema, Document } from "mongoose";

interface IInvoice extends Document {
  invNum: number;
  employeeName: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

const InvoiceSchema = new Schema<IInvoice>(
  {
    employeeName: { type: String, required: true },
    invNum: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
  },
  { timestamps: true }
);

export const Invoice = mongoose.model<IInvoice>("Invoice", InvoiceSchema);
