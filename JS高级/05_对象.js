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
 *         通过往原型对象添加属性和方法，达到属性和方法共享。
 *         问题:对于引用类型值，每个对象共有一个，当一个实例对象修改这个值，所有的实例对象的值都会被修改.省略了构造函数的参数传递。
 *   6.组合式模式
 *          构造函数就是定义实例属性，原型对象定义共享属性和方法
 *   7.寄生构造函数
 *      
 *   8.稳妥构造函数
 *      通过闭包方式进行实现修改数据，添加数据
 *      特点：不使用new 进行创建构造函数，创建对象的实例方法不引用this
 *      适用于:禁用this和new 的环境
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

//稳妥构造函数 
function Person(name, age, job) {
    
    var o = new Object 
        o.sayName = function () {
            console.log(name); 
        }
        o.setName = function() {
            name = arguments[0]
        }
        return o;
}
var p = Person("ckf",23,"Math");
p.sayName();
p.setName(111);
p.sayName();
