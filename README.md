# 🛒 Product Management System

A full-stack product management application with secure authentication, built using **Node.js**, **Express**, **MongoDB**, and **Mongoose**.

---

## ✅ Project Status

> **Backend Development: Completed**

- ✅ Schema design with validation (`Product`, `User`)
- ✅ Authentication implemented (Signup / Login with JWT)
- ✅ Auth middleware to protect CRUD routes
- ✅ Folder structure organized (MVC pattern)
- ✅ Routes created for product and user management

---

## 📁 Folder Structure (Backend)

```

server/
├── controllers/
│   ├── authController.js
│   └── productController.js
├── models/
│   ├── Product.js
│   └── User.js
├── routes/
│   ├── authRoutes.js
│   └── productRoutes.js
├── middleware/
│   └── authMiddleware.js
├── config/
│   └── db.js
├── .env
├── .gitignore
├── server.js
└── package.json

````

---

## 🔐 Authentication

- JWT-based signup and login
- Passwords hashed with **bcrypt**
- Protected product routes via auth middleware

---

## 🧪 Current API Endpoints

| Method | Endpoint                         | Description                    |
|--------|----------------------------------|--------------------------------|
| POST   | `/api/auth/signup`               | Register a new user           |
| POST   | `/api/auth/login`                | Login and receive token       |
| POST   | `/api/products`                  | Add a new product *(auth)*    |
| GET    | `/api/products`                  | Get all products              |
| PUT    | `/api/products/:id`              | Update a product *(auth)*     |
| DELETE | `/api/products/:id`              | Delete a product *(auth)*     |
| GET    | `/api/products/featured`         | Fetch featured products       |
| GET    | `/api/products/price/:max`       | Fetch products by price limit |
| GET    | `/api/products/rating/:min`      | Fetch products by rating      |

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT, bcryptjs
- **Dev Tools:** Postman, VS Code

---

## 🚧 Upcoming (Frontend)

- Product list UI
- Add product form with validations
- Signup/Login pages
- Frontend-backend integration

---

## 📦 Setup (Backend)

```bash
cd server
npm install
npm run dev
````

Create a `.env` file with:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

## 📌 Note

This project is part of a full-stack assignment with 3 main tasks. Backend is fully complete and frontend work is in progress.

---

## 📚 License

This project is open-source and free to use.

```

---

Let me know if you want this README split into **backend/frontend** sections later as you progress. I can also help you generate a second version once you deploy.
```
