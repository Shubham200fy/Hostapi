const mongoose = require('mongoose');


const connectDB = (uri) => {
    console.log('connection established')
    return mongoose.connect(uri)
    
}

module.exports = connectDB;