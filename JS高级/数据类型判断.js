/*
基本数据类型
String null undefined Number Boolean
引用数据类型
Object Function Array
判断： typeof instanceof ===


    2. null undfined 区别
null 定义并赋值
undefined： 定义了未赋值
3. 什么时候赋值为null
3.1 初始赋值： 表明将要赋值为对象
3.2 结束赋值： 指向垃圾回收对象
4. 严格区分变量类型和数据类型
4.1 数据类型
      基本类型
      对象类型
4.2 变量类型
      基本类型
      引用类型


*/
console.log(typeof 1.2); //number
console.log(typeof "32"); //string
console.log(typeof true); //boolean
console.log(typeof null); //object
console.log(typeof undefined); //undefined

console.log(undefined === null); //false
