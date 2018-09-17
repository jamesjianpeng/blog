---
title: DOM 的历史
date: 2018-04-22 18:11:47
tags: DOM
---

--------------
### DOM 是什么
1. 文档对象模型（DOM, Document Object Model）:是针对 XML 但经过扩展用于 HTML 的应用程序编程接口（API Application Programming Interface）
    * 由于 HTML 是一种超文本标记语言，是在浏览器中展示网页用的，所以 DOM 其实针对浏览器为应用程序提供的编程接口

2. 产生的背景：(1998年10月)
    Netscape 和 微软 公司为获得更得更多的浏览器市场份额，都自己开发了 DHTML( Dynamic HTML ), 两个浏览器之间的网页不兼容，导致 web 网页的跨平台特性消失，增加应用的开发成本，于是负责制定 Web 通信标准的 W3C (World Wide Web Consortium，万维网联盟)开始规划 DOM

    HTML 规范的发展的发展：
      * 1992年11月     HTML 1.1 规范完成
      * 1997年         HTML 4.0
      * 1999年         HTML 4.1
      * 2014年10月     HTML 5.0 标准定制

3. DOM 级别

    1. DOM 0：指的就是 Internet Explorer 4.0 和 Netscxape Navigator 4.0 中最初支持的 DHTML

    2. DOM 1：
          * 主要目标： DOM 对象映射 HTML 文档结构
          * DOM core
          * DOM HTML：DOM HTML 是建立在 DOM core 的基础之上，扩展 HTML 的对象和方法

    3. DOM 2
          * DOM 2 是在 DOM 1 的基础之上进行扩充：
          * DOM View（ DOM 视图）：定义跟踪不同文档
          * DOM Events（ DOM 事件）：定义事件和事件处理的接口
          * DOM Style （ DOM 样式 ）：定义基于 CSS 为元素应用样式的接口
          * DOM 遍历和范围 （ DOM Traversal and Range ）：定义了遍历和操作文档的接口

    4. DOM 3
          * DOM3 级则进一步扩展了 DOM：
          * 引入了以统一方式加载和保存文档的方法（在 DOM 加载和保存模块（DOMLoad and Save）中定义）
          * 新增了验证文档的方法（在 DOM 验证（DOMValidation）模块中定义）
          * 也对 DOM core 进行了扩展（支持 XML 1.0）

--------------
### 其他的 DOM 标准

除了 DOM core 和 DOM HTML 之外其他的 DOM标准：
* SVG( 可伸缩矢量图 )
* MathML( 数学标记语言 )
* SMIL( 同步多媒体集成语言 )

-------------
### 其他时间：
* 1989 年互联网才开始转为民用
* 1999年 IE5 中首次实现 DOM

---------

参考文献：

* 《JavaScript 高级程序设计》 第三版
