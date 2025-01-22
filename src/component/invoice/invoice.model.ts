import mongoose, { Schema, Document } from "mongoose";

interface IInvoice extends Document {
  invNum: number;
  employeeName: string;
  consumerName: string;
  address: string;
  isCollected: boolean;
  paymentMethod: string;
  subscriptionNum: number;
  price: number;
  collectedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

const InvoiceSchema = new Schema<IInvoice>(
  {
    employeeName: { type: String, required: true },
    consumerName: { type: String, required: true },
    address: { type: String, required: true },
    isCollected: { type: Boolean, required: true, default: false },
    paymentMethod: { type: String, required: true, default: "cash" },
    collectedAt: { type: Date },
    subscriptionNum: { type: Number, required: true },
    invNum: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
  },
  { timestamps: true }
);

export const Invoice = mongoose.model<IInvoice>("Invoice", InvoiceSchema);
