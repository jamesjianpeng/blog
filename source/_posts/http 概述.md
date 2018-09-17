---
title: http 概述
date: 2018-06-26 17:21:01
tags: http
---

------

###  HTTP 是什么，作用是什么
   * HTTP 是一种数据传输协议，作用是：确保数据在传输过程中不会被损坏或产生混乱。是应用层协议
   * HTTP 在网络中所处的层次：应用层

#### web客户端
   * 什么是web客户端：用户使用的终端
   * 客户端的作用是什么：发送 HTTP 请求，展示 HTTP 服务器返回的数据

#### 服务器
   * 什么是服务器
   * 客户端的作用是什么： HTTP服务器是存储着因特网的资源

#### 资源的种类
   1. 媒体标签 MIME type
      *  json格式的文本文档: Content-Type: application/json
      *  HTML 格式的文本文档：Content-Type: text/html
      *  ASCII 文本文档：Content-Type: text/plain
      *  JPEG格式的图片：Content-Type: image/jpeg
      *  GIF格式的图片：Content-Type: image/gif
      *  Apple 的 QuickTime 电影格式：Content-Type: vdeo/quicktime
      *  微软的 PowerPoint 演示文件：Content-Type: application/vnd.ms-powerpoint

   2. URI
      服务器资源名被称为统一资源标识符，（ Uniform Resource Identifier, URI ）具有唯一性
      - 两种形式：URL 和 URN
        URL ：统一资源定位符，描述一台特定服务器上某资源的特定位置.例如： http://www.joes-hardware.com/specials/saw-blade.gif，URL 指明了协议，服务器，本地资源
        URN ：统一资源名，作为特定内容的唯一名称使用的，与目前的资源所在地无关。通过 URN 可以用同一个名字通过多种网络访问协议来访问资源。例如：urn:ierf:rfc:2141。在使用阶段，尚未大范围使用

### 事务
  - 一个 HTTP 事务由一条（从客户端发往服务器的）请求命令和 一个（从服务器发回客户端的）响应结果组成。这种通信是通过名为 HTTP 报文 （ HTTP message ）的格式化数据进行的

#### 方法
  -  GET
  -  PUT
  -  DELETE
  -  POST
  -  HEAD
#### 状态码
  - 必要性：每个 HTTP 响应报文返回时都会携带一个状态码
  - 形式：三位数字，伴随着么个数字状态码，HTTP 还会发送一条解释性的 ‘ 原因短语 ’
  - 作用：告知客户端请求是否成功，或者是否需要采取其他动作

#### Web页面中可以包含多个对象
  - 一个首页，首先获取 HTML ，然后获取每个嵌入式的图片，其他的程序。

#### 报文
  - 形式：
    - HTTP 报文由一行一行的简单字符串组成的，HTTP 报文是纯文本，不是二进制代码。
    - HTTP 报文包括三部分：
      - 起始行：
        作用：在请求报文中用来说明做些什么，在响应报文中说明出现来什么情况
      - 首部字段
      - 主体
        作用：在请求主体中包括来要发送给 Web 服务器的数据，响应主体中装载来要返回给客户端的数据
  - 种类：请求报文 （ request message ）, 响应报文 （ response message ）

### 连接 （TCP）

  1. TCP 什么是TCP 作用是什么
    - TCP ( Transmission Control Protocol ), 是一种传输控制协议
