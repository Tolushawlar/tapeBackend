const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

// Import configurations
const corsOptions = require('./config/corsConfig');
const connectDB = require('./config/db');

// Import routes
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const proxyRoutes = require('./routes/proxyRoutes');


// Import middleware
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', productRoutes);
app.use('/api', categoryRoutes);
app.use('/api', proxyRoutes);


// Error handling middleware
app.use(errorHandler);

// Connect to database
connectDB();

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));