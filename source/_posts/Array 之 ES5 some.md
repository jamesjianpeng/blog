---
title: Array 之 ES5 some
date: 2018-09-17 11:33:31
tags: JavaScript
---

---
### [Array.prototype.some](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

* Grammar:
    1. array.some(callback[, thisArg])
    2. array.some(callback(currentValue, index, array){ //do something }, this)

* Description: 循环数组，找到一个满足条件的元素，就返回 true，若所有元素都不满足条件就返回 false
* Return: Boolean
* 特点：
    1. 中途不可跳出循环，使用 break 会导致：Uncaught SyntaxError
    2. 找到不满足条件的元素，直接结束循环，就返回 false
    3. 空数组直接返回 false

* Compared with Array.prototype.every
    1. 不同点：
        * some 是遇到满足条件时结束循环，并返回值 true；every 是遇到不满足条件时结束循环，并返回值 false

    2. 相同点
        * 返回的参数类型都是 Boolean
        * 参数一样，都是 callback function

```js
if (!Array.prototype._some) {
    Object.defineProperty(Array.prototype, '_some', {
        /**
         * 只要数组中的任意一个元素满足条件就返回 true ，否则返回 false
         * @param {Function} callback
         * @returns {Boolean} result
         */
        value: function(callback) {
            var i,
                len,
                callbackState,
                result;

            // 1. 判断参数
            if (typeof callback !== 'function') throw new TypeError('Array.prototype._some params is not callback');

            // 2. 判断数组的长度
            result = false
            len = this.length;
            if (!len) return result;

            i = 0;
            while (i < len) {
                callbackState = callback(this[i], i, this);
                if (callbackState) {
                  result = true;
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
