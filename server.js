const express = require("express");

const app = express();

app.listen(8080,()=> {
    console.log("Port number is running on port no. 8080");
});

app.get("/",(req, res)=>{
    console.log("request received on /");
    res.send("Hi Ayushhhh World Airtribe !");
});