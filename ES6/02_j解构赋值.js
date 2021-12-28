/**
 * 解构赋值
 * 对象解构赋值
 *   var a = {
 *   name:"ckf"
 *   age:12  
 * }
 * let {name,age} = a
 * 
 *  数组解构赋值
 *  基本类型解构赋值
 */
  
 
 var a = {
          name: "ckf", 
             age: 12
     }
     
     let {name,age} = a
console.log(name,age)

var array = [1,23,243534,543];

let [c,cdsf,w] = array;
console.log(w);

let address;
var obj = {
    name: "ckf",
    address: "江西"
};

({address} = obj) 
console.log(address);

/**
 * 模板字符串
 * `` 可以直接出现换行符
 * ${可以存放js代码}
 * 
 * 对象简化写法
 *  var obj = {
 *     obj,
 *     ccc
 *  }
 * 
 * 函数参数默认值
 * 默认值放在后面
 *  可以和解构赋值结合
 * 
 * 函数rest参数
 *   用来替代argunments  ...args
 * 
 * 扩展运算符  将数组转换为一个参数序列如同rest参数逆运算
 */

function f(a,b,c=10){
    return a+b+c;
}
let result = f(1,2)
console.log(result)


function data(...args){
 console.log(arguments);//object
 console.log(args);//array
}

data("ckf",123,"dwqe")
