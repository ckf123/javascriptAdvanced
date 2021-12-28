//super 原型链继承
 function Super(name) {
     this.name = name
 }

 Super.prototype.setName = function (name) {
     this.name = name;
     console.log("父类"+this.name);
 }
//
  function Sub(name) {
      this.name = name
  }
  Sub.prototype = new Super("ckf");
  Sub.prototype.constructor = "Sub"
  Sub.prototype.setName = function (name) {
      this.name = name;
      console.log("子类"+this.name);
  }

  var instance = new Sub();

console.log(instance.__proto__);

//借用构造函数继承+原型链继承
function Super(name) {
    this.name = name
    this.color = ["red", "white", "blue"];
}
Super.prototype.setName = function (name) {
    this.name = name;
    console.log("父类" + this.name);
}
//
function Sub(name) {
    Super.call(this, name)
    this.name = name
}
 Sub.prototype = new Super();
Sub.prototype.constructor = "Sub"
Sub.prototype.setName = function (name) {
    this.name = name;
    console.log("子类" + this.name);
}
var instance = new Sub();
//寄生构造函数组合式继承
function inheritPrototype(subtype, superType) {
    var prototype = Object.create(superType.prototype);
    prototype.constructor = subtype;
    // console.log(prototype.__proto__==superType.prototype);//true
    subtype.prototype = prototype
    // console.log(subtype.prototype.constructor);
}
 function Super(name) {
     this.name = name
     this.color = ["red", "white", "blue"];
 }
 Super.prototype.setName = function (name) {
     this.name = name;
     console.log("父类" + this.name);
 }
 function Sub(name) {
     Super.call(this,name)
     this.name = name
 }
inheritPrototype(Sub,Super);
Sub.prototype.setName = function (name) {
     this.name = name;
     console.log("子类" + this.name);
}
var instance = new Sub();
console.log(Super.__proto__);
console.log(instance.color);

 /**
  *  原型式继承 : 场景：让一个对象保持与另一个对象类似的情况
  *         问题:访问还是通过原型链去访问. 无法解决
  *  function object(o) {
  *     function F(){}
  *     f.prototype = o;
  *     return new F();
  *   }
  *  组合继承:
  *      
  */
    var person = {
        name:"geg",
        friends:["ckf","sq","cp"],
    }
    var p1 = Object.create(person);
    var p2 = Object.create(person);
    p1.friends.push("rob");
    console.log(p2.friends);




  
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

console.log(Object.getPrototypeOf(Function) ==Function.prototype);//true
console.log(Object.getPrototypeOf(Object) == Function.prototype);//true
console.log(Object.getPrototypeOf(Sub)==Function.prototype);//true
console.log(Function.prototype.__proto__===Object.prototype);//true
console.log(Function instanceof Object)//true

console.log(typeof Function);//function
console.log(typeof Function.prototype); //function
console.log(typeof Object);//function
console.log(typeof Object.__proto__); //function
console.log(typeof Object.prototype); //object



