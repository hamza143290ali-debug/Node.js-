const mongoose=require('mongoose'); 

const dbConnection=async()=>{
    try{
 const conn= await mongoose.connect('mongodb://127.0.0.1:27017/UNI'); 
    }
    catch(err){
        console.log("Something wrong in connection!"); 
    }
}

module.exports=dbConnection; 