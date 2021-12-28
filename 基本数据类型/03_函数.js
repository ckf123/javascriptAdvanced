/*
   闭包
   1.将函数作为宁一个函数的返回值
   2.函数参数传递给另 一个函数调用
*/

function f1() {
    var a=2;
    return function(){
        console.log(a++);
    }
}
f1();

function createFunction(){
    var result = new Object();

    for(var i=0;i<10;i++){
      result[i]=function(){
         return i;   
      } 
    }
    return result;
}



