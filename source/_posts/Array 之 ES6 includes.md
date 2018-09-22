---
title: Array 之 ES6 includes
date: 2018-08-11 10:20:04
tags: [ JavaScript, ECMAScript6 ]
---

---

### [Array.prototype.includes](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
  * Grammar: arr.includes(searchElement[, searchIndex])
  * Description: 遍历 arr 去寻找我们想要的元素，找到则返回 true，没有找到则返回 false
  * Return: 数据类型：Boolean
  * 特点：满足该条件的时候就立即返回，不会遍历完所有的元素，除非我们要找到的元素在数组的最后一个，中途不可跳出循环，使用 break 会导致：Uncaught SyntaxError；

  * Compared with Array.prototype.indexOf
    1. 不同点（返回值）
        * 返回值有区别，includes 的返回值是：Boolean，indexOf 则是 Number 类型
        * Array.prototype.indexOf 是属于 ES3 的规范，Array.prototype.findIndex 是属于 ES6 的规范

    2. 相同点
        * 接受的参数一致
        * 不改变数组本身

```js
  if (!Array.prototype._includes) {
      /**
       * 根据 searchElement 按顺序在数组中元素的对比，=== 则是 true 否则为 false
       * @param {*} searchElement
       * @param {Number} searchIndex
       * @returns {Boolean} result
       */
      Object.defineProperty(Array.prototype, '_includes', {
          value: function(searchElement, searchIndex) {
              var i,
                  result = false,
                  len = this.length;

              // 1. 判断数组长度
              if (!len) return result;

              // 2. 判断 searchIndex
              if (!searchIndex || typeof searchIndex !== 'number') searchIndex = 0;

              // #region 3. 获取遍历的起点
              i = searchIndex;

              if (searchIndex < 0) {
                  searchIndex += len;
                  i = searchIndex < 0 ? 0 : searchIndex;
              } else if (searchIndex >= len) {
                  return result;
              }
              // #endregion 3. 获取遍历的起点

              while(i < len) {
                  if (this[i] === searchElement) { // 必须是 ===
                    result = true;
                    break;
                  }
                  i++;
              }

              return result;
          }
      })
  }
```

参考资料：

  * [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Typed_arrays)
