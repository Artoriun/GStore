const mongoose = require("mongoose");
const User = require("../modules/user/models/userModel");
require("dotenv").config();

const createAdminUser = async () => {
  try {
    // Connect to database
    await mongoose.connect(process.env.DB_URI, {
      dbName: process.env.DB_NAME,
    });

    console.log("✓ Connected to MongoDB");

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: "admin@test.com" });
    if (existingAdmin) {
      console.log("✗ Admin user already exists with email: admin@test.com");
      process.exit(1);
    }

    // Create admin user
    const adminUser = await User.create({
      name: "Admin User",
      email: "admin@test.com",
      password: "Admin@123456", // Change this password!
      role: "admin",
      avatar: {
        public_id: "default",
        url: "https://via.placeholder.com/150",
      },
    });

    console.log("✓ Admin user created successfully!");
    console.log("\nTest Admin Credentials:");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("Email:    admin@test.com");
    console.log("Password: Admin@123456");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
    console.log("Use these credentials to login on the frontend and access the admin panel.");

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("✗ Error creating admin user:", error.message);
    process.exit(1);
  }
};

createAdminUser();
