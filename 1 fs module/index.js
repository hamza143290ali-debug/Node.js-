let fs=require('fs'); 

//file creation
// fs.writeFile("practise.txt","Hi this is me khan and i'm learning backend",(err)=>{
//     if(err){
//         console.log("something wrong!")
//     }else{
// console.log("File created succesfull")
//     }
// })

//insert new data to this file
// fs.appendFile("./practise.txt"," i'm added using append method",(err)=>{
//      if(err){
//         console.log("something wrong!"); 
//      }else{
//         console.log("data added to the file!"); 
//      }
// })

//read the data of a file
// fs.readFile("./practise.txt",'utf8',(err,data)=>{
//     if(err){
//         console.log("Something wrong"); 
//     }else if(data){
//       console.log(data); 
//     }
// })

//copy file
// fs.copyFile("practise.txt", "copyPractise.txt",(err)=>{
//     if(err){
//         console.log("something wrong"); 
//     }else{
//         console.log("file copied!"); 
//     }
// })

//delete a single File 
// fs.unlink("./copyPractise.txt",(err)=>{
//     if(err){
//         console.log("something wrong!"); 
//     }else{
//         console.log("file removed!"); 
//     }
// })

//make a directory/folder while an empty folder
// fs.writeFile("User/text.txt","new text added to the file inside a folder",(err)=>{
//    if(err){
//     console.log("Somthing wrong"); 
//    }else{
//     console.log("File  created!"); 
//    }
// })

//now created multiple folders inside a folder
// fs.mkdir("uni/software/students",{recursive:true},(err)=>{
//           if(err){
//             console.log("Something wrong!"); 
//           }else{
//             console.log("Folder creation done!")
//           }
// })

//now create index.html file inside students folder which is inside uni
// fs.writeFile("./uni/software/students/practise.txt","holla",(err)=>{
//        if(err){
//          console.log("something wrong")
//        } 
//        else{
//          console.log("file creation done")
//        }
// })

//delete a folder
// fs.rm("User",{recursive:true},(err)=>{
//     if(err){
//         console.log("Something wrong!"); 
//     }
//     else{
//         console.log("Deleted!")
//     }
// })