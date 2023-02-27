const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const { requireAuth } = require('./middlewares/auth');

const app = express();

// Connect to MongoDB
connectDB();

// Parse incoming requests as JSON
app.use(express.json());

// Handle user authentication routes
app.use('/api/auth', authRoutes);

// Example protected route
app.get('/api/protected', requireAuth, (req, res) => {
    res.send(`Welcome, ${req.user.username}!`);
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
});

// Handle errors
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
