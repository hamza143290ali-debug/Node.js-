const {Schema, model}=require('mongoose'); 

const UniSchema=new Schema({
name:{
    type:String, 
    required:true, 
}, 

age:{
    type:Number, 
    required:true, 
},

cgpa:{
    type:Number,
    required:true 
},

semester:{
    type:Number, 
    required:true
}





}); 

const seStudent=model('seStudent',UniSchema); 

module.exports=seStudent; 