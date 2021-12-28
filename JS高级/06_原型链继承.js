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
     Super.call(this,name)
     this.name = name
 }
 Sub.prototype = new Super("ckf");
 Sub.prototype.constructor = "Sub"
 Sub.prototype.setName = function (name) {
     this.name = name;
     console.log("子类" + this.name);
 }

 var instance = new Sub();
 console.log(instance);

