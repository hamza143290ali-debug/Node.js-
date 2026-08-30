const path=require('path'); 

//__filename se hame pora absolute path mel jata hain while it's last part is index.js
console.log(path.basename(__filename)); 
console.log(path.extname(__filename));

console.log(path.join(__dirname,"User","students")); 

console.log(path.resolve("uni","department","cs","software","students"))
console.log(path.parse(__filename))