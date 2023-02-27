const jwt = require('jsonwebtoken');
const User = require('../models/user');

const requireAuth = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Authentication failed' });
    }
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decodedToken.userId);
        if (!user) {
            return res.status(401).json({ message: 'Authentication failed' });
        }
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Authentication failed' });
    }
};

module.exports = { requireAuth };
