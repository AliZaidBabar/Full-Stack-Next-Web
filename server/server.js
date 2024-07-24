const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const taskRoutes = require('./router/task');

const app = express();

// Use CORS
app.use(cors());

app.use(bodyParser.json());
app.use('/api/tasks', taskRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
