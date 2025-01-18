import { Router } from "express";
import { addInvoice, getInvoices } from "./invoice.controller";
// import { addUser, getUsers } from "./user.controller";

const router = Router();
router.post('/', addInvoice)
router.get('/', getInvoices)

export {router as invoiceRouter};