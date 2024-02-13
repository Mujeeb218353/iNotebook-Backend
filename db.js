const mongoose = require('mongoose');
const uri  = 'mongodb://127.0.0.1:27017/testinotebook';

const connectToMongo = () =>{
    mongoose.connect(uri).then(
        () => {
            console.log('Connected to MongoDB');
        }
    ).catch(err => console.log(err));
    const userSchema = new mongoose.Schema({
        name: String,
        email: String,
        password: String
    });
}
module.exports = connectToMongo;