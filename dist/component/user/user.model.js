"use strict";
// import { DataTypes, Model } from "sequelize";
// import sequelize from "../../config/database";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
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
const mongoose_1 = __importStar(require("mongoose"));
const EmployeeSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    invoicesNumber: { type: Number, required: true, default: 0 },
    totalCollections: { type: Number, required: true, default: 0 },
    cash: { type: Number, required: true, default: 0 },
    area: { type: String, required: true },
}, { timestamps: true });
exports.Employee = mongoose_1.default.model("Employee", EmployeeSchema);
