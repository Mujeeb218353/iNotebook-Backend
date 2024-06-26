const express = require('express');
const dotenv = require('dotenv');
dotenv.config({
    path: "./.env"
});
const app = express();
const port = process.env.PORT;
const connectToMongo = require('./db');
connectToMongo();

//middleware
app.use(express.json());
const cors = require('cors');
app.use(cors());

//Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));
app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>');
});

app.listen(port, ()=>{
    console.log(`iNotebook backend app listening at http://localhost:${port}`);
});

module.exports = app;