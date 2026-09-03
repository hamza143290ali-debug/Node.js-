const mongoose=require('mongoose'); 

async function connectDB(){
    try{
        await mongoose.connect("mongodb://localhost:27017/ShortUrl"); 
        console.log("Database connected successfully"); 
    }catch(err){
        console.log("Error in connecting to database",err); 
    }
}
module.exports=connectDB; 