"use strict";
// import { Sequelize } from "sequelize";
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
exports.connectToMongoDB = connectToMongoDB;
// const sequelize = new Sequelize('postgresql://water_owner:SZ8zQYes7arm@ep-wild-king-a4wh891k.us-east-1.aws.neon.tech/water?sslmode=require', {
//   dialect: "postgres",
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false, // Required for Neon PostgreSQL
//     },
//   },
//   logging: console.log, // Disable logging
// });
// export default sequelize;
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const pool = new pg_1.Pool({
    connectionString: 'postgresql://water_owner:SZ8zQYes7arm@ep-wild-king-a4wh891k.us-east-1.aws.neon.tech/water?sslmode=require',
    ssl: { rejectUnauthorized: false }, // Required for Neon
});
exports.default = pool;
// import { createClient } from '@supabase/supabase-js'
// const supabase = createClient(
//     process.env.SUPABASE_URL as string,
//     process.env.SUPABASE_ANON_KEY as string
//   );
const mongoose_1 = __importDefault(require("mongoose"));
let cachedConnection = null;
function connectToMongoDB() {
    return __awaiter(this, void 0, void 0, function* () {
        if (cachedConnection) {
            console.log('Using cached db connection ✔️');
            return cachedConnection;
        }
        try {
            const cnx = yield mongoose_1.default.connect('mongodb+srv://ygmal49:r3WR3tszmDuWymf9@cluster0.ar9cx.mongodb.net/water_project');
            cachedConnection = cnx.connection;
            console.log('New mongodb connection established ✔️');
            return cachedConnection;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    });
}
