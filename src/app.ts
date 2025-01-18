import express from "express";
import cors from "cors";
import sequelize, { connectToMongoDB } from "./config/database";
import dotenv from "dotenv";
import { userRouter } from "./component/user/user.router";
import bodyParser from "body-parser";
import { invoiceRouter } from "./component/invoice/invoice.router";

dotenv.config();
// dotenv.config({ path: '.env' })

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
connectToMongoDB()
// Test Route
app.get("/", async (_req, res) => {
  res.send("Server is running!");
});

app.use('/api/v1/users', userRouter)
app.use('/api/v1/invoices', invoiceRouter)


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
app.listen(PORT, async () => {
  try {
    // await sequelize.authenticate();
    console.log(`🚀 Server running on port ${PORT}`);
    console.log("✅ Connection to Neon PostgreSQL successful!");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
  }
});
