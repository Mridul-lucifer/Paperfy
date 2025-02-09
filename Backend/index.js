require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

const {SignUpFunction,LoginFunction} = require('./Functions/SignupLoginFile')
const {createPaperFunction} = require('./Functions/CreatePaperFile');
// const {verification} = require('./Middlewares/VerificationFile');

mongoose.connect(process.env.MongoUri).then(()=>{
    console.log("MongoDB Connected");
}).catch((err)=>{
    console.log(err);
})
 
app.use(express.json());
app.use(cors());

app.post('/signup',SignUpFunction)
app.post('/login',LoginFunction)
app.post('/CreatePaper',createPaperFunction)

app.listen(5000,()=>{  
    console.log("Server is running");  
})