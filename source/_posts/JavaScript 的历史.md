---
title: JavaScript 的历史
date: 2018-09-14 17:36:20
tags: history
---

---------

### JavaScript 的历史概述

1. 在 JavaScript 之前表单的验证是在服务端进行
      * 对应用户说体验不好
      * 对于服务端来说，会在一定程度上浪费服务端的资源

2. 为了解决这样的提高 web 应用的性能和提高用户的体养验 JavaScript 便出现了

      * 1995年2月 JavaScript 1.0
          Netscape 公司开发的 Netscape Navigator 2 浏览器上支持名为 LiveScript 的脚本。为了按照预期的时间发布这个新的语言，该公司就和 Sun 公司合作一起研发。最终成功发布，是不过为了蹭 Java 的顺风车，临时改名为 JavaScript

      * 199?年?月 JavaScript 1.1
          Netscape Navigator 3 发布，JavaScript 1.0 并更新到 JavaScript 1.1

      * 1996年8月 JScript 1.0
          Netscape 公司发布的 JavaScript 脚本为 Netscape Navigator 获得更多的用户，它的竞争对手 微软 为了不失去原来的地位，决定发布 Internet Explorer 3 浏览，并且支持自己研发的 JScript 脚本，浏览器市场份额大战开始了

      * 1997年
          JavaScript 1.1 为了实现统一的规范，被作为蓝本送到欧洲计算机制造商协会(ECMA，European Computer Manufactu Association)，该协会指定 39号技术委员会（TC39, Technical Committee #39）去负责：“标准化一种通用，跨平台，供应商中立的脚本语言的语法和语意”，

          TC39 是由 Netscape 微软 Sun 等其他关注浏览器脚本语言发的公司的程序员组成，经过几个月的努力：ECMA-262 -- 定义一种名为 ECMAScript 的新脚本语言的标准

      * 1998年
          ISO/IEC （国际标准化组织和国际电工委员会）也采用 了 ECMAScript 作为标准（ISO/IEC-16262）

      从这以后，各大浏览器开发商就开始致力于将 ECMAScript 作为各种的 JavaScript 实现的基础

---------
### JavaScript 的发展

* JavaScript 的实现比 ECMAScript 实现要更多
    * 浏览器的 JavaScript 包括的部分：ECMAScript，DOM，BOM

* JavaScript 除了可以在浏览器这个宿主环境中运行：
    * 服务端 使用 node.js
    * Adobe 使用 ActionScript

    服务端的node.js Adobe的ActionScript 以及 浏览器中的JavaScript 都是 ECMAScript 的实现

---------
### ECMAScript 的版本

1. ECMA-262第1版

    这个版本是 Netscape Navigator 3 浏览器中的发布的 JavaScript 1.1 为基础，不过有些改动：

      * 支持 Unicode （支持多语言开发，为什么使用 Unicode 之后就支持多语言开发？）
      * 对象也变成和任何一个浏览器平台无关

2. ECMA-262第2版：这个版本就是编辑和加工，，没有新增，删除，修改任何内容

3. ECMA-262第3版：这个版本才是真正的修改，这个版本标志着 ECMAScript 成为一个真正的编程语言，修改的内容：
      * 支持正则表达式
      * 新控制语句
      * try-catch 异常处理的支持
      * 适应国际化的标准的修改

4. ECMA-262第4版
      * 这个版本中新增的内容：强类型变量，新语句，新数据结构，真正的类，经典继承
      * TC39 中的一个小组发现这个版本改动太大，于是建议较小的修改：ECMA-262第3.1版 代替 ECMA-262 第4版，但是 3.1 这个版本直到2009年12月3日，为了区别 第4版 于是作为 ECMA-262第5版 发布

5. ECMA-262第5版（2009年12月3日）

    这个版本实际是 ECMA-262第3.1版
---------

### 兼容情况

2008年，五大主流 Web 浏览器(IE，Firefox，Safari，Chrome和Opera)全都做到与 ECMA-262 兼容

1. ES3:
    IE5.5 - IE7
    Safari 3.x
    Chrome 1+
    Firefox 1 ~ 2 / 3.0x

2. ES5(不完全兼容):
    IE8
    Safari 4.x~5.x
    Firefox 3.5 ~ 3.6

3. ES5:
    IE9+
    Firefox 4.0+
---------

参考文献：

* 《JavaScript 高级程序设计》 第三版
