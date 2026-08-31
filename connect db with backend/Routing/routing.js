const express=require('express'); 
const seStudent=require('../Models/UNI_MODEL/uniModel')
const router=express.Router(); 


//create document in db
router.post('/add',async(req,res)=>{
try{
    const sData=await seStudent.create(req.body); 
    res.status(201).json(sData); 
    

}catch(err){
    console.log("Something wrong in opeation"); 
    res.status(500).json({"message":"server side error!"}); 
}
})
//read document from db
router.get('/read/:id',async(req,res)=>{
try{
    const {id}=req.params; 
    const sData=await seStudent.findById(id); 
    res.status(200).json(sData); 
    

}catch(err){
    console.log("Something wrong in opeation"); 
    res.status(500).json({"message":"server side error!"}); 
}
})

//delete a specific document in db

router.delete('/delete/:id',async(req,res)=>{
try{
    const {id}=req.params; 
    const sData=await seStudent.findByIdAndDelete(id); 
    res.status(200).send('deleted!'); 
    

}catch(err){
    console.log("Something wrong in opeation"); 
    res.status(500).json({"message":"server side error!"}); 
}
})

router.put('/update/:id',async(req,res)=>{
try{
    const {id}=req.params; 
    const sData=await seStudent.findOneAndUpdate({_id:id},req.body,{new:true}); 
    res.json(sData); 
    

}catch(err){
    console.log("Something wrong in opeation"); 
    res.status(500).json({"message":"server side error!"}); 
}
})




module.exports=router; 