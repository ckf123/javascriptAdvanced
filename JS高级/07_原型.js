/**
 * 原型
 *     获取实例对象的[[prototype]]： Object.getPrototypeOf()
 *     判断属性在原型对象上还是实例对象上
 *              使用in 和 hasOwnproperty()
 *     for - in 遍历. Object.keys()  遍历实例对象的属性 Object.getOwnPropertyNames
 * 注意:
 *     构造函数的prototype == 实例对象的[[prototype]]
 *     Funtion的[[prototype]] 和prototype相等
 *     所有构造函数(包括Object()构造函数)都有prototype(空的Object对象)和[[prototype]] 指向Functio.prototype
 *     最后原型的顶端 为Object的原型:null
 *     
 * A instanceof B
   b函数的显示原型对象在A对象的原型链上
 */

console.log(Object.getPrototypeOf(Function) == Function.prototype); //true
console.log(Object.getPrototypeOf(Object) == Function.prototype); //true
console.log(Object.getPrototypeOf(Sub) == Function.prototype); //true
console.log(Function.prototype.__proto__ === Object.prototype); //true
console.log(Function instanceof Object) //true

console.log(typeof Function); //function
console.log(typeof Function.prototype); //function
console.log(typeof Object); //function
console.log(typeof Object.__proto__); //function
console.log(typeof Object.prototype); //object
