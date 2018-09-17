---
title: Array 之 ES5 forEach
date: 2017-12-18 11:24:43
tags: JavaScript
---

----
### [Array.prototype.forEach](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

* Grammar:
    1. array.forEach(callback[, thisArg])
    2. array.forEach(callback(currentValue, index, array){ //do something }, this)

* Description: 循环数组
* Return: undefind
* 特点：
    1. 从头开始至尾进行迭代
    2. 中途不可跳出循环，使用 break 会导致：Uncaught SyntaxError
    3. 作用和 for 循环类似

* Compared with for:
    1. 不同点：
        * for 可以退出循环
        * for 是 JavaScript 的一个循环语句

```js
  if (!Array.prototype._forEach) {
      /**
       * 循环数组中的元素
       * @param {Function} callback
       * @returns undefind
       */
      Object.defineProperty(Array.prototype, '_forEach', {
          value: function(callback) {
              var i,
                  len;
              // 1. 判断参数
              if (typeof callback !== 'function') return;

              // 2. 判断数组长度
              len = this.length;
              if (!len) return;

              // 3. 初始化循环起点，并开始循环
              i = 0;
              while(i < len) {
                callback(this[i], i, this) // // 在 Array.prototype._map 中有赋值这一步
                i++
              }

              return;
          }
      })
  }
```

* thisArg 这个参数都很少使用，所以就没实现这个功能

-----
参考资料：

* [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Typed_arrays)
