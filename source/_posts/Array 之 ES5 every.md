---
title: Array 之 ES5 every
date: 2017-11-10 11:15:46
tags: JavaScript
---

---
### [Array.prototype.every](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

* Grammar:
    1. array.every(callback[, thisArg])
    2. array.every(callback(currentValue, index, array){ //do something }, this)

* Description: 循环数组，找到不满足条件的元素，就返回 false，若所有元素满足条件就返回 true
* Return: Boolean
* 特点：
    1. 中途不可跳出循环，使用 break 会导致：Uncaught SyntaxError
    2. 找到不满足条件的元素，直接结束循环，就返回 false
    3. 空数组直接返回 true

* Compared with Array.prototype.includes
    1. 不同点：
        * 参数不一样，every 的参数是 callback function, includes 就是可以是任意的数据
        * every 是遇到不满足条件时结束循环，并返回值；includes 是传入的参数和按顺序循环时遇到的元素 === 的时候才返回值

    2. 相同点
        * 返回的参数类型都是 Boolean

```js
if (!Array.prototype._every) {
    Object.defineProperty(Array.prototype, '_every', {
        /**
         * 数组中的所有元素是否满足条件，是返回 true ,否则 false
         * @param {Function} callback
         * @returns undefind
         */
        value: function(callback) {
            var i,
                len,
                callbackState,
                result;

            // 1. 判断参数
            if (typeof callback !== 'function') throw new Error('Array.prototype._every params is not callback');

            // 2. 判断数组的长度
            result = true
            len = this.length;
            if (!len) return result;

            i = 0;
            while (i < len) {
                callbackState = callback(this[i], i, this);
                if (!callbackState) {
                  result = false;
                  break;
                };
                i++;
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
