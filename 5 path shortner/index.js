const express=require('express'); 
const app=express(); 
const router=require('./Router/route'); 
const connectDB=require('./DbConnection'); 
const URL=require('./Model/UrlSchema'); 
const path=require('path'); 
const staticRouter=require('./Router/staticRouter')
const port=8002; 

//database connection 
connectDB(); 

app.set('view engine','ejs'); 
app.set('views',path.resolve('./views')); 
//middle ware
 app.use(express.json()); 
 //for form data
 app.use(express.urlencoded({extended:false})) 

 app.use('/',staticRouter); 

 app.use('/url',router); 
 //for getting all url 
 app.get("/test", async (req, res) => {

    const allUrls = await URL.find({});

    //batawo konsa view render karna hain ham render function ko 
    //batate hain
    return res.render('home',{
        urls:allUrls
    })
});

app.listen(port,()=>{
    console.log("Server is running on port",port); 
})





