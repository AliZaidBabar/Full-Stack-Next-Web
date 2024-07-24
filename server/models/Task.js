const db = require('../config/db');

const Task = {
  getAll: (callback) => {
    db.query('SELECT * FROM tasks', callback);
  },
  create: (task, callback) => {
    db.query('INSERT INTO tasks (title, description) VALUES (?, ?)', [task.title, task.description], callback);
  }
};

module.exports = Task;
