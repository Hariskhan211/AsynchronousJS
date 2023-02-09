// setInterval(()=>{
//     console.log("hello")
// },1000)

setTimeout(()=>{
    console.log("hi")
    setTimeout(()=>{
        console.log("inner")
    },1000)
},2000)
