---
title: 性能优化之 DOM
date: 2018-09-02 19:57:40
tags: [ JavaScript, DOM ]
---

------
1. 访问和修改 DOM 元素
2. 修改 DOM 元素的样式会导致重绘（repaint）和重排（reflow）
3. 通过 DOM 事件处理与用户的交互

### 什么是 DOM, 他为什么慢

1. 文档对象模型（DOM）是一个独立于语言的，用于操作 XML 和 HTML 文档的程序接口（API）

2. 浏览器中的 DOM :

    1. 在 web 应用程序中获取 XML 文档，并使用 DOM API 用来访问文档中的数据，DOM 再浏览器中的接口却是用 JavaScript 实现的
    2. 再浏览器中通常把 DOM 和 JavaScript 独立实现
        * IE 中 JavaScript 的实现名为 JScript 位于 jscript.dll 文件中， DOM 的实现则是在另外一个库中：mshtml.dll（内部称 Trident ）;分离的优点：允许使用其他技术和语言共享使用 DOM 和 Trident 提供的渲染函数
        * Safari 中的 DOM 和渲染使用 Webkit 中的 WebCore 实现，JavaScript 部分是由独立的 JavaScriptCore 引擎（ 最新版本的名字为 SquirrelFish）
        * Google Chrome 同样使用 Webkit 中的 WebCore 库来渲染页面，JavaScript 部分名为 V8 的引擎
        * Firefox 是使用 名为 Gecko 的渲染引擎来渲染页面， JavaScript部分是引擎名为 SpiderMonkey （ 最新：TraceMonkey）的引擎

3. DOM 为什么慢
    1. 天生就慢（简单理解：两个互相独立的功能只要通过接口彼此链接，就会产生消耗）
        * 解决方案：尽量在 ES（ js 三大部分之一）中处理，尽可能减少 DOM 操作
    2. 天生慢的具体表现：

        * DOM 的访问和修改 --> 会导致浏览器重新计算页面的几何变化 --> 通用法则：减少访问 DOM 的次数，把运算尽量留在 ECMAScript 这一端

          * innerHTML 和 DOM 方法（document.createElement() 和 document.createTextNode()）
          * 节点克隆（element.cloneNode()）,比上面两种方式要快一点点

          * HTML 集合（类数组列表）底层文档对象更新时，他也自动更新
            获取 HTML 集合
              1. document.getElementsByName() // 获取
              2. document.getElementsByClassName() // 获取以 class name 组成的集合
              3. document.getElementsByTagName()
              4. document.images // 页面所有的 img 元素
              5. document.links // 页面所有的 a 元素
              6. document.forms[0].element // 页面中第一个表单的所有字段



4. 重排和重绘

  什么是重排，影响因素

  1. 重排：DOM 的变化影响来元素的几何属性（比如宽高等）其他的元素可能会因此受收到影响，浏览器会使渲染树中受到影响的部分失效，并重新构造渲染树，这个过程称为：重排

  2. 重排何时发生（如何避免重排重绘）
    * 添加和删除可见的 DOM 元素
    * 元素位置改变
    * 元素尺寸改变（包括：padding margin border height width）
    * 内容改变，例如：文本改变或图片被另外一个不同尺寸的图片代替
    * 页面渲染器初始化
    * 浏览器窗口尺寸变化

    1. 如何避免减少重排：

        * 针对使用 js 修改样式： el.style.xxx 使用 el.style.cssText 合并，或者使用 el.className
        * 正对批量修改 DOM ：
          1. 使用元素 脱离文档流（如何脱离文档流）
              * 隐藏元素
              * 使用文档片断（docuement fragment）在当前 DOM 之外构建一个子树，再把它拷贝回文档中

          2. 对其应用多重改变
          3. 把元素带回文档中

  3. 渲染树变化的排队与刷新
      * 获取布局信息的操作会导致队列刷新(为获取最新的布局信息，会强制页面进行重排以获取最新的尺寸)
          1. offsetTop, offsetLeft, offsetRight, offsetBottom
          2. scrollTop, scrollLeft, scrollRight, scrollBottom
          3. clientTop, clentLeft, clientWidth, clientHeight


  4. 什么是重绘，影响因素
    1. 当 DOM 元素的改变不会影响元素的几何属性的时候，页面会在发生的区域进行重绘

  5. 重排和重绘的关系
    1. 重排一定会引起重绘；重绘不一定会引起重排

  6. 其他的优化内容：
    * 缓存布局信息：避免多次获取元素的尺寸，他会强制页面进行重排，以快速获取页面的精确的尺寸
    * 动画优化：脱离文档流，减少对页面布局的影响
    * 事件委托：避免在每个需要触发的元素上绑定事件，只需要在我们指定的父级上绑定事件
    * 尽量少访问 HTML 集合，HTML 集合时类数组列表，但是访问数组比访问类数组要快
    * 使用访问局部变量去访问 DOM
    * DOM 的方法去访问元素的改进
    * 选择 API 的使用
---------
参考文献：

* 《高新能的 JavaScript》
