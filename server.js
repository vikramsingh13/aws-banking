const express = require('express');
const dotenv = require('dotenv').config;
const cors = require('cors');
const path = require('path');
const {errorHandler} = require('./middlewares/errorMiddleware');
const {connectDB} = require('./config/db');

const port = process.env.PORT || 3001;

//connecting to mysql db server
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.use('/accounts', require('./routes/accountRoutes'));


//custom errorhandler
app.use(errorHandler);


app.listen(port, (err) => {
    if(err){
        console.log(`Express error: ${err}`);
    } else {
        console.log(`Express server listening on port: ${port}`);
    }
});