/*
 * @Description:
 * @Version: 1.0
 * @Author: ckf123
 * @Date: 2021-12-27 12:49:44
 * @LastEditors: [youname]
 * @LastEditTime: 2021-12-29 18:38:54
 * @FilePath: \JavscriptAdvance\JSsenior\04_js模块.js
 * Copyright (C) 2021 ckf. All rights reserved.
 */
/*
 模块--闭包
 缺点：占用内存
 程序运行需要的内存超过剩余内存时，就抛出内存溢出

 内存泄漏
  占用的内存没有及时释放
  内存泄漏积累多了会产生内存溢出
  意外的全局变量
  function fn(){
      a = 3;
  }
  没有及时释放计时器或者回调函数
  闭包
*/
function moudle() {
  var msg = 'hello word';

  function doSomething() {
    console.log(msg.toLocaleUpperCase());
  }

  function doOtherSomething() {
    console.log(msg.toLocaleLowerCase());
  }

  return {
    doSomething,
    doOtherSomething,
  };
}

(function moudle() {
  var msg = 'hello word';

  function doSomething() {
    console.log(msg.toLocaleUpperCase());
  }

  function doOtherSomething() {
    console.log(msg.toLocaleLowerCase());
  }

  window.moudle2 = {
    doSomething,
    doOtherSomething,
  };
})();

function fun1(n, o) {
  console.log(o);
  return {
    fun: function (m) {
      return fun1(m, n);
    },
  };
}

var a = fun1(0);
a.fun(1);
a.fun(2);
a.fun(3);

var c = fun1(0).fun(1).fun(2).fun(3);
var d = fun1(0).fun(1);
console.log(d);
d.fun(2);
d.fun(3);
