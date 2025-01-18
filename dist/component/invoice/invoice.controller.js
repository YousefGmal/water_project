"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInvoices = exports.addInvoice = void 0;
const invoice_model_1 = require("./invoice.model");
const addInvoice = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield invoice_model_1.Invoice.create(req.body);
        res.status(201).json("Invoice is created successfully");
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.addInvoice = addInvoice;
const getInvoices = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield invoice_model_1.Invoice.find();
        res.status(200).json({ data: result });
        // res.json(result.rows);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getInvoices = getInvoices;
