const mongoose = require('mongoose')
require('dotenv').config()

async function connectDB(){
    mongoose.connect(process.env.MONGO_URI)
    console.log('database connected');
}

module.exports = connectDB