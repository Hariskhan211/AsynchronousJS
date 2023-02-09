const fs=require("fs");

fs.readFile("text.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err)
    } else{
        console.log(data)
    }
})

fs.promises.readFile("text.txt","utf-8")
.then((data)=>{
    console.log(data)
}).catch((err)=>{
     console.log(err)
})