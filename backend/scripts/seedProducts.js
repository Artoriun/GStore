const mongoose = require("mongoose");
const Product = require("../modules/product/models/productModel");
require("dotenv").config({ path: "../.env" });

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("[database] connected successfully to MongoDB");
  } catch (err) {
    console.log("[database] connection failed");
    console.log(err);
  }
};

const testProducts = [
  {
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
    price: 12999,
    category: "Electronics",
    stock: 15,
    ratings: 4.5,
    images: [
      {
        public_id: "test_headphones_1",
        url: "https://via.placeholder.com/400x400?text=Wireless+Headphones",
      },
    ],
  },
  {
    name: "Smart Watch",
    description: "Advanced smartwatch with health monitoring, fitness tracking, and 7-day battery.",
    price: 8999,
    category: "Electronics",
    stock: 22,
    ratings: 4.2,
    images: [
      {
        public_id: "test_watch_1",
        url: "https://via.placeholder.com/400x400?text=Smart+Watch",
      },
    ],
  },
  {
    name: "USB-C Fast Charger",
    description: "65W USB-C fast charger compatible with all devices. Compact and efficient.",
    price: 1999,
    category: "Accessories",
    stock: 50,
    ratings: 4.7,
    images: [
      {
        public_id: "test_charger_1",
        url: "https://via.placeholder.com/400x400?text=USB-C+Charger",
      },
    ],
  },
  {
    name: "Mechanical Keyboard",
    description: "RGB mechanical keyboard with blue switches, per-key lighting, and programmable keys.",
    price: 6499,
    category: "Accessories",
    stock: 18,
    ratings: 4.6,
    images: [
      {
        public_id: "test_keyboard_1",
        url: "https://via.placeholder.com/400x400?text=Mechanical+Keyboard",
      },
    ],
  },
  {
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with adjustable DPI and 18-month battery life.",
    price: 2499,
    category: "Accessories",
    stock: 40,
    ratings: 4.4,
    images: [
      {
        public_id: "test_mouse_1",
        url: "https://via.placeholder.com/400x400?text=Wireless+Mouse",
      },
    ],
  },
  {
    name: "4K Webcam",
    description: "Professional 4K webcam with auto-focus, wide-angle lens, and built-in microphone.",
    price: 5999,
    category: "Electronics",
    stock: 12,
    ratings: 4.3,
    images: [
      {
        public_id: "test_webcam_1",
        url: "https://via.placeholder.com/400x400?text=4K+Webcam",
      },
    ],
  },
  {
    name: "Monitor Stand with USB Hub",
    description: "Adjustable monitor stand with integrated USB hub and cable management.",
    price: 3499,
    category: "Accessories",
    stock: 25,
    ratings: 4.1,
    images: [
      {
        public_id: "test_stand_1",
        url: "https://via.placeholder.com/400x400?text=Monitor+Stand",
      },
    ],
  },
  {
    name: "Gaming Mouse Pad",
    description: "Large gaming mouse pad with non-slip base and smooth surface for precision gaming.",
    price: 1299,
    category: "Gaming",
    stock: 60,
    ratings: 4.5,
    images: [
      {
        public_id: "test_mousepad_1",
        url: "https://via.placeholder.com/400x400?text=Gaming+Pad",
      },
    ],
  },
  {
    name: "Portable SSD 1TB",
    description: "Fast portable SSD with 1TB storage, USB-C connectivity, and rugged design.",
    price: 7999,
    category: "Storage",
    stock: 20,
    ratings: 4.8,
    images: [
      {
        public_id: "test_ssd_1",
        url: "https://via.placeholder.com/400x400?text=Portable+SSD",
      },
    ],
  },
  {
    name: "HDMI 2.1 Cable",
    description: "High-speed HDMI 2.1 cable supporting 8K resolution and 48Gbps bandwidth.",
    price: 899,
    category: "Cables",
    stock: 100,
    ratings: 4.2,
    images: [
      {
        public_id: "test_hdmi_1",
        url: "https://via.placeholder.com/400x400?text=HDMI+Cable",
      },
    ],
  },
  {
    name: "USB Hub 7-Port",
    description: "Powered USB 3.0 hub with 7 ports, 5V/2.4A power adapter included.",
    price: 1699,
    category: "Accessories",
    stock: 35,
    ratings: 4.3,
    images: [
      {
        public_id: "test_hub_1",
        url: "https://via.placeholder.com/400x400?text=USB+Hub",
      },
    ],
  },
  {
    name: "Laptop Cooling Pad",
    description: "Laptop cooling pad with dual fans, adjustable height, and USB power.",
    price: 2299,
    category: "Accessories",
    stock: 28,
    ratings: 4.4,
    images: [
      {
        public_id: "test_cooler_1",
        url: "https://via.placeholder.com/400x400?text=Cooling+Pad",
      },
    ],
  },
];

const seedProducts = async () => {
  try {
    await connectDB();

    // Get admin user (using first admin)
    const User = require("../modules/user/models/userModel");
    let adminUser = await User.findOne({ role: "admin" });

    if (!adminUser) {
      console.log("Admin user not found. Creating test admin...");
      adminUser = await User.create({
        name: "Admin",
        email: "admin@gstore.com",
        password: "Admin@123456",
        role: "admin",
      });
    }

    // Clear existing products
    await Product.deleteMany({});
    console.log("Cleared existing products");

    // Add user ID to each product
    const productsWithUser = testProducts.map((product) => ({
      ...product,
      user: adminUser._id,
    }));

    // Insert products
    const insertedProducts = await Product.insertMany(productsWithUser);
    console.log(`✓ Successfully added ${insertedProducts.length} test products!`);

    console.log("\nProducts added:");
    insertedProducts.forEach((product) => {
      console.log(`  - ${product.name} (¥${product.price}) - Stock: ${product.stock}`);
    });

    await mongoose.connection.close();
    console.log("\n[database] connection closed");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding products:", error);
    process.exit(1);
  }
};

seedProducts();
