// const { stat } = require("fs");

// let promise=new Promise((resolve,reject)=>{
//     let random=Math.floor(Math.random()*3);

//     if(random>=2){
//         resolve("resolved")
//     } else{
//         reject("rejected")
//     }
// })

// promise.then((data)=>{
//     console.log(data)
// },(err)=>{
//     console.log(err)
// })

function job(stat){
   return new Promise((resolve, reject) => { 
    if(stat==="done"){
        resolve(stat + " succes")
    }
    else{
        reject(stat+ " failure")
    }
    })
}

job("done")
.then((data)=>{
  console.log("resolve ",data)  
  if(data=="done succes"){
    throw "bad world"
  }
  return job("done")

}).catch((err)=>{
   console.log("Error 1 ",err)
})
.then((data)=>{
    if(data===undefined){
        throw "out"
    }
console.log("resolved 1 ",data)

})
.then((data)=>{
   console.log("resolved 2",data)
})
.catch((data)=>{
   console.log("out ",data)
})