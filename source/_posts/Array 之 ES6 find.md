---
title: Array 之 ES6 find
date: 2018-07-09 09:57:01
tags: [ JavaScript, ECMAScript6 ]
---

-----

### [Array.prototype.find](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
  * Grammar: arr.find(callback[, thisArg])
  * Description: 遍历 arr 每次调用 callback，并 callback 的值为 true，则返回对应的元素，否则返回 undefind;
  * Return: 数据类型：*
  * 特点：满足该条件的时候就立即返回对应的值，不会遍历完所有的元素，除非我们要找到的元素在数组的最后一个, 中途不可跳出循环，使用 break 会导致：Uncaught SyntaxError；

  * [Compared with Array.prototype.findIndex](https://www.pengjiandry.com/2018/04/20/Array%20%E4%B9%8B%20ES6%20findIndex/)

```js
  if (!Array.prototype._find) {
    /**
     * 返回满足条件的第一个元素，若数组没有项元素满足条件则返回 undefined
     * @param {Function} callback
     * @returns {*} result
     */
      Array.prototype._find = function(callback) {
          var i,
              callbackState,
              result,
              len;

          // #region 1. 判断callback
          if (typeof callback !== 'function') return

          // #region 2. 判断数组长度
          len = this.length;
          if (!len) return;
          // #endregion 2. 判断数组长度

          for (i = 0; i < len; i++) {
              callbackState = callback(this[i], i, this);
              if (callbackState) {
                  result = this[i]; // 在 Array.prototype._findIndex 中 result =i
                  break; // 是否使用 break，决定了获取到的值的顺序
              }
          }

          return result
      }
  }
```
  * thisArg 这个参数都很少使用，所以就没实现这个功能

----
参考资料：

  * [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Typed_arrays)
