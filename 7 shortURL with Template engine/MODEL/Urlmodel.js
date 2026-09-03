const {Schema, model}=require('mongoose'); 


//now define schema
const UrlSchema=new Schema({

    shortId:{
        type:String, 
        required:true, 
        unique:true
    },
    originalUrl:{
        type:String, 
        required:true

    }
})
//now create a model from this schema
const surl=model('surl',UrlSchema); 

//now import this model 
module.exports=surl; 