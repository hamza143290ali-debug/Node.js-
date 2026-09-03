const express =require('express'); 
const app=express(); 

//apne express ko batana be padta hain ke maye konsa template engine use kar raha hoon.
app.set('view engine', 'ejs'); 

app.get('/',(req,res)=>{ 
    // oo jo ejs file hain jo ham ne bana ya hain osko render karo 
    res.render('home.ejs',{
        name:'Craptic mind',  //ye aek variable hain 
        detail:{   //while this is object
            age:21, 
            city:'lahore', 
            education:'software engineer',
            hobbies:['coding', 'gaming', 'reading']
        }
     })
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000"); 
})