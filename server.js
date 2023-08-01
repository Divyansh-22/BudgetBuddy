const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDb = require('./config/connectDb')
const path = require('path')

//config dot env file
dotenv.config();

//database call
connectDb();

//rest object
app = express();


//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//routes
//user routes
app.use('/api/v1/users', require('./routes/userRoute'));
//transaction routes
app.use('/api/v1/transactions',require('./routes/transactionRoutes'));

//static files
app.use(express.static(path.join(__dirname,'./client/build')));

app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname,'./client/build/index.html'));
})

//port
const PORT = 8080 || process.env.PORT;

//listen server
app.listen(PORT,() =>{
    console.log(`Server is listenning on port ${PORT}`);
});