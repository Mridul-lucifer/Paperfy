const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.get('/greet',(req,res)=>{
    res.status(200).json({
        msg : "Hello From Backend"
    })
})

app.listen(5000,()=>{
    console.log("Server is running");
})