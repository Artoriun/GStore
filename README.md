# GStore - Full-Stack E-Commerce Platform

A complete e-commerce application built with the **MERN stack** (MongoDB, Express, React, Node.js) that provides a seamless shopping experience with modern web technologies and best practices.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Installation & Setup](#installation--setup)
- [Running the Application](#running-the-application)
- [Key Packages & Their Purpose](#key-packages--their-purpose)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Project Overview

**GStore** is a modern e-commerce platform that enables users to:
- Browse and purchase products
- Manage shopping carts
- Checkout securely with payment processing
- Track orders
- Leave product reviews and ratings
- Manage user accounts and profiles

Administrators can:
- Create, update, and delete products
- Manage inventory and stock
- Process and track orders
- Manage user accounts
- View product reviews

## ✨ Features

### Customer Features
- **User Authentication** - Secure registration and login with JWT tokens
- **Product Browsing** - Search, filter, and sort products by category and price
- **Shopping Cart** - Add/remove products, manage quantities
- **Checkout Process** - Multi-step checkout with address and payment information
- **Payment Processing** - Stripe integration for secure payments
- **Order Tracking** - View order history and status
- **Product Reviews** - Leave ratings and comments on products
- **User Profile** - Update account information and avatar
- **Wishlist** - Save favorite products

### Admin Features
- **Product Management** - Create, edit, delete products with images
- **Inventory Management** - Track and manage product stock
- **Order Management** - View, process, and update order status
- **User Management** - View and manage user accounts
- **Analytics Dashboard** - View sales trends and statistics
- **Review Management** - Moderate and manage product reviews

## 🛠️ Tech Stack

### Backend
- **Node.js & Express** - Server runtime and web framework
- **MongoDB** - NoSQL database for data persistence
- **Mongoose** - ODM (Object Data Modeling) for MongoDB
- **JWT (jsonwebtoken)** - Token-based authentication
- **bcrypt** - Password hashing and security
- **Cloudinary** - Cloud-based image hosting and management
- **Stripe** - Payment processing
- **SendGrid** - Email notifications
- **Nodemailer** - Email functionality

### Frontend
- **React 18** - Modern UI library with hooks
- **Redux** - State management
- **React Router** - Client-side routing
- **Material-UI (MUI)** - Component library
- **MUI DataGrid** - Advanced table component
- **Axios** - HTTP client for API requests
- **React Alert** - User notifications
- **Stripe.js** - Frontend payment integration

### Development Tools
- **Create React App** - Frontend build tooling
- **Bun** - Fast JavaScript runtime (used for running the backend)
- **pnpm** - Fast package manager
- **ESLint** - Code linting
- **TypeScript** - Type safety

## 🏗️ Architecture

The application follows a three-tier architecture:

```
┌─────────────────────┐
│   React Frontend    │  (Port 3000)
│  (SPA with Redux)   │
└──────────┬──────────┘
           │ HTTP/REST API
           │
┌──────────▼──────────┐
│  Express Backend    │  (Port 4000)
│  (Node.js Server)   │
└──────────┬──────────┘
           │ MongoDB Driver
           │
┌──────────▼──────────┐
│     MongoDB         │  (NoSQL Database)
│   (Atlas Cloud)     │
└─────────────────────┘
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **pnpm** (package manager)
- **MongoDB** (local or Atlas cloud account)
- **Git**

Optional:
- **Cloudinary** account (for image hosting)
- **Stripe** account (for payments)
- **SendGrid** account (for emails)

## 📦 Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd GStore
```

### 2. Install Dependencies

Install both root and frontend dependencies:
```bash
npm install
```

This will automatically install backend dependencies and run `pnpm install` in the frontend folder.

### 3. Create Environment Variables

Create a `.env` file in the root directory:

```env
# Database
DB_URI=mongodb://localhost:27017
DB_NAME=gstore

# JWT
JWT_SECRET=your_secure_secret_key_here
JWT_EXPIRES_IN=7d

# Cloudinary (Image Hosting)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# SendGrid (Email Service)
SENDGRID_API_KEY=your_sendgrid_key
SMTP_FROM=your_email@example.com

# Stripe (Payments)
STRIPE_API_KEY=your_stripe_key

# Server
PORT=4000
NODE_ENV=development
```

### 4. Create a Test Admin Account

```bash
node backend/scripts/createAdminUser.js
```

Default credentials:
- Email: `admin@test.com`
- Password: `Admin@123456`

## ▶️ Running the Application

### Development Mode

**Start Backend Only:**
```bash
npm run dev
```

**Start Frontend Only:**
```bash
cd frontend
npm start
```

The applications will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:4000

## 📚 Key Packages & Their Purpose

### Frontend Packages

#### State Management
- **redux** - Centralized state management library for managing global application state
- **react-redux** - Official React bindings for Redux to connect components to the store
- **redux-thunk** - Middleware for handling asynchronous actions in Redux

#### UI Components & Styling
- **@mui/material** - Material Design component library with pre-built React components
- **@mui/x-data-grid** - Advanced table component for displaying large datasets with sorting, filtering, and pagination
- **react-icons** - Icon library providing multiple icon sets (Font Awesome, Feather, etc.)
- **react-material-ui-carousel** - Carousel/slider component for product image galleries

#### HTTP & Data
- **axios** - Promise-based HTTP client for making API requests to the backend
- **react-router-dom** - Client-side routing library for navigation without page reloads

#### User Experience
- **react-alert** - Toast notification library for showing success/error messages
- **react-helmet** - Manage document head (meta tags, title) for SEO
- **country-state-city** - Database of countries, states, and cities for address forms

#### Payment & Analytics
- **@stripe/react-stripe-js** - React components for Stripe payment integration
- **chart.js & react-chartjs-2** - Data visualization library for charts and analytics on admin dashboard

### Backend Packages

#### Core Framework
- **express** - Minimal web framework for building REST APIs
- **mongoose** - ODM library that provides schema validation and data modeling for MongoDB

#### Authentication & Security
- **jsonwebtoken** - Create and verify JWT tokens for secure user authentication
- **bcrypt** - Hash passwords with salt for secure storage in the database
- **validator** - String validation and sanitization library

#### External Services Integration
- **cloudinary** - Cloud storage service for uploading and managing product/user images
- **stripe** - Payment processing service for handling credit card transactions
- **@sendgrid/mail** - Email service for sending transactional emails
- **nodemailer** - Alternative email sending library for password reset emails

#### Request Handling & Utilities
- **dotenv** - Load environment variables from .env file
- **body-parser** - Middleware to parse JSON request bodies
- **cookie-parser** - Middleware to parse cookies from requests
- **cors** - Enable Cross-Origin Resource Sharing between frontend and backend
- **express-fileupload** - Handle file uploads from forms

## 📁 Project Structure

```
GStore/
├── backend/
│   ├── modules/
│   │   ├── user/
│   │   │   ├── controllers/      # User logic (register, login, update profile)
│   │   │   ├── models/           # User schema definition
│   │   │   └── routes/           # User API endpoints
│   │   ├── product/
│   │   │   ├── controllers/      # Product logic (CRUD operations)
│   │   │   ├── models/           # Product schema
│   │   │   └── routes/           # Product endpoints
│   │   ├── order/
│   │   │   ├── controllers/      # Order processing logic
│   │   │   ├── models/           # Order schema
│   │   │   └── routes/           # Order endpoints
│   │   └── payment/
│   │       ├── controllers/      # Stripe payment integration
│   │       └── routes/           # Payment endpoints
│   ├── middlewares/
│   │   ├── auth.js              # JWT verification & role checking
│   │   ├── error.js             # Global error handler
│   │   └── catchAsyncError.js   # Async error wrapper
│   ├── helpers/
│   │   └── connectDB.js         # MongoDB connection setup
│   ├── utils/
│   │   ├── errorHandler.js      # Custom error class
│   │   ├── apiFeatures.js       # Search, filter, pagination logic
│   │   └── sendEmail.js         # Email sending utility
│   ├── scripts/
│   │   └── createAdminUser.js   # Script to create admin account
│   ├── server.js                 # Server entry point
│   ├── app.js                    # Express app configuration
│   └── initModules.js            # Module initialization
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── modules/
│   │   │   │   ├── auth/         # Login, Register, Password reset pages
│   │   │   │   ├── home/         # Homepage with featured products
│   │   │   │   ├── product/      # Product listing and details
│   │   │   │   ├── cart/         # Shopping cart management
│   │   │   │   ├── checkout/     # Checkout process pages
│   │   │   │   ├── order/        # Order tracking and history
│   │   │   │   ├── admin/        # Admin dashboard and management pages
│   │   │   │   └── footer/       # Footer component
│   │   │   ├── layout/
│   │   │   │   ├── header/       # Navigation header
│   │   │   │   ├── loader/       # Loading spinner
│   │   │   │   ├── error/        # 404 error page
│   │   │   │   └── MetaData.js   # SEO meta tags
│   │   │   ├── hoc/
│   │   │   │   └── AppWrap.js    # HOC wrapping pages with Header & Footer
│   │   │   └── route/
│   │   │       └── index.js      # Route definitions and setup
│   │   ├── redux/
│   │   │   ├── store.js          # Redux store configuration
│   │   │   ├── actions/          # Action creators for API calls
│   │   │   ├── reducers/         # Reducers for state updates
│   │   │   └── constants/        # Action type constants
│   │   ├── assets/
│   │   │   └── images/           # Static images and logos
│   │   ├── App.js                # Main App component
│   │   ├── index.css             # Global styles and CSS variables
│   │   └── index.js              # React entry point
│   └── package.json
│
├── .env                           # Environment variables (DO NOT commit)
├── package.json                   # Root package configuration
├── pnpm-lock.yaml                # Dependency lock file
└── README.md                      # This file
```

## ⚙️ Configuration

### Environment Variables

**Required Variables:**
- `DB_URI` - MongoDB connection string (e.g., `mongodb://localhost:27017`)
- `DB_NAME` - Database name
- `JWT_SECRET` - Secret key for JWT signing (use a strong random string)
- `CLOUDINARY_CLOUD_NAME` - From Cloudinary dashboard
- `CLOUDINARY_API_KEY` - From Cloudinary dashboard
- `CLOUDINARY_API_SECRET` - From Cloudinary dashboard

**Optional Variables:**
- `SENDGRID_API_KEY` - For email notifications
- `STRIPE_API_KEY` - For payment processing
- `PORT` - Server port (default: 4000)
- `NODE_ENV` - Environment (development/production)

### Database Setup

1. Create a MongoDB Atlas account at https://www.mongodb.com/cloud/atlas
2. Create a new cluster and database
3. Get your connection string and add to `.env`

### Payment Setup (Stripe)

1. Create a Stripe account at https://stripe.com
2. Get your API keys from the dashboard
3. Add `STRIPE_API_KEY` to `.env`

### Image Hosting (Cloudinary)

1. Sign up at https://cloudinary.com
2. Get your cloud name and API credentials from settings
3. Add credentials to `.env`