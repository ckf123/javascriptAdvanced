/*
 * @Description: 
 * @Version: 1.0
 * @Author: ckf123
 * @Date: 2021-12-27 17:27:11
 * @LastEditors: [youname]
 * @LastEditTime: 2021-12-29 00:34:37
 * @FilePath: \JavscriptAdvance\JS高级\06_原型链继承.js
 * Copyright (C) 2021 ckf. All rights reserved.
 */
//super 原型链继承
 
 function Super(name) {
     this.name = name
 }

 Super.prototype.setName = function (name) {
     this.name = name;
     console.log("父类"+this.name);
 }
   
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
  *              问题:访问还是通过原型链去访问. 无法解决
  *  function object(o) {
  *     function F(){}
  *     f.prototype = o;
  *     return new F();
  *   }  
  */
    var person = {
        name:"geg",
        friends:["ckf","sq","cp"],
    }
    var p1 = Object.create(person);
    var p2 = Object.create(person);
    p1.friends.push("rob");
    console.log(p2.friends);
    

    
    



