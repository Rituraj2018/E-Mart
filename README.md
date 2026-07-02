# 🛒 E-Mart — Premium MERN Full-Stack E-Commerce

![E-Mart Banner](https://marketplace.canva.com/EAFWecuevFk/1/0/1600w/canva-grey-brown-minimalist-summer-season-collections-banner-landscape-VXEmg9V800o.jpg)
### 🛍️ India's Trusted Online Shopping Destination

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-8.x-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://javascript.info/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![JWT](https://img.shields.io/badge/JWT-Token_Auth-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/Rituraj2018/E-Mart?style=for-the-badge)](https://github.com/Rituraj2018/E-Mart/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/Rituraj2018/E-Mart?style=for-the-badge)](https://github.com/Rituraj2018/E-Mart/network/members)

</div>

---

## 📌 Table of Contents

- [Project Overview](#-project-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Folder Structure](#-folder-structure)
- [Installation Guide](#-installation-guide)
- [Environment Variables](#-environment-variables)
- [API Endpoints](#-api-endpoints)
- [Screenshots](#-screenshots)
- [Current Project Status](#-current-project-status)
- [Future Roadmap](#-future-roadmap)
- [Developer Information](#-developer-information)
- [Contributing](#-contributing)
- [License](#-license)
- [Support](#-support)

---

## 🧾 Project Overview

**E-Mart** is a premium, high-performance, and feature-rich full-stack E-Commerce web application built using the MERN (MongoDB, Express.js, React, Node.js) architecture. Designed for a seamless and responsive shopping experience, the platform supports distinct user roles (Customers, Sellers, and Admins) with customized dashboards and restricted routes. Key frontend interactions are powered by React Router, Redux Toolkit, and Framer Motion micro-animations, while the backend leverages a RESTful architecture, secure JSON Web Token (JWT) sessions, and schema-validated database integrations via Mongoose.

---

## ✨ Features

### Current Features

- **User Authentication & Profile Management**: Secure JWT-based registration, sign-in, and sign-out. Profiles support profile picture avatar uploads integrated with Cloudinary and Multer.
- **Role-Based Authorization & Route Protection**: Route guard mechanisms in React and middleware security in Express restrict access according to user roles (`ROLE_USER`, `ROLE_SELLER`, `ROLE_ADMIN`).
- **Interactive Dashboards**:
  - **Admin Dashboard**: Real-time analytics displaying high-level metrics (Total Products, Total Orders, Total Users, and Total Revenue) powered by backend database aggregation, complete with responsive SVG revenue trend charts and product category distribution bars. Admin-only management views are provided for Categories, Products, Sellers, Users, and Orders.
  - **Seller Dashboard**: Specialized views for inventory management, product addition/updates/deletion, and tracking seller-specific customer orders.
  - **Customer Profile**: User dashboard to update profile details, upload avatar, and view saved addresses.
- **Product Catalog & Search**: Dynamic display of products, structured filtering by categories, and interactive search capability queryable by keywords.
- **Database Seeding**: An integrated seed script to populate the database with realistic demo products, categories, and stock details.
- **Shopping Cart System**: Complete shopping cart flow using Redux state with backend database synchronization. Customers can add items, update quantities, calculate subtotals, and persist items across sessions.
- **Address Management**: Full CRUD operations for shipping and delivery addresses stored per customer profile.
- **Multi-Step Checkout & Orders**: Streamlined checkout pipeline saving order records to MongoDB upon verification, complete with stock subtraction rules and order status updates.
- **Integrated Payments Backend**: Complete backend integrations for payment processors, supporting Stripe Payment Intents and Razorpay order receipts.
- **Upgraded About & Contact Pages**: Custom styling featuring Google Fonts (Montserrat), responsive layout grids, and interactive contact forms. Contact form submissions save inquiries to MongoDB and dispatch immediate Nodemailer email alerts to the administrator.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18 (Vite-powered)
- **State Management**: Redux Toolkit & React-Redux
- **Routing**: React Router DOM v7
- **Styling**: Tailwind CSS v4 + Montserrat Google Typography
- **Animations**: Framer Motion
- **HTTP Client**: Axios (configured with token interceptors)
- **Component UI**: Material-UI (MUI) & React Icons

### Backend
- **Runtime Environment**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (using Mongoose ODM)
- **Cloud Media Management**: Cloudinary API
- **File Upload Middleware**: Multer
- **Security**: JSON Web Tokens (JWT) & Bcryptjs password hashing
- **Automated Notifications**: Nodemailer
- **API Documentation**: Swagger UI Express & Swagger JSDoc

---

## 📁 Folder Structure

```
E-Mart/
├── Ecom-Frontend/              # Client-Side React Application
│   ├── public/                 # Static assets (icons, images)
│   ├── src/
│   │   ├── api/
│   │   │   └── api.js          # Axios client with interceptors
│   │   ├── assets/             # Brand logos & web images
│   │   ├── components/
│   │   │   ├── about/          # HeroSection, MissionVision, TeamSection, Testimonials, FAQ, Timeline
│   │   │   ├── admin/          # AdminLayout, Categories, Dashboard, Order, Products, Sellers, Users
│   │   │   ├── auth/           # Login & Registration components
│   │   │   ├── cart/           # Cart, CartEmpty, ItemContent components
│   │   │   ├── checkout/       # Checkout, PaymentForm, PaymentMethod, StripePayment, PaymentConfirmation
│   │   │   ├── contact/        # ContactForm, ContactInfo, MapSection
│   │   │   ├── helper/         # Reusable tables and columns
│   │   │   ├── home/           # Banner, CategorySection, Home
│   │   │   ├── products/       # ProductCard, ProductDetails, ProductSection, Products
│   │   │   ├── shared/         # Navbar, Footer, InputField, Loader, ErrorPage, Spinners
│   │   │   ├── BackDrop.jsx
│   │   │   ├── PrivateRoute.jsx
│   │   │   ├── Profile.jsx     # User profile page
│   │   │   └── UserMenu.jsx
│   │   ├── hooks/              # Custom React hooks
│   │   ├── pages/
│   │   │   ├── About.jsx       # Custom animated About page
│   │   │   └── Contact.jsx     # Upgraded Contact page
│   │   ├── store/              # Redux Toolkit actions, reducers, and store config
│   │   ├── utils/              # Client-side utility functions (formatPrice)
│   │   ├── App.css
│   │   ├── App.jsx             # Client router & page structures
│   │   └── main.jsx            # Application bootstrap
│   ├── package.json
│   └── vite.config.js
│
└── ecom-node/                  # RESTful API Backend Application
    ├── src/
    │   ├── config/             # MongoDB connect, database init, & Swagger configs
    │   ├── controllers/        # Controllers (Auth, Product, Category, Cart, Order, Address, Contact, Analytics)
    │   ├── middleware/         # Security and global error handling middlewares
    │   ├── models/             # Mongoose Schemas (User, Product, Category, Cart, Order, Address, Contact)
    │   ├── routes/             # Express Router endpoint definitions
    │   ├── seeds/              # Database seeder scripts for products
    │   ├── utils/              # Cloudinary, Multer, Nodemailer, & Pagination helper utilities
    │   └── index.js            # Express server entry point
    ├── .env                    # System configuration variables
    └── package.json
```

---

## 🚀 Installation Guide

Follow these steps to configure and run the application locally.

### 1. Clone the Repository
```bash
git clone https://github.com/Rituraj2018/E-Mart.git
cd E-Mart
```

### 2. Set Up Backend Server
```bash
cd ecom-node
npm install
```
Configure your environment variables in `.env` (refer to the [Environment Variables](#-environment-variables) section below).

#### Seed the Database
To populate your MongoDB database with realistic demo products, categories, and stock details:
```bash
npm run seed
```

#### Start Backend in Development Mode
```bash
npm run dev
```

### 3. Set Up Frontend Client
Open a new terminal window or tab:
```bash
cd Ecom-Frontend
npm install
```
Configure your client-side environment variables in `.env` (refer to the [Environment Variables](#-environment-variables) section below).

#### Start Frontend Client
```bash
npm run dev
```
Open **`http://localhost:5173`** in your browser to interact with the application.

---

## ⚙️ Environment Variables

### Backend Config (`ecom-node/.env`)
Create a `.env` file in the `ecom-node/` directory and configure the variables:
```env
PORT=8080
MONGO_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_jwt_secret_key_here
FRONTEND_URL=http://localhost:5173

# Cloudinary Config
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Nodemailer SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_gmail_app_password

# Payment Gateways Keys
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

### Frontend Config (`Ecom-Frontend/.env`)
Create a `.env` file in the `Ecom-Frontend/` directory and configure the variables:
```env
VITE_BACK_END_URL=http://localhost:8080
VITE_FRONTEND_URL=http://localhost:5173
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

---

## 📡 API Endpoints

| Category | Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- | :--- |
| **Auth** | POST | `/api/auth/signup` | Register a new user or seller | Public |
| | POST | `/api/auth/signin` | Authenticate user & get session JWT | Public |
| | POST | `/api/auth/signout` | Clear current login session | Public |
| | GET | `/api/auth/username` | Fetch active user username | Private |
| | GET | `/api/auth/user` | Get full details of logged-in user | Private |
| | PUT | `/api/auth/profile-picture` | Upload profile picture to Cloudinary | Private |
| | GET | `/api/auth/sellers` | Get all registered sellers | Admin |
| | GET | `/api/auth/users` | Get all registered customers | Admin |
| **Products** | GET | `/api/public/products` | Fetch all public products (paginated) | Public |
| | GET | `/api/public/categories/:categoryId/products` | Fetch products inside a category | Public |
| | GET | `/api/public/products/keyword/:Keyword` | Query products matching a keyword | Public |
| | GET | `/api/admin/products` | Get all products for administrator | Admin/Seller |
| | POST | `/api/admin/categories/:categoryId/product` | Add a new product to database | Admin/Seller |
| | PUT | `/api/admin/products/:productId` | Update product text details | Admin/Seller |
| | PUT | `/api/admin/products/:productId/image` | Update product thumbnail image | Admin/Seller |
| | DELETE | `/api/admin/products/:productId` | Delete a product from inventory | Admin/Seller |
| | GET | `/api/seller/products` | Fetch products owned by seller | Seller/Admin |
| | POST | `/api/seller/categories/:categoryId/product` | Add a product via seller portal | Seller/Admin |
| | PUT | `/api/seller/products/:productId` | Update product via seller portal | Seller/Admin |
| | PUT | `/api/seller/products/:productId/image` | Update product image via seller portal | Seller/Admin |
| | DELETE | `/api/seller/products/:productId` | Delete product via seller portal | Seller/Admin |
| **Categories**| GET | `/api/public/categories` | Get list of all categories | Public |
| | POST | `/api/admin/categories` | Create a new category | Admin/Seller |
| | PUT | `/api/admin/categories/:categoryId` | Update category label | Admin/Seller |
| | DELETE | `/api/admin/categories/:categoryId` | Remove category | Admin |
| **Cart** | POST | `/api/cart/create` | Batch create or sync local cart with DB | Private |
| | POST | `/api/carts/products/:productId/quantity/:quantity` | Add specific product to cart | Private |
| | GET | `/api/carts` | Retrieve all active carts in the system | Admin |
| | GET | `/api/carts/users/cart` | Fetch cart details for logged-in user | Private |
| | PUT | `/api/cart/products/:productId/quantity/:operation` | Increment/decrement item quantity | Private |
| | DELETE | `/api/carts/:cartId/product/:productId` | Remove product from user cart | Private |
| **Addresses** | POST | `/api/addresses` | Save new delivery address | Private |
| | GET | `/api/addresses` | Fetch all addresses in system | Private |
| | GET | `/api/addresses/:addressId` | Fetch specific address by ID | Private |
| | GET | `/api/user/addresses` | Fetch addresses for logged-in user | Private |
| | PUT | `/api/addresses/:addressId` | Update details of a saved address | Private |
| | DELETE | `/api/addresses/:addressId` | Remove saved address | Private |
| **Orders** | POST | `/api/order/users/payments/online` | Place order (mock/default verification) | Private |
| | POST | `/api/order/users/payments/:paymentMethod` | Place order with specific payment method | Private |
| | POST | `/api/order/stripe-client-secret` | Generate client secret for Stripe Checkout | Private |
| | POST | `/api/order/razorpay-order` | Initialize checkout receipt via Razorpay | Private |
| | GET | `/api/admin/orders` | Fetch all system orders | Admin |
| | GET | `/api/seller/orders` | Fetch orders containing seller's items | Seller/Admin |
| | PUT | `/api/admin/orders/:orderId/status` | Update order shipment status | Admin |
| | PUT | `/api/seller/orders/:orderId/status` | Update order shipment status | Seller/Admin |
| **Analytics** | GET | `/api/admin/app/analytics` | Fetch metrics totals for Admin Dashboard | Admin |
| **Contact** | POST | `/api/contact` | Submit contact form (save to DB & email) | Public |

---

## 📸 Screenshots

- **Customer Shop Front**: `[Display of products grid with sorting, search inputs, and navigation header]`
- **Interactive About Page**: `[Premium visual layout showing Timeline milestones, Company Mission, and Team sections with scroll animations]`
- **Upgraded Contact Us Form**: `[Responsive glassmorphic UI card containing fields for Name, Email, Subject, Message, and embedded Google Maps frame]`
- **Real-Time Admin Dashboard**: `[SVG charts tracking monthly revenues, category percentages progress bars, and high-level card statistics]`

---

## 🚦 Current Project Status

The MERN architecture core services are fully functional. Users can securely register/login, adjust roles, browse and search seeded inventory catalog items, manage shopping carts synced with the database, store addresses, proceed through checkout pipelines, trigger payment order initializations, and submit contact notifications that auto-email the admin. The administrator console successfully loads aggregates and charts of current database properties.

---

## 🗺️ Future Roadmap

- [ ] Complete frontend UI checkout pages to process payments using Stripe Elements and Razorpay Web Checkout.
- [ ] Connect interactive customer product rating controls and star indicators on product details layouts.
- [ ] Add promo code deductions, flash sales, and active discount validation gates.
- [ ] Implement Redis-backed search caching for faster product searches.
- [ ] Establish automated GitHub workflows for testing and deployment checks.

---

## 🤝 Contributing

Contributions make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 📞 Developer Information

- **Name**: Rituraj Singh
- **Email**: [singhrituraj8077@gmail.com](mailto:singhrituraj8077@gmail.com)

- **Location**: Khandari, Agra, Uttar Pradesh, India
- **GitHub**: [https://github.com/Rituraj2018](https://github.com/Rituraj2018)

---

## 💖 Support

If you find this project helpful or inspiring, please consider giving it a ⭐ on GitHub!

<div align="center">
  Developed with ❤️ by Rituraj Singh.
</div>
