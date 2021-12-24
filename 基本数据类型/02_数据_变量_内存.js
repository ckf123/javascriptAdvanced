/**
 * 什么数据？
 *     存储在内存中代表特定信息的东西，本质就是0101
 *     数据：可传递，运算
 *     一切皆数据。
 * 什么是内存？
 *     内存条通电后产生的可存储数据的空间
 *     内存分类：
 *         堆:全局变量/局部变量
 *         栈:对象
 * 什么是变量
 *      
 * 内存数据变量三者之间的关系
 *    内存就是存储数据的空间
 *    变量就是内存一个标识
 * 
 * var obj = {
 *    name：'ckf',
 * }
 * var b = obj;
 * 
 * b.name = "成开封"
 * console.log(b.name); //成开封
 * 
 * 2. 
     var obj = {
        name： 'ckf',
    }
    var b = obj;
    a={name:"sq"}
    console.log(b.name);// ckf
    3.
    var obj ={
        name:"ckf"
    }
    var b = obj;
    function a(obj){
        obj.name = "sq"
    }
    a(obj);
    console.log(obj);
    4.
    var obj = {
        name: "ckf"
    }
    var b = obj;

    function a(obj) {
        obj = {
            name: "sq"
        }
    }
    a(obj);
    console.log(obj);
 * 
 * js 在调用函数的时候传递变量参数时，是值传递还是引用传递。
 *   基本值或地址值
 * 
 * js引擎如何管理内存
 *   1. 内存分配周期
 *      分配小内存空间，得到使用权
 *      存储数据，进行操作
 *      释放小内存空间。
 *   2.释放内存  
 * 
 * 什么是对象？
 *     多个数据的封装体，保存多个数据的容器，现实一组事物的描述
 * 为啥要用对象
 *     统一管理多个数据
 * 对象的组成
 *   属性:属性名(字符串)和属性值(任意值)组成
 *   方法:一种特定的属性,(属性值是一个函数)
 * 如何访问对象内部数据
 *   .属性名
 *    [变量]--["属性名"]：属性名含有特殊字符
 * 
 * 
 * 函数:
 *    声明式: function test1(){}
 *    表达式: var fun = function(){}
 *    执行函数：
 *        1.obj.test()
 *        2.new test()
 *        3.test.call/apply(obj)
 * IIEF:
 *   全称:Immediately -invoked Function Expression
 * 作用:
 *     隐藏实现
 *     不会污染全局变量
 * this:
 *    调用者.
 *       new Person(); this:为当前的新的对象
 *       person() this:window
 *       obj.person(); this:obj
 * 分号问题：
 *     小括号开头的前一条语句
         var C = 3;
        (function fun() {
            console.log(1);
        })()
 *     中括号开头的前一条语句
 *     var b = 0；
 *     [1.23,32].forEach(()=>{}) 
 *     解决:行首加括号
 *   合并，压缩文件时不加分号会出现问题
 */

(function () {
  var a = 1;
  function test() {
    console.log(++a);
  }
  globalThis.$ = function () {
    return {
      test: test,
    };
  };
})();
//1.$是一个函数，2.$返回的是一个对象
$().test();
// let 声明的变量不会加到全局window



    
