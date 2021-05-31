require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

const express = require('express');
const mongoose = require('mongoose');
const path =require('path');
const cors = require('cors');

const app = express();
console.log(process.env.MONGODB_HOST_NAME);
// const MONGODB_URI = `mongodb://${process.env.MONGODB_HOST_NAME}:${process.env.MONGODB_PORT}/${process.env.MONGODB_NAME}`;
const MONGODB_URI = `mongodb://localhost:27017/myapp1db`;

const PORT = Number(process.env.PORT) || 5000;

const indexRoutes = require('./routes/index.routes');

// app.use('/public', express.static(path.join(__dirname,'public')))
app.use(express.json({ limit: "50mb" })); //Used to parse JSON bodies
app.use(express.urlencoded({ limit: "50mb" })); //Parse URL-encoded bodies

app.use(cors());
app.use(indexRoutes);


//connect to database
mongoose.connect(MONGODB_URI, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
.then(result => {
    mongoose.set('debug', true);    //all mongoose queries to the console
    app.listen(PORT, () => {
        console.log('SERVER RUNNING ON PORT', PORT);
        console.log('env',process.env.NODE_ENV);
    });
})
.catch(err => {
    console.log(err);
});