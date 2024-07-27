const express = require('express'); // npm install express

// import mongoose package - has functions required to perform operations in mongodb starting all the way connecting to the cluser to making changes in the data
const mongoose = require('mongoose'); // npm install mongoose

const app = express();

// middleware
app.use(express.json());

const port = 4000

const mongoUrl = ""

// Connect to MongoDB
mongoose.connect(mongoUrl, {});

// Event listeners for MongoDB connection
mongoose.connection.on('connected', () => {
    console.log("Connected to MongoDB successfully");
})

const userRoutes = require('./routes/userRoute')

app.use('/api', userRoutes)

// listen on port 8080 and start my server
app.listen(port, () => {
    console.log("My server has started on the port " + port)
})
