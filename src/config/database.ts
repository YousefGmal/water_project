// import { Sequelize } from "sequelize";


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

import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  connectionString: 'postgresql://water_owner:SZ8zQYes7arm@ep-wild-king-a4wh891k.us-east-1.aws.neon.tech/water?sslmode=require',
  ssl: { rejectUnauthorized: false }, // Required for Neon
});

export default pool;
// import { createClient } from '@supabase/supabase-js'


// const supabase = createClient(
//     process.env.SUPABASE_URL as string,
//     process.env.SUPABASE_ANON_KEY as string
//   );

import mongoose, { Connection } from 'mongoose';

let cachedConnection: Connection | null = null;

export async function connectToMongoDB() {
  if (cachedConnection) {
    console.log('Using cached db connection ✔️');
    return cachedConnection;
  }
  try {
    const cnx = await mongoose.connect('mongodb+srv://ygmal49:r3WR3tszmDuWymf9@cluster0.ar9cx.mongodb.net/water_project');
    cachedConnection = cnx.connection;
    console.log('New mongodb connection established ✔️');
    return cachedConnection;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
