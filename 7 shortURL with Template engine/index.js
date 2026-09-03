const express=require('express'); 
const connectDB=require('./connectionDb'); 
const urlRouter=require('./Routes/url')
const staticRouter=require('./staticRoutes/url'); 
const app=express(); 

//middle ware for json data
app.use(express.json()); 
//for html forms
app.use(express.urlencoded({ extended: false }));

//call db
connectDB(); 
app.set('view engine', 'ejs'); 

//urlRouter
app.use('/url',urlRouter); 

//staticRouter
app.use('/',staticRouter); 






app.listen(8005,()=>{
    console.log("Server is running on port 8005"); 
})