const http=require('http'); 

const server =http.createServer((req,res)=>{

 //so Url ko parse karo using url class and then response maye os ke koch propeties send karo
    const myUrl=new URL(req.url,`http://${req.headers.host}`); 
    console.log(myUrl); 
    res.end(JSON.stringify({"port":myUrl.port,"host":myUrl.hostname, "params":myUrl.searchParams})); 
})

server.listen(8002,()=>{
    console.log("server running!"); 
})