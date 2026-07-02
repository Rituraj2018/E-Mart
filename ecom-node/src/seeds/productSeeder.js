const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from .env file
dotenv.config({ path: path.join(__dirname, '../../.env') });

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce';

// Import Mongoose Models using path relative to src/seeds
const Product = require('../models/product.model');
const Category = require('../models/category.model');

// Required Categories
const categoriesList = [
  'Electronics',
  'Mobiles',
  'Laptops',
  'Fashion',
  'Shoes',
  'Watches',
  'Beauty',
  'Grocery',
  'Sports',
  'Home & Kitchen',
  'Books',
  'Toys'
];

// Predefined list of 52 realistic products matching brand & price range requirements
const baseProducts = [
  // Mobiles (15000 - 180000)
  {
    productName: "Apple iPhone 16 Pro Max",
    brand: "Apple",
    categoryName: "Mobiles",
    description: "Latest Apple flagship smartphone with A18 Pro chip, titanium design, and advanced camera system.",
    price: 144900,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=600&auto=format&fit=crop"
  },
  {
    productName: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    categoryName: "Mobiles",
    description: "Samsung premium flagship phone with Galaxy AI, Snapdragon 8 Gen 3, and built-in S Pen.",
    price: 129999,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=600&auto=format&fit=crop"
  },
  {
    productName: "Apple iPhone 15 Plus",
    brand: "Apple",
    categoryName: "Mobiles",
    description: "Apple iPhone 15 Plus with Dynamic Island, 48MP main camera, and durable color-infused glass.",
    price: 79900,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=600&auto=format&fit=crop"
  },
  {
    productName: "Samsung Galaxy Z Fold 6",
    brand: "Samsung",
    categoryName: "Mobiles",
    description: "Foldable next-generation smartphone with massive dual display and optimized multitasking capabilities.",
    price: 164999,
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=600&auto=format&fit=crop"
  },

  // Laptops (35000 - 250000)
  {
    productName: "Apple MacBook Pro 16 M3 Max",
    brand: "Apple",
    categoryName: "Laptops",
    description: "Powerful Apple notebook with M3 Max chip, Liquid Retina XDR display, and unified memory.",
    price: 249900,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=600&auto=format&fit=crop"
  },
  {
    productName: "Dell XPS 15",
    brand: "Dell",
    categoryName: "Laptops",
    description: "Sleek premium creator laptop with Intel Core i9, InfinityEdge OLED touch display, and NVIDIA graphics.",
    price: 185000,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=600&auto=format&fit=crop"
  },
  {
    productName: "HP Spectre x360",
    brand: "HP",
    categoryName: "Laptops",
    description: "2-in-1 convertible touchscreen laptop with Intel Core Ultra 7, long battery life, and elegant finish.",
    price: 145000,
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=600&auto=format&fit=crop"
  },
  {
    productName: "Asus ROG Zephyrus G14",
    brand: "Asus",
    categoryName: "Laptops",
    description: "Ultra-portable high-performance gaming laptop with AMD Ryzen 9 and RTX 4070 graphics.",
    price: 159999,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=600&auto=format&fit=crop"
  },
  {
    productName: "Lenovo ThinkPad X1 Carbon",
    brand: "Lenovo",
    categoryName: "Laptops",
    description: "Legendary business laptop with ultra-light carbon fiber chassis, ergonomic keyboard, and top security.",
    price: 175000,
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=600&auto=format&fit=crop"
  },
  {
    productName: "Asus TUF Gaming A15 Laptop",
    brand: "Asus",
    categoryName: "Laptops",
    description: "Heavy-duty gaming laptop with AMD Ryzen 7, RTX 3050, and military-grade durability.",
    price: 72990,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=600&auto=format&fit=crop"
  },

  // Shoes (1000 - 12000)
  {
    productName: "Nike Air Max Alpha",
    brand: "Nike",
    categoryName: "Shoes",
    description: "Durable training shoes with Max Air cushioning for ultimate comfort and stability during workouts.",
    price: 7999,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop"
  },
  {
    productName: "Adidas Ultraboost Light",
    brand: "Adidas",
    categoryName: "Shoes",
    description: "Premium running shoes featuring responsive Boost cushioning made with sustainable materials.",
    price: 11999,
    image: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?q=80&w=600&auto=format&fit=crop"
  },
  {
    productName: "Puma RS-X Reinvent",
    brand: "Puma",
    categoryName: "Shoes",
    description: "Retro-futuristic lifestyle sneakers with chunky silhouette and dynamic mesh overlays.",
    price: 5999,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=600&auto=format&fit=crop"
  },
  {
    productName: "Nike Pegasus 40",
    brand: "Nike",
    categoryName: "Shoes",
    description: "Trusted daily road running shoes with responsive Zoom Air units for a springy ride.",
    price: 9999,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=600&auto=format&fit=crop"
  },

  // Fashion (500 - 10000)
  {
    productName: "Adidas Originals Hoodie",
    brand: "Adidas",
    categoryName: "Fashion",
    description: "Cozy fleece hoodie featuring the iconic Trefoil logo and regular fit comfort.",
    price: 3499,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop"
  },
  {
    productName: "Puma Athletic Track Jacket",
    brand: "Puma",
    categoryName: "Fashion",
    description: "Classic sport jacket with moisture-wicking technology and retro contrast piping.",
    price: 2999,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600&auto=format&fit=crop"
  },
  {
    productName: "Nike Tech Fleece Joggers",
    brand: "Nike",
    categoryName: "Fashion",
    description: "Premium lightweight fleece joggers with zippered side pockets and tapered legs.",
    price: 6999,
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=600&auto=format&fit=crop"
  },
  {
    productName: "Wildcraft Windcheater Jacket",
    brand: "Wildcraft",
    categoryName: "Fashion",
    description: "Water-resistant, wind-shielding active jacket for hiking and outdoor expeditions.",
    price: 2499,
    image: "https://images.unsplash.com/photo-1544923246-77307dd654cb?q=80&w=600&auto=format&fit=crop"
  },
  {
    productName: "Nike Windrunner Jacket Pro",
    brand: "Nike",
    categoryName: "Fashion",
    description: "Windproof and water-repellent training jacket with chevron design lines for style.",
    price: 5499,
    image: "https://images.unsplash.com/photo-1544923246-77307dd654cb?q=80&w=600&auto=format&fit=crop"
  },

  // Watches (1000 - 50000)
  {
    productName: "Casio G-Shock Mudmaster",
    brand: "Casio",
    categoryName: "Watches",
    description: "Triple sensor watch built to withstand harsh environments with mud resistance and solar power.",
    price: 18995,
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=600&auto=format&fit=crop"
  },
  {
    productName: "Titan Regalia Chronograph",
    brand: "Titan",
    categoryName: "Watches",
    description: "Elegant stainless steel wrist watch with multi-function sub-dials and gold accent bezel.",
    price: 12500,
    image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?q=80&w=600&auto=format&fit=crop"
  },
  {
    productName: "Samsung Galaxy Watch 6 Classic",
    brand: "Samsung",
    categoryName: "Watches",
    description: "Premium smartwatch with rotating bezel, comprehensive sleep coaching, and body composition analysis.",
    price: 33999,
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=600&auto=format&fit=crop"
  },
  {
    productName: "Casio Vintage Digital Watch",
    brand: "Casio",
    categoryName: "Watches",
    description: "Classic retro style digital wrist watch with stainless steel band and alarm/stopwatch.",
    price: 1695,
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=600&auto=format&fit=crop"
  },
  {
    productName: "Apple Watch Ultra 2 SE",
    brand: "Apple",
    categoryName: "Watches",
    description: "Rugged adventure watch with GPS, heart rate monitor, and bright Always-On display.",
    price: 49900,
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=600&auto=format&fit=crop"
  },
  {
    productName: "Casio Vintage Gold Digital Watch",
    brand: "Casio",
    categoryName: "Watches",
    description: "Retro gold stainless steel watch with multi-function alarm and calendar.",
    price: 3495,
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=600&auto=format&fit=crop"
  },

  // Beauty (200 - 5000)
  {
    productName: "Sony Dual-Ion Hair Dryer",
    brand: "Sony",
    categoryName: "Beauty",
    description: "High-speed ionic blow dryer with intelligent temperature control for salon-grade hair styling.",
    price: 4999,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop"
  },
  {
    productName: "Samsung Sonic Facial Cleanser Plus",
    brand: "Samsung",
    categoryName: "Beauty",
    description: "Smart facial cleansing brush with ultra-hygienic silicone and dynamic sonic vibrations.",
    price: 3499,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=600&auto=format&fit=crop"
  },
  {
    productName: "LG Purifying Face Steamer Lite",
    brand: "LG",
    categoryName: "Beauty",
    description: "Warm mist facial sauna that opens pores to deeply hydrate the skin.",
    price: 2999,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=600&auto=format&fit=crop"
  },

  // Grocery (realistic prices)
  {
    productName: "Wildcraft Trail Mix Energy Tub",
    brand: "Wildcraft",
    categoryName: "Grocery",
    description: "High protein, organic adventure trail mix containing premium nuts and seeds.",
    price: 850,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=600&auto=format&fit=crop"
  },
  {
    productName: "Wildcraft Organic Herbal Tea Blend",
    brand: "Wildcraft",
    categoryName: "Grocery",
    description: "Refreshing outdoor organic herbal tea mix featuring chamomile and green tea leaf.",
    price: 650,
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=600&auto=format&fit=crop"
  },
  {
    productName: "Samsung Hydro-Electrolyte Tablets",
    brand: "Samsung",
    categoryName: "Grocery",
    description: "Advanced hydration effervescent tablets for active performance and recovery.",
    price: 950,
    image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=600&auto=format&fit=crop"
  },

  // Sports (realistic prices)
  {
    productName: "Nike Strike Soccer Ball",
    brand: "Nike",
    categoryName: "Sports",
    description: "High-durability soccer ball with textured casing and Nike Aerowsculpt grooves.",
    price: 1999,
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=600&auto=format&fit=crop"
  },
  {
    productName: "Adidas Yoga Mat Pro",
    brand: "Adidas",
    categoryName: "Sports",
    description: "Extra thick non-slip fitness and training mat with carry strap.",
    price: 2499,
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?q=80&w=600&auto=format&fit=crop"
  },
  {
    productName: "Wildcraft Outdoor Camping Tent",
    brand: "Wildcraft",
    categoryName: "Sports",
    description: "Spacious 4-person waterproof dome tent with lightweight aluminum poles.",
    price: 8999,
    image: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=600&auto=format&fit=crop"
  },
  {
    productName: "Puma Training Gym Gloves",
    brand: "Puma",
    categoryName: "Sports",
    description: "Breathable weightlifting gloves with padded palms and adjustable wrist wraps.",
    price: 1299,
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop"
  },

  // Books (200 - 3000)
  {
    productName: "Sony PlayStation Art Book",
    brand: "Sony",
    categoryName: "Books",
    description: "A comprehensive look at the history, concept art, and design of iconic PlayStation games.",
    price: 2999,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop"
  },
  {
    productName: "HP Cloud Architecture Guide",
    brand: "HP",
    categoryName: "Books",
    description: "Expert guide on enterprise cloud architecture, containerization, and microservices.",
    price: 1499,
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=600&auto=format&fit=crop"
  },
  {
    productName: "Dell Cybersecurity Blueprint",
    brand: "Dell",
    categoryName: "Books",
    description: "Strategic playbook for modern network security, data protection, and threat defense.",
    price: 1899,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=600&auto=format&fit=crop"
  },

  // Toys (realistic prices)
  {
    productName: "Sony PlayStation 5 Controller",
    brand: "Sony",
    categoryName: "Toys",
    description: "DualSense wireless controller featuring immersive haptic feedback.",
    price: 5990,
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=600&auto=format&fit=crop"
  },
  {
    productName: "Boat Smart Robotic Toy",
    brand: "Boat",
    categoryName: "Toys",
    description: "App-controlled interactive mini robot with built-in Bluetooth speaker.",
    price: 3499,
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=600&auto=format&fit=crop"
  },
  {
    productName: "JBL Kids Safe Headphones",
    brand: "JBL",
    categoryName: "Toys",
    description: "Wireless on-ear headphones for kids with volume limiter.",
    price: 2499,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=600&auto=format&fit=crop"
  },

  // Electronics (realistic prices)
  {
    productName: "Sony WH-1000XM5 Headphones",
    brand: "Sony",
    categoryName: "Electronics",
    description: "Industry-leading noise canceling over-ear headphones with exceptional sound clarity.",
    price: 29990,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop"
  },
  {
    productName: "JBL Flip 6 Speaker",
    brand: "JBL",
    categoryName: "Electronics",
    description: "Portable waterproof bluetooth speaker with deep bass response.",
    price: 9999,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=600&auto=format&fit=crop"
  },
  {
    productName: "Canon EOS R50 Camera",
    brand: "Canon",
    categoryName: "Electronics",
    description: "Compact mirrorless camera with 24.2 MP APS-C sensor and 4K video recording.",
    price: 75990,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600&auto=format&fit=crop"
  },
  {
    productName: "LG C3 55 OLED TV",
    brand: "LG",
    categoryName: "Electronics",
    description: "Superb self-lit OLED 4K TV with Dolby Vision and immersive gaming specs.",
    price: 139990,
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=600&auto=format&fit=crop"
  },
  {
    productName: "Boat Airdopes 131",
    brand: "Boat",
    categoryName: "Electronics",
    description: "Truly wireless earbuds with voice assistant and 12-hour playback.",
    price: 1299,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=600&auto=format&fit=crop"
  },
  {
    productName: "Sony Alpha 7 IV Camera",
    brand: "Sony",
    categoryName: "Electronics",
    description: "Full-frame mirrorless camera with 33MP sensor and high-speed shooting.",
    price: 189990,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600&auto=format&fit=crop"
  },
  {
    productName: "Boat Stone 1200 Speaker",
    brand: "Boat",
    categoryName: "Electronics",
    description: "Rugged outdoor bluetooth speaker with 14W signature sound and RGB LED lights.",
    price: 3999,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=600&auto=format&fit=crop"
  },
  {
    productName: "Boat Stone 1500 Wireless Speaker",
    brand: "Boat",
    categoryName: "Electronics",
    description: "High-power wireless speaker with shock-proof body and rich acoustic delivery.",
    price: 6999,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=600&auto=format&fit=crop"
  },

  // Home & Kitchen (realistic prices)
  {
    productName: "LG Smart Inverter Microwave",
    brand: "LG",
    categoryName: "Home & Kitchen",
    description: "NeoChef convection microwave oven with even heating and easy clean coatings.",
    price: 14500,
    image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?q=80&w=600&auto=format&fit=crop"
  },
  {
    productName: "Samsung French Door Refrigerator",
    brand: "Samsung",
    categoryName: "Home & Kitchen",
    description: "Large capacity multi-door refrigerator with Twin Cooling Plus system.",
    price: 115000,
    image: "https://images.unsplash.com/photo-1571175432290-ef022f17015d?q=80&w=600&auto=format&fit=crop"
  },
  {
    productName: "LG Direct Drive Washing Machine",
    brand: "LG",
    categoryName: "Home & Kitchen",
    description: "Front load fully automatic washer with 6 Motion DD technology.",
    price: 38000,
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=600&auto=format&fit=crop"
  }
];

const discountOptions = [5, 10, 15, 20, 25, 30];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGO_URI);
    console.log('✔ Connected to MongoDB');

    // Create or find categories
    const categoryMap = {};
    for (const catName of categoriesList) {
      let category = await Category.findOne({ categoryName: catName });
      if (!category) {
        category = await Category.create({ categoryName: catName });
      }
      categoryMap[catName] = category._id;
    }
    console.log('✔ Categories Created');

    let insertedCount = 0;
    let skippedCount = 0;

    // Seed products
    for (const p of baseProducts) {
      // Check if product name already exists
      const existingProduct = await Product.findOne({ productName: p.productName });
      if (existingProduct) {
        skippedCount++;
        continue;
      }

      // Generate random parameters matching constraints
      const discountPercentage = discountOptions[Math.floor(Math.random() * discountOptions.length)];
      const stockQuantity = Math.floor(Math.random() * (100 - 5 + 1)) + 5; // 5 to 100
      const rating = parseFloat((Math.random() * (5.0 - 3.5) + 3.5).toFixed(1)); // 3.5 to 5.0
      const featured = Math.random() < 0.5;

      const categoryId = categoryMap[p.categoryName];
      if (!categoryId) {
        throw new Error(`Category ID not found for categoryName: ${p.categoryName}`);
      }

      const productData = new Product({
        productName: p.productName,
        description: p.description,
        brand: p.brand,
        category: categoryId,
        price: p.price,
        discountPercentage: discountPercentage,
        discount: discountPercentage, // sync both fields
        stockQuantity: stockQuantity,
        quantity: stockQuantity, // sync both fields
        image: p.image,
        rating: rating,
        featured: featured,
        createdAt: new Date()
      });

      await productData.save();
      insertedCount++;
    }

    console.log('✔ Products Inserted');
    console.log('✔ Duplicate Products Skipped');
    console.log('✔ Seeder Completed');

  } catch (error) {
    if (error.name === 'ValidationError') {
      console.error('🚨 Validation error during database seeding:', error.message);
    } else if (error.code === 11000) {
      console.error('🚨 Duplicate key error during database seeding:', error.message);
    } else {
      console.error('🚨 Database seeding failed:', error.message || error);
    }
    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
}

seedDatabase();
