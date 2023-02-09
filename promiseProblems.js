// Let's do some practice with a simple exercice. You must modify the code below based on the following rules:

// The function job must return a promise object (you are in a NodeJS environment, you can use new Promise)
// The promise must resolve itself 2 seconds after the call to job and must provide hello world in the data

function job (){
    return new Promise((resolve,rejects)=>{
        setTimeout(()=>{
           resolve("hello world")
        },2000)
    })
}
job().then((data)=>{
console.log(data)
})

// Let's do a harder exercise. In this code, your function receives a parameter data. You must modify the code below based on the following rules:

// Your function must always return a promise
// If data is not a number, return a promise rejected instantly and give the data "error" (in a string)
// If data is an odd number, return a promise resolved 1 second later and give the data "odd" (in a string)
// If data is an even number, return a promise rejected 2 seconds later and give the data "even" (in a string)

function job(data) {
    return new Promise((resolve,reject)=>{
        if(isNaN(data)){
            reject("error")
        } else if(data%2!==0){
            setTimeout(()=>{
                resolve("odd")
            },1000)
        } else{
            setTimeout(()=>{
                reject("even")
            },2000)
        }
        
    })
}
job("jh").then((data)=>{
     console.log(data)
},(err)=>{
    console.log(err)
})