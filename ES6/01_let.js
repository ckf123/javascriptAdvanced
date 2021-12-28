let a;
{
    
    let b = 11;
}

console.log(a);

/**
 * 会形成块级作用域
 * 不会变量提升
 * 暂时性死区:temporal dead zone 简称：TDZ
 *      进入当前作用域，变量已经存在，但是变量不可以访问，只有当变量出现赋值语句后，才可以进行获取
 * 不允许重复声明
 * 块级作用域: 函数声明。ES6 块级作用域可以声明函数 
 * 函数声明类似使用var 函数会声明提前函数作用域顶端。
 */

var tmp = 123;

if(true){
    //TDZ开始
    // tmp = 123;
    
    let tmp; //暂时性死区 TDZ结束
}

var temp = 111;
(function() {
       var temp = 11111
})()

console.log(temp);




function f(){console.log("111")}

(function fn(){
    if(true ){
        function f() {
            console.log("wwww")
        }
    }
    f()
})()
