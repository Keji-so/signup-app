const mongoose = require('mongoose') //import mongoose(a mongodb library for making tables/schema)

const signUpTemplate = new mongoose.Schema({ //create table with mongoose
        fullName: {
            type: String,
            required: true
        },
        userName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        },
})


module.exports = mongoose.model('myTable', signUpTemplate) //export table created with mongoose

//"myTable will be used in the link when creating the .env file, it will replace "myFirstDatabase" "
