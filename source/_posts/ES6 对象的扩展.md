---
title: ES6 对象的扩展
date: 2018-08-3 19:30:27
tags: JavaScript
---

-------
### 对象的分类

  1. 普通对象
    具有 JavaScript 对象所有的默认内部行为

  2. 特异对象
    具有某些与默认行为不符的内部行为

  3. 标准对象
    ES6 规范中定义的对象，例如： Array, Date 等。标准对象既可以是普通对象，也可以是特异对象

  4. 内建对象
    脚本开始执行时存在于 JavaScript 执行环境中的对象，所有标准对象都是内建对象

### 对象字面量语法扩展

  1. 属性初始值的简写

```js
  const name = '1'
  const obj = {
    name
  }
```

  2. 对象方法的简写

```js
  const obj = {
    name() {
      console.log(this)
    }
  }
```

  3. 可计算属性名

```js
  const name = 'name'
  const obj = {
    [ name ]() {
      console.log(this)
    }
  }
```

### 新增方法

  1. Object.is()
  2. Object.assign()
-----

### 重复的对象字面量属性

  1. ES5 的时候，重复的字面量属性是会报错
  2. ES6 会使用重复属性名中最后一个属性
-----

### 自有属性枚举顺序
  1. ES5 自有属性的枚举是根据 JavaScript 引擎厂商自行决定
  2. ES6 严格规定对象的自有属性被枚举
    1. 所有数字键按升序排序
    2. 所有字符串按照它们被加入对象的顺序排序
    3. s所有 symbol 按照它们被加入对象的顺序排序
-----

### 增强对象原型

  1. 改变对象的原型
  ES5: Object.getPrototypeof(obj)
  ES6: Object.setPrototypeof(obj, prototypeFun)
       super.xxxx(用于获取当前对象的 prototype)
-----

### 正式的方法定义
  1. ECMAScript6 关于对象中方法的定义：定义为一个 函数，它会有一个内部的 [[HomeObject]] 属性来容纳这个方法从属的对象
-----

参考文献：

* 《深入理解 ES6》
