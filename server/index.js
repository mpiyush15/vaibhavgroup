// ==============================
// 🔰 Import Dependencies
// ==============================
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");
require("dotenv").config();

// ==============================
// 🚀 Initialize Express App
// ==============================
const app = express();

// ==============================
// 🛡️ Middleware for Security
// ==============================
app.use(helmet()); // Sets secure HTTP headers

// ==============================
// 🌐 Configure CORS (Cross-Origin)
// ==============================
const allowedOrigins = [
  "http://localhost:3000",
  "https://vaibhavgroup.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("❌ Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// ==============================
// 📦 Built-in Middleware
// ==============================
app.use(express.json()); // Parse incoming JSON

// ==============================
// 🛠️ MongoDB Connection
// ==============================
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// ==============================
// 🧩 API Routes
// ==============================
app.use("/api/auth", require("./routes/auth")); // Auth routes

// ==============================
// 🚀 Start the Server
// ==============================
const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`🌐 Server running on port ${PORT}`);
});