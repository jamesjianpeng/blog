---
title: JavaScript 的使用 script 标签
date: 2018-03-04 18:01:21
tags: [ JavaScript, HTML ]
---

-----
### script 标签
    在 HTML 4.01

      1. 属性
          [1] async   下载之后立刻执行，载下载期间不影响页面的其他操作（页面的解析和展示，后者执行后面的代码）[ HTML5 ]
          [2] defer   需要等 页面中所有的 html 都解析完成，在 window.onload 之前，执行 defer
          [3] charset 规定展示 JavaScript 代码哪一种字符集进行编码展示
          [4] scr     这个是需要执行的代码的外部文件
          [5] type    表示编写该脚本用到的语言：type="text/javascript"

      2. script 标签的使用
          [1] 内嵌
              写在 `<script> </script>` 标签之间的代码

          [2] 外链
              通过 src 属性链接的外部文件

          这两种写法值得注意的地方：

              1. 在内嵌的写法中，' </script> ' 会报错（需要转义：'<\/script>'），但是在外部链接中就不会报错
              2. 在代码解释和执行这块差不多：
                  [1] 从上到下解释并执行
                  [2] 遇到变量和函数进行解释，保存到当前的执行环境
                  [3] 在 JavaScript 代码进行解释和执行完成之前，页面的处理会暂时停止
                  [4] 使用 async 和 defer 则会改变该脚本文件的额处理方式

              3. 在 HTML 文档中必须使用 script 闭合标签
              4. 使用 src 链接外部文件必须要使用 .js 文件名
              5. 在同一个 script 标签中，使用 外链 和 内嵌 同时使用，则外链的脚本会生效果，内嵌则不会生效
              6. script 标签中的 src 必须是一个以 .js 结尾资源的路径，否则显示资源加载失败
              7. script 中的 src 属性是支持跨域获取资源（和 img 中 src 效果一致）

      3. script 的位置，延迟脚本 和 异步脚本
          [1] 传统的做法 script 标签和 link 标签放在一起：这样做会有问题，等多所有的 js 和 css 文件加载完之后才能才能去解析 HTML 渲染页面
          [2] 现在 web 应用程序的改进之后的做法：把 script 标签放在 body 的后面，等页面解析并渲染之后再下载，解析和执行脚本，这样减少 HTML 页面出现在用户的面前
          [3] script 标签中 defer 和 async 的使用
              a. script 支持 defer 属性，可是把 script 标签放在任何位置（这样可能不好管理脚本），多个外部文件通过 src 加载进来，若多使用 defer 会有问题，执行的顺序是无法控制的
              b. async 是去下载并执行，在下载期间不会组织其他的页面的行为，async 属性的脚本是一定会在 window.onload 事件之前，在 DOMContentLoaded 事件触发之前

      4. XHTML 中使用
          [1] 一些字符必须使用 实体符号 代替。特殊字符 '<'，使用 '&lt' 实体符号代替

          [2] 若想按照正常的方式写 JavaScript 则需要使用 CDATA 片段（为了不降低 JavaScript 代码的可读性，方便维护）
          ```html
              <script>
                  <! [CDATA[
                      ... javascript 代码片段 ...
                  ]] >
              </script>
          ```

          [3] 有些浏览器是不兼容 XHTML, 则需要使用注释的语法（为了兼容不支持 XHTML 的浏览器）
          ```html
              <script>
                  // <! [CDATA[
                      ... javascript 代码片段 ...
                  // ]] >
              </script>
          ```
      5. 不推荐的语法
          [1] 在 script 标签纸中使用 HTML <!-- --> 注释
          ```HTML
            <script>
                <!--
                    ... javascript ...
                -->
            </script>
          ```

          [2] 之前为什么浏览器会支持这种语法：最早引入 script 元素的时候，和传统解析 html 的规则有冲突，会把 script 中的脚本展示在页面中，所以需要这个方法兼容

      6. 推荐使用外部文件，原因：
          [1]  可维护性
          [2]  可缓存和提高脚本复用程度
          [3]  未来的趋势：使用外部文件则可以不使用兼容 XHTML 和不知 script 标签的处理，没有兼容性问题

      7. 文档模式
          [1] 混杂模式
          [2] 标准模式
          [3] 准标准模式（兼容 标准模式和混杂模式）

          文档模式的设置：使用 !DOCTYPE 来设置
          标准模式设置如下：
          ```html
              <!DOCTYPE html>
          ```

          不同的文档模式会导致浏览器对于 CSS 的内容呈现，在某些情况下也会影响 javascrit 的解析执行

      8. noscript 标签的使用
          [1]浏览器不支持脚本的时候
          [2] 在 javascript 被禁止

          其他正常情况下 noscript 内容会隐藏起来

          ```html
            <noscript>
                <p>本页面需要浏览器支持（启用）JavaScript</p>
            </noscript>
          ```

------

参考文献：

* 《JavaScript 高级程序设计》 第三版
