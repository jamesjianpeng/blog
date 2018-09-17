---
title: Array 之 ES6 findIndex
date: 2018-04-20 09:42:20
tags: JavaScript
---

-----
### [Array.prototype.findIndex](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
  * Grammar: arr.findIndex(callback[, thisArg])
  * Description: 遍历 arr 每次调用 callback，并 callback 的值为 true，则返回对应的索引，否则 返回 -1
  * Return: 数据类型：Number
  * 特点：满足该条件的时候就立即返回对应的值，不会遍历完所有的元素，除非我们要找到的元素在数组的最后一个，中途不可跳出循环，使用 break 会导致：Uncaught SyntaxError；

  * Compared with Array.prototype.indexOf:
    1. 不同点（参数不同）：
          * arr.indexOf 接受的是 arr 中的一个元素，或者其他的值, arr.findIndex 的参数是一个 callback, 通过是否满足我们的测试条件来决定是否返回索引
          * arr.indexOf 第二个参数还支持，从指定位置开始查找
          * Array.prototype.indexOf 是属于 ES3 的规范，Array.prototype.findIndex 是属于 ES6 的规范

    2. 相同点：
          * 返回的值：元素在数组的索引或者 -1, 返回值的类型是 Number
          * 不改变数组本身
          * 找到满足的条件就立即结束并返回对应的值

  * [Compared with Array.prototype.find](https://www.pengjiandry.com/2018/07/09/Array%20%E4%B9%8B%20ES6%20find/)
    1. 不同点（返回的值）
          * Array.prototype.find 是返回满足条件的元素的索引

    2. 相同点：
          * 参数相同
          * 不改变数组本身
          * 找到满足的条件就立即结束并返回对应的值    
          * 都是属于 ES6 的规范

```js
  if (!Array.prototype._findIndex) {
    /**
     * 返回满足条件的第一个元素的索引
     * @param {Function} callback
     * @returns {*} result
     */
      Array.prototype._findIndex = function(callback) {
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
                  result = i; // 在 Array.prototype._find 中 result = this[i]
                  break; // 是否使用 break，决定了获取到的值的顺序
              }
          }

          return result
      }
  }
```
  * thisArg 这个参数都很少使用，所以就没实现这个功能

-----
参考资料：

  * [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Typed_arrays)
