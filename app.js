const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const { requireAuth } = require('./middlewares/auth');

const app = express();

const port = 4000;
app.listen(port, () => {
    console.log('Server started on port ' + port);
});
