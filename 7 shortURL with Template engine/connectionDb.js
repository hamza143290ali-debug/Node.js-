const mongoose=require('mongoose'); 

async function connectDB(){
 try{
    await mongoose.connect('mongodb://127.0.0.1:27017/URLStore')
 }catch(err){
  console.log("Something wrong in conncection!"); 
 }
}

module.exports=connectDB; 