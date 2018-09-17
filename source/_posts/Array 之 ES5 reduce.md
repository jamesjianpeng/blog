---
title: Array 之 ES5 reduce
date: 2018-09-17 12:25:34
tags: JavaScript
---

### [Array.prototype.reduce](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

* Grammar:
    1. array.reduce(callback[, thisArg])
    2. array.reduce(callback(firstOrTotalNum, nextNum, index, array){ //do something }[, initNum])

* Description:
    1. 若 initNum 作为参数传入，则在 index 为 0 的时候 firstOrTotalNum 的值是为 initNum
    2. 若 initNum 没有作为参数传入，则在 index 为 0 的时候 firstOrTotalNum 的值是为 数组中的第一个元素
    3. 在 index 不为 0 的时候 firstOrTotalNum 值是在 callback function return 的值

* Return: 任何数据类型
* 特点：
    1. 可以使用它进行累加，累乘或者拼接字符
    2. 或者其他的功能

```js
if (!Array.prototype._reduce) {
  /**
   * Array.prototype._reduce
   * @param {Function} callback
   * @param {*} initNum
   * @returns {*} result
   */
    Array.prototype._reduce = function(callback, initNum) {
        var i,
            len,
            result,
            k,
            callbackNum,
            noInitNum;

        // 1. 判断传入的参数
        if (typeof callback !== 'function') throw new TypeError('Array.prototype._reduce params is not function');

        // 2. 判断数组长度
        len = this.length;
        result = initNum || 0;
        if (!len) return result;

        i = 0;

        // #region 合并之后，并不好读😢
        // noInitNum = initNum === undefined ? true : false;
        //
        // len = noInitNum ? len - 1 : len; // 没有 初始值 的时候实际上是从数组的第二项开始的，所以循环的最大长度 - 1
        // while(i < len) {
        //
        //     callbackNum = i === 0
        //         ? (noInitNum ? this[i] : Number(initNum)) // 没有 初始值 的时候实际上是从 callback 接受的第一个参数是数组的第一项元素，第二个参数是数组的二项元素
        //         : result;
        //
        //     k = noInitNum ? i + 1 : i; // 没有 初始值 的时候实际上是从数组的第二项开始的
        //
        //     result = callback(callbackNum, this[k], i, this);
        //     i++;
        // }
        // #endregion 合并之后

        // #region 第一次写
        if (initNum === undefined) { // 关键点：1. 需要判断 初始化的值
            len-- // 关键点：2. 没有 初始值 的时候实际上是从 callback 接受的第一个参数是数组的第一项元素，第二个参数是数组的二项元素，实际上是从第二项开始
            while(i < len) {
                callbackNum = i === 0 ? this[i] : result;
                result = callback(callbackNum, this[i + 1], i, this);
                i++;
            }
        } else {
            while(i < len) {
                callbackNum = i === 0 ? Number(initNum) : result; // 关键点：3. 使用 Number 会把值转化为 number 类型
                result = callback(callbackNum, this[i], i, this);
                i++;
            }
        }
        // #endregion 第一次写

        return result;
    }
}
```

参考资料：

* [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Typed_arrays)
