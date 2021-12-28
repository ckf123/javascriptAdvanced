/*
 * @Description:
 * @Version: 1.0
 * @Author: ckf123
 * @Date: 2021-12-24 19:03:12
 * @LastEditors: [youname]
 * @LastEditTime: 2021-12-29 01:03:26
 * @FilePath: \JavscriptAdvance\JS高级\03_函数.js
 * Copyright (C) 2021 ckf. All rights reserved.
 */
/*
   闭包
   1.将函数作为宁一个函数的返回值
   2.函数参数传递给另 一个函数调用
*/

function f1() {
  var a = 2;
  return function () {
    console.log(a++);
  };
}
f1();

function createFunction() {
  var result = new Object();

  for (var i = 0; i < 10; i++) {
    result[i] = function () {
      return i;
    };
  }
  return result;
}
