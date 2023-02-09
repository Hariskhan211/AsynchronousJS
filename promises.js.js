
const cart=["shoes","pants","kurta"]

const promise=CreateOrder(cart);
console.log(promise)
promise.then((id)=>{
     console.log(id)
     return id;
})
.catch((err)=>{
    console.log(err.message)
    })
.then((data)=>{
    console.log(data)
   return proceedToPayment(data)
   
    
})
.then((paymentInfo)=>{
console.log(paymentInfo)
})


function CreateOrder(){
    const pr=new Promise((res,rej)=>{
       if(!ValidateCart(cart)){
        const err=new Error("Cart is not validated")
        rej(err)
       }
       else {
        const orderId="1233"
        if(orderId){
         setTimeout(()=>{
            res(orderId)
         },5000)
        }
       }
       
    })
    return pr;
}
function ValidateCart(cart){
    return false;
}
function proceedToPayment(id){
 return new Promise((resolve,reject)=>{
    resolve("payment successful")
 })
}