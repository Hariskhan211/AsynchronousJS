"use strict"
/* function makeFriAnda(callback){
    console.log("fri anda doing")
    setTimeout(()=>{
     callback("Egg Fried ")
    },5000)
}
function toastBread(cb){
    console.log("breast doing")
  setTimeout(()=>{
     cb("Teast Done")
  },6000)
}
// calling multiple function in inside toastBread will make it callback hell
toastBread(function(para1){
    console.log(para1);
    makeFriAnda(function(para2){
        console.log(para2)
    })
}

) */

// Promise

function getToastPromise() {
  return new Promise((resolve, reject) => {
    let wifeMood = 7;
    setTimeout(() => {
      if (wifeMood >= 5) {
        resolve("Toat is ready")
      } else {
        reject("i am in a bad mood")
      }
    }, 2000)
  })
}

function eggFryPromise() {
  return new Promise((resolve, reject) => {
    let wifeMood = 3;
    setTimeout(() => {
      if (wifeMood >= 5) {
        resolve("egg is ready")
      } else {
        reject("i am in a bad mood")
      }
    }, 2000)
  })
}

// getToastPromise().then((arg)=>{
//     console.log(arg)
//     return eggFryPromise();
// })
// .then((arg2)=>{
//     console.log(arg2)
// })
// .catch((err)=>{
// console.log(err)
// })

// async function getResult() {
//   try {
//     let result = await getToastPromise();
//     console.log(result);
//     let eggResult = await eggFryPromise();
//     console.log(eggResult)
//   } catch (err) {
//     console.log(err)
//   }
// }
// getResult()

/* const getMyMarks=()=>{
 return new Promise((resolve,reject)=>{
    let myMarks=80;
    if (myMarks >=80){
      resolve("A")
    } else {
      reject()
    }
  })
}
getMyMarks().then((grade)=>{
    console.log("grade is ", grade)
}) */

const loginUserPromise=(email,password)=>{
  return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
      if(email === "hksultan3@gmail.com" && password === 123){
        resolve (email)
      }
     else {
      reject ("email or password is incorrect")
     }
    },2000)
  })
}

const getUserVideos=(email)=>{
     return new Promise ((resolve,reject)=>{
       setTimeout(()=>{
        if (email){
          resolve(["video1","video2","video3"])
        }
       })
     })
}

loginUserPromise("hksultan3@gmail.com",123)
.then((email)=>{
   console.log(email)
   return getUserVideos("hksultan3@gmail.com");
})
.then((videos)=>{
    console.log(videos)
})
.catch((err)=>{
  console.log(err)
})