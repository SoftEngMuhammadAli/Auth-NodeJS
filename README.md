```markdown
# Auth-NodeJS 🔐

A simple and secure authentication API built with **Node.js**, **Express**, **MongoDB**, and **JWT**. This project includes user signup, login, protected routes, and middleware for token verification.

---

## 🚀 Features

- ✅ User Registration (Signup)
- ✅ User Login with JWT Token Generation
- ✅ Secure Password Hashing using Bcrypt
- ✅ Protected Route (`/profile`) to get user details
- ✅ Token-based Authentication Middleware
- ✅ MongoDB Integration with Mongoose
- ✅ Environment-based Configuration using `.env`

---

## 🧰 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- bcryptjs
- jsonwebtoken
- dotenv

---

## 📁 Project Structure
```

Auth-NodeJS/
├── controllers/
│ └── auth_controller.js
├── middlewares/
│ └── auth_middleware.js
├── models/
│ └── auth_model.js
├── routes/
│ └── auth_routes.js
├── config/
│ └── db.js
├── .env
├── server.js
└── package.json

````

---

## 🔧 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/Auth-NodeJS.git
cd Auth-NodeJS
````

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/authdb
JWT_SECRET=yourSuperSecretKey
```

### 4. Start MongoDB

Make sure MongoDB is running locally or update `MONGO_URI` for Atlas.

### 5. Run the server

```bash
# Development mode with auto-restart
npx nodemon server.js

# Or standard mode
node server.js
```

---

## 🧪 API Endpoints

### 🔹 POST `/api/auth/signup`

Register a new user.

**Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```

---

### 🔹 POST `/api/auth/login`

Login and receive a JWT token.

**Body:**

```json
{
  "email": "john@example.com",
  "password": "123456"
}
```

**Response:**

```json
{
  "token": "jwt-token-here",
  "user": {
    "id": "mongo_id",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

---

### 🔹 GET `/api/auth/profile`

Protected route. Requires token in header.

**Header:**

```http
Authorization: Bearer <token>
```

**Response:**

```json
{
  "message": "You are logged in",
  "user": {
    "id": "mongo_id",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

---

## 🔐 Security Notes

- Passwords are hashed using **bcrypt** before saving to the database.
- JWT tokens expire in **1 hour** (`expiresIn: "1h"`).
- Protected routes use middleware to verify tokens.

---

## 📄 License

MIT License

---

## 👨‍💻 Author

Made with ❤️ by [Muhammad Ali](https://github.com/softengmuhammadali)

---
