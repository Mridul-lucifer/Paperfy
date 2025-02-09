const express = require('express');

const app = express();

app.use(express.json());
app.get('/greet',(req,res)=>{
    res.status(200).json({
        msg : "Hello From Backend"
    })
})

app.listen(5000,()=>{
    console.log("Server is running");
})