const express = require('express');
const dotenv = require('dotenv');
dotenv.config({
    path: "./.env"
});
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const connectToMongo = require('./db');

// Connect to MongoDB
connectToMongo()
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1); // Exit the process if MongoDB connection fails
    });

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

// Root route
app.get('/', (req, res) => {
    res.send('<h1>Hello from iNotebook Backend</h1>');
});

// Error handling middleware
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
app.listen(port, () => {
    console.log(`iNotebook backend app listening at http://localhost:${port}`);
});

module.exports = app;
