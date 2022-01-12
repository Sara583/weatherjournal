//jshint esversion:6
// Setup empty JS array to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
const bodyParser =require('body-parser');

// Start up an instance of app
const app=express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors =require('cors');
//app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = process.env.Port || 3000;
app.listen(port,()=>console.log(`server is running on port ${port} `));
// GET route
app.get("/all",(req,res)=>{
console.log('received');
res.send(projectData);
});
//post route

app.post("/post",(req,res)=>{
projectData=req.body;
console.log(projectData);
res.send(projectData);




});
