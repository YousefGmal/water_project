import sequelize from "../config/database";
import User from "../component/user/user.model";

const syncDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Connection to Neon PostgreSQL successful!");

    await sequelize.sync({ alter: true }); // Auto-sync tables
    console.log("✅ Database synchronized!");
  } catch (error) {
    console.error("❌ Error connecting to database:", error);
  } finally {
    await sequelize.close();
  }
};

syncDatabase();