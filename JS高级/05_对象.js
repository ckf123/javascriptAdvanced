/**
 * 创建对象
 *   1.new Object()
 *        
 *   2.字面量模式
 *      问题:创建对象需要写相同的代码.共有属性无法重用
 * 
 *   3.工厂函数
 *      通过函数创建对象并返回
 *      适用：大量创建对象
 *      问题：对象没有一个具体名字，都是Object
 *   4.构造函数
 *      自定义构造函数
 *      适用场景：创建多个不同类型的对象
 *      问题:每个对象方法重复.
 *   5.原型模式
 *      通过往原型模式里面存放
 * 
 */


var b = new Object();
b.name = "ckf"
b.setName = function(name){
    this.name = name;
}

var b2 = {
    name:'ckf',
    setName:function(name){
        this.name = name;
    }
}

function create(name) {
    var b = new Object();
    b.name = name
    b.setName = function (name) {
        this.name = name;
    }
    return b;
}

function Person(name,age){
    this.name = name;
    this.age = age;
}

var person = new Person("ckf","12");
