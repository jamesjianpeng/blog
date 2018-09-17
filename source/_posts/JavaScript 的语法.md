---
title: JavaScript 的语法
date: 2017-7-05 14:16:49
tags: JavaScript
---
----

### 语法
  * 变量
  * 控制语句
  * 数据类型
  * 操作符
  * 内置功能

  1. 第一个概念：区分大小写

  2. 第二个概念：标识符
      * 标识符：就是指变量，函数，属性的名字，或者是函数的参数
          1. 第一个字符必须是一个字母， 下划线 ```_``` 或一个美元（$）
          2. 其他字符可以是字母，下划线，美元符号或数字

      * 推荐标识符采用小驼峰

  3. 注释
      a. 单行注释
      b. 块级注释

  4. 语句
      * 写分号(推荐)
      * 不写分号：不写分号，解析器会自动插入分号，这样加重解析器的负担


### 关键词和保留字

  1. ECMA - 262 描述了一组具有特点含义的关键字：
      * 这些关键字的特点：表示控制语句的开始和结束，或者表示执行特定的操作
      * 关键字也是语言保留的，不能作为标识符

  2. 关键字：es5新增的使用 * （分类不正确可以指出）
      1. 判断：if, else, break, switch, case, break, default, instanceof, typeof
      2. 循环：for, in, while,
      3. 调试：try, catch, finally, throw, debugger*
      4. 申明方式：var, void, function
      5. 扩充作用域: with
      6. 对象：delete,
      7. 函数：return，new, this

  3. es3: 保留字（以 浏览器兼容的版本为准） （分类不正确可以指出）
      1. 变量声明:  const, volatile, transient, synchronized,
      2. 数据类型:  int, float, short, long, double, boolean, char
      3. 导入导出:  export, import,
      4. 类:       class, static, public, private, super, protected, extends
      5. 其他:     package, native, interface, implements, enum, byte, abstract
      6. 判断:     goto
      7. 调试:     throws, debugger, final

      8. 解释：（分类不正确可以指出）
          * volatile:     在程序设计中，尤其是在 C 语言、C++、C# 和 Java 语言中，使用 volatile 关键字声明的变量或对象通常具有与优化、多线程相关的特殊属性。
          * transient:    Java 中 transient 关键字的作用，简单地说，就是让某些被修饰的成员属性变量不被序列化
          * synchronized: Java 中 synchronized 同步方法
          * protected:    Java 或 C中 protected 类成员的修饰属性
          * enum:         枚举
          * abstract:     抽象

  保留字每个版本都是不一致的，es3 定义的大量的保留字，但是在 es5 中的保留字相对来说就很少，并且是有严格模式和非严格模式之间的区别

  4. es5: 保留字
      1.  非严格模式：    class, enum, extends, super, const, export, import
      2.  "use strict": 在非严格模式基础上增加了，后面的保留字：implements, package, public, interface, private, static, let, protected, yield, eval, arguments

---------

参考文献：

* 《JavaScript 高级程序设计》 第三版
