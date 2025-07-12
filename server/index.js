const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// const allowedOrigins = [
//   "http://localhost:3000", // for local development
//   "https://vaibhavgroup.vercel.app", // replace this with actual deployed frontend URL later actual domain

// ];

// app.use(cors({
//   origin: allowedOrigins,
//   credentials: true
// }));

// CORS configuration
const allowedOrigins = [
  "http://localhost:3000",
  "https://vaibhavgroup.vercel.app", // your deployed frontend
  "https://vaibhavgroup-production.up.railway.app" // add your backend domain for testing
];

app.use(cors({
  origin: function(origin, callback) {
    // allow requests with no origin (like mobile apps, curl, etc.)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

app.use(express.json());

// Connect DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"));

// Routes
app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));