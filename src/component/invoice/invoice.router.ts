import { Router } from "express";
import { addInvoice, collectInvoices, getInvoices } from "./invoice.controller";
// import { addUser, getUsers } from "./user.controller";

const router = Router();
router.post('/', addInvoice)
router.get('/', getInvoices)
router.patch('/:id', collectInvoices)


export {router as invoiceRouter};