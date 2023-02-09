const fs=require("fs")
let readFile= async (filename)=>{
    try{
     let data=await fs.promises.readFile(filename,"utf-8")
     console.log(data)
    } catch(err){
      console.log(err)
    }
}

readFile("text.txt")
readFile("text.tx")