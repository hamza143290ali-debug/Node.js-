const express=require('express'); 
const app=express(); 
const cookieParser = require('cookie-parser')
//middleware
app.use(cookieParser('mental314'))

app.get('/',(req,res)=>{

})

app.get('/set-cookie',(req,res)=>{
    //so the first 2 parameters are compulsory while the thrid one is object
    res.cookie('username','Hamza ali',
        {
        maxAge:1000*60, //15 minutes
        httpOnly:true, 
        signed:true
        }
    )
    res.send('Cookie has beensset'); 
})

app.get('/read-cookie', (req,res)=>{
    const username=req.signedCookies.username; 
    if(!username){
        res.send("no cookie found"); 
    }
    res.send(`cookie found:${username}`); 
})

app.get('/delete-cookie',(req,res)=>{
    res.clearCookie('username'); 
    res.send('cookie has been deleted'); 
})






app.listen(8000,()=>{
    console.log("server is running at port 8000!"); 
})