---
title: ES6 函数特性
date: 2018-08-06 18:29:22
tags: JavaScript
---

---------

### 设置默认参数
  1. 形参为 undefined 或不传则使用默认值
  2. 默认参数对 arguments 的影响
     - 使用默认参数 arguments 对象不会跟随参数的改变而改变，只保留初始的值
     - 这个种表现和 在使用 "use strict" 的表现一样
  3. 默认参数的临时死区
---------

### 使用不定参数

  1. function (obj, ...arg) {}
  特点：
    1. 每个函数只能声明一个不定参数
    2. 而且一定要放在所有参数的末尾
    3. 不能用于对象字面量 setter 之中

  值得注意的地方，不定参数设计的目的：代替 arguments 对象
---------

### 展开运算符
  1. [...arg]
---------

### 函数 name 属性(调试作用)
---------

### 明确函数的多重用途

函数的调用有两种方式：
  * 第一种：func()
  * 第二种：new Func()

这两种调用方式的区别：
  * 使用 第一种方式的时候实际调用是函数内部的 [[Call]] 方法
  * 使用 第二种方式的时候实际调用是函数内部的 [[Construct]] 方法，这个方法会创建一个该构造函数的新实例，并将 this 绑定到新实例上。
---------

### ECMAScript5 中判断函数被调用的方法
  1. 使用 instanceof

```js

  function Person(name) {
      if (this instanceof Person) {
        this.name = name
      } else {
        throw new Error('必须通过 new 关键词调用 Person')
      }
  }
  var person = new Person('99') // 使用 new 关键字 有效
  var person = Person('69') // 抛出错误
  var person = Person.call(person, '66') // 主动改变 construct 中的 this 绑定 有效

```

  2. 使用 call 或者 applly 来调用 construct
---------

### ECMAScript6 中判断函数被调用的方法

  1. 使用 new.traget 元属性，是指非对象的属性，可以提供非对象目标的补充信息（例如： new）

  2. 调用 [[call]] 方法也会报错，必须使用 new 关键字 new.traget === 'undefined'

```js

  function Person(name) {
      if (typeof new.target !== 'undefined') {
        this.name = name
      } else {
        throw new Error('必须通过 new 关键词调用 Person')
      }
  }

```

  注意：在函数外使用 new.traget 是一个语法错误

---------

### 块级函数（有利于提升声明声明的能力）

在作用域的顶部使用 'use strict'


和使用 let 表达式比较相似，执行过程流出流代码块，函数定义立即被销毁

在该代码块中，块级函数会被提升至块的顶部，但是 let 定义的函数表达式不会被提升

非严格模式下
  1. 块级函数被提升到全局作用域中

```js
  if (true) {
      console.log(typeof add)
      function add (a, ...b) {
          return a + b[0]
      }
  }
```

### 箭头函数的目标

  1. 即用即弃

  #### 箭头函数的特点：

    1. 没有 this, super, arguments, new.target 绑定

    2. 不能通过 new 关键字调用
    3. 没有原型
        原因：不能通过 new 关键字调用 => 箭头函数是没有 construct 方法 （没有原型）

    4. 不可以改变 this 的绑定
        表现：不能通过 bind，call，apply 来改变 this 的直线

    5. 不支持 arguments 对象

    6. 不支持重复的命名参数

---------

### 尾调用优化
  自动开启尾调用优化的三个条件：

  1. 尾调用不访问当前栈帧的变量
  2. 在函数内部，尾调用是最后一条语句
  3. 尾调用的结果作为函数值返回
---------  

参考文献：

* 《深入理解 ES6》
