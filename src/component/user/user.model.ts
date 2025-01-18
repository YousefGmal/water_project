// import { DataTypes, Model } from "sequelize";
// import sequelize from "../../config/database";

// class User extends Model {
//   public id!: number;
//   public name!: string;
//   invoicesNumber!: number;
//   area!: string;
//   totalCollections!: number;
//   cash!: number;
// }

// User.init(
//   {
//     id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
//     name: { type: DataTypes.STRING, allowNull: false },
//     invoicesNumber: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       defaultValue: 0,
//     },
//     totalCollections: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       defaultValue: 0,
//     },
//     cash: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
//     area: { type: DataTypes.STRING, allowNull: false },
//   },
//   { sequelize, tableName: "employees", timestamps: true }
// );

// export default User;
// export interface User {
//   id: number;
//   name: string;
//   invoicesNumber: number;
//   area: string;
//   totalCollections: number;
//   cash: number;
// }

import mongoose, { Schema, Document } from "mongoose";

interface IEmployee extends Document {
  name: string;
  invoicesNumber: number;
  totalCollections: number;
  cash: number;
  area: string;
  createdAt: Date;
  updatedAt: Date;
}

const EmployeeSchema = new Schema<IEmployee>(
  {
    name: { type: String, required: true },
    invoicesNumber: { type: Number, required: true, default: 0 },
    totalCollections: { type: Number, required: true, default: 0 },
    cash: { type: Number, required: true, default: 0 },
    area: { type: String, required: true },
  },
  { timestamps: true }
);

export const Employee = mongoose.model<IEmployee>("Employee", EmployeeSchema);
