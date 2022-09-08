const express = require("express");



const app = express();
const PORT = 8080;

app.get("/",(req,res)=>{
    var s = {"name": 1}
    res.send(s);
});


app.listen(PORT,()=>{
    console.log("SERVER LISTENING");
})