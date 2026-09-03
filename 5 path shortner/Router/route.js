const express=require('express'); 
const router=express.Router(); 
const {GenerateShortUrl,RedirecUrl}=require('../Controller/url'); 


router.post('/create',GenerateShortUrl);
router.get('/:id',RedirecUrl) 
module.exports=router; 