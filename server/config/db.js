const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {   
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('connected to db succesfully');
    }catch(err) {
        console.log('DB connection error: ',err.message);
        process.exit(1);
    }
}

module.exports = connectDB;