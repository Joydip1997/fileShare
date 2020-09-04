const mongoose = require('mongoose');
require('dotenv').config();

function connectDB() {
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: true
    });
    const connection = mongoose.connection;

    connection.once('open', () => {
        console.log("DB Connected");
    }).catch(err => {
        console.log("Connection Failed");
    })


}

module.exports = connectDB;