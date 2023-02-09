function fun1(cb){
    console.log("function1")
    cb(fun3)
}
function fun3(){
    console.log("function 3")
  }
fun1(function fun2(cb2){
    console.log("function 2")
      cb2()
})