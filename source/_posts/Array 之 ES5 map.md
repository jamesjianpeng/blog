---
title: Array 之 ES5 map
date: 2018-07-10 11:45:31
tags: JavaScript
---

---

### [Array.prototype.map](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

* Grammar:
    1. array.map(callback[, thisArg])
    2. array.map(callback(currentValue, index, array){ //do something }, this)

* Description: 迭代数组
* Return: 迭代后的数组
* 特点：
    1. 中途不可跳出循环，使用 break 会导致：Uncaught SyntaxError
    2. 可在回调函数中使用 return 替换当前的元素
    3. 不会改变原数组

* Compared with forEach:
    1. 不同点：
        * 可在回调函数中使用 return 替换当前的元素
        * 返回值是迭代后的数组，支持链式调用

```js
if (!Array.prototype._map) {
    /**
     * 循环数组中的元素，可以在 callback function 中使用 return 生成新的数组的元素
     * @param {Function} callback
     * @returns {Array} 改变
     */
    Object.defineProperty(Array.prototype, '_map', {
        value: function(callback) {
            var i,
                len,
                result;

            // 1. 判断参数
            if (typeof callback !== 'function') return;

            // 2. 判断数组长度
            len = this.length;
            if (!len) return;

            // 3. 初始化循环起点，并开始循环
            result = [];
            i = 0;
            while(i < len) {
              result = callback(this[i], i, this) // 在 Array.prototype._forEach 中没有赋值这一步
              i++
            }

            return result;
        }
    })
}
```

* thisArg 这个参数都很少使用，所以就没实现这个功能

-----
参考资料：

* [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Typed_arrays)
