const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(cors(

    {origin: "http://localhost:3000", 
    credentials: true}

));
app.use(express.json());

// Connect DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"));

// Routes
app.use("/api/auth", require("./routes/auth"));

app.listen(5055, () => console.log("Server running on port 5055"));