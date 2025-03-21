E-Commerce Website

📌 Overview

This is a full-stack e-commerce application built using the MERN stack (MongoDB, Express, React, Node.js) with Material-UI for styling. The application supports user authentication, product listing, cart management, and online payments using Stripe.

🚀 Features

User authentication (login, register, logout)

Product listing and details

Shopping cart functionality

Order management

Payment integration with Stripe

Admin dashboard to manage products and orders

Responsive design using Material-UI

🛠️ Tech Stack

Frontend: React, Material-UI, Redux

Backend: Node.js, Express.js

Database: MongoDB

Authentication: JWT (JSON Web Token)

Payment Gateway: Stripe

Version Control: Git & GitHub

📂 Folder Structure

📦 e-commerce-project
├── 📁 client         # React frontend
│   ├── 📁 src
│   │   ├── 📁 components
│   │   ├── 📁 pages
│   │   ├── 📁 redux
│   │   └── App.js
│   └── package.json
├── 📁 server         # Node.js backend
│   ├── 📁 controllers
│   ├── 📁 models
│   ├── 📁 routes
│   ├── server.js
│   └── package.json
├── 📁 config         # Environment variables and configurations
└── README.md

🛠️ Installation & Setup

Clone the repository:

git clone https://github.com/your-username/ecommerce-project.git

Navigate to the project directory:

cd ecommerce-project

Install dependencies for both frontend and backend:

cd client && npm install
cd ../server && npm install

Set up environment variables in a .env file:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key

Start the development server:

cd client && npm statps://ecommerce-project-ten-tawny.vercel.app/d client && npm start
cd ../server && npm run dev
