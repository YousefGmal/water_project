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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const database_1 = require("./config/database");
const dotenv_1 = __importDefault(require("dotenv"));
const user_router_1 = require("./component/user/user.router");
const body_parser_1 = __importDefault(require("body-parser"));
const invoice_router_1 = require("./component/invoice/invoice.router");
dotenv_1.default.config();
// dotenv.config({ path: '.env' })
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
(0, database_1.connectToMongoDB)();
// Test Route
app.get("/", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("Server is running!");
}));
app.use('/api/v1/users', user_router_1.userRouter);
app.use('/api/v1/invoices', invoice_router_1.invoiceRouter);
// app.get("/users", async (_req, res) => {
//   try {
//     const users = await User.findAll();
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ error: "Error fetching users" });
//   }
// });
// Sync Database and Start Server
const PORT = 5000;
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // await sequelize.authenticate();
        console.log(`🚀 Server running on port ${PORT}`);
        console.log("✅ Connection to Neon PostgreSQL successful!");
    }
    catch (error) {
        console.error("❌ Database connection failed:", error);
    }
}));
