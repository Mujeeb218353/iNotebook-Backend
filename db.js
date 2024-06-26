const mongoose = require('mongoose');
const uri  = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/inotebookApp';
const connectToMongo = async() =>{
    if (mongoose.connection.readyState === 1) {
        console.log('Already connected to MongoDB');
        return;
    }
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
    const userSchema = new mongoose.Schema({
        name: String,
        email: String,
        password: String
    });
}

module.exports = connectToMongo;
