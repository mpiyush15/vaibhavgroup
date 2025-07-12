// Authentication routes
const express = require('express');
const router = express.Router();


// Test route
router.get('/test', (req, res) => {
  res.json({ message: 'Auth route works!' });
});

//hello route
router.get('/hello', (req, res) => {
  res.json({ message: 'Hello from the auth route!' });
});


module.exports = router;