const mongoose=require('mongoose'); 

const connectDB=async()=>{
try{
    await mongoose.connect('mongodb://127.0.0.1:27017/userData')
}catch(err){
    console.log("Something wrong in DB:connection"); 
}
}

module.exports=connectDB; 