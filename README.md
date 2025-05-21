# Backend Intern Assignment ✅

This repository contains the completed solution for the Backend Intern Assignment. The assignment was completed within the 24-hour deadline and includes all the required tasks:

---

## 🚀 Tech Stack

- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Frontend**: HTML, CSS, JavaScript
- **Authentication**: JWT-based auth system
- **Hosting**:
  - Frontend: Vercel / Netlify (link below)
  - Backend: Railway (link below)

---

## ✅ Task 1 (50 Points): Products API

A RESTful API built with **Express.js** and **MongoDB** for managing a product catalog.

### 📦 Product Schema

| Field        | Type    | Required | Notes                        |
|--------------|---------|----------|------------------------------|
| `productId`  | String  | ✅       | Unique identifier            |
| `name`       | String  | ✅       | Product name                 |
| `price`      | Number  | ✅       | Product price                |
| `featured`   | Boolean | ❌       | True for featured products   |
| `rating`     | Decimal | ❌       | Product rating               |
| `createdAt`  | Date    | ✅       | Date of creation             |
| `company`    | String  | ✅       | Company name                 |

### ✅ Endpoints Implemented

1. `POST /api/products` – Add a product
2. `GET /api/products` – Get all products
3. `PUT /api/products/:id` – Update a product
4. `DELETE /api/products/:id` – Delete a product
5. `GET /api/products/featured` – Get featured products
6. `GET /api/products/price?max=VALUE` – Products with price less than VALUE
7. `GET /api/products/rating?min=VALUE` – Products with rating greater than VALUE

### 🔒 Authentication

- Only **authenticated users** can perform CRUD operations.
- Implemented using **JWT tokens**.
- Routes are protected with auth middleware.

---

## ✅ Task 2 (25 Points): Frontend App

A minimal responsive UI built using **HTML/CSS/JavaScript** to interact with the backend API.

### 🧾 Features

- **Product Listing Page**: Lists all products with details
- **Add Product Form**: Validates required fields and input types
  - Name: Required
  - Price: Numeric only
  - Company: Required
- **Login and Signup Pages**: Allow users to register and log in
- **Authenticated API Interaction**: Tokens stored and sent with requests

---

## ✅ Task 3 (25 Points): Deployment

Both the frontend and backend are successfully hosted on free hosting platforms.

- 🔗 **Live Frontend URL**: [View Frontend App](https://product-management-system-lt4y.vercel.app/products)
- 🔗 **Live Backend URL**: [View API Server](https://product-management-system-jb0f.onrender.com)

---

## 📂 Submission

- 🗃 **GitHub Repo**: [View Code on GitHub](https://github.com/your-username/backend-intern-assignment)
- 🌐 **Live Frontend App**: https://product-management-system-lt4y.vercel.app/products
- 🖥 **Live API Server**: https://product-management-system-jb0f.onrender.com

---

## 🧑‍💻 Author

- **Name**: [Adam]
- **Email**: shaikadam252@gmail.com
- **LinkedIn**: (https://www.linkedin.com/in/shaik-adam-222328230/)

---

> ✅ This project fulfills all tasks and criteria outlined in the assignment instructions.
