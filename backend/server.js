const express = require('express')
const app = express()
const mongoose = require('mongoose') //import mongoose
const dotenv = require('dotenv') // import dotenv
dotenv.config() //initialize dotenv
const routeUrls = require('./routes/router') //import routes (all the routes in router.js file)
const cors = require('cors')


// (use rest client in test.http to test if backend is working)
mongoose.connect(process.env.DATABASE, () => console.log('database connected'))


app.use(express.json()) //body parser middleware- to be able to get info from .body 
app.use(cors())
app.use('/app', routeUrls) //initialise route as a middleware (/app is a path that will always show before the other paths inside the router.js e.g "/app/signup")
app.listen(4000, () => console.log('server is running'))