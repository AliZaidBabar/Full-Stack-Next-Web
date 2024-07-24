const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

router.get('/', (req, res) => {
  Task.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

router.post('/', (req, res) => {
  const newTask = req.body;
  Task.create(newTask, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(newTask);
  });
});

module.exports = router; // Make sure you are exporting the router correctly
