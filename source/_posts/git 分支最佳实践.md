---
title: git 分支最佳实践
date: 2018-01-24 13:14:48
tags: git
---

-----
* 测试在 experience，用测试域名

* 测试完，服务端发布，合并到 preview，使用正式域名自测下

* 没什么问题就提交审核合并 master，打上 tag

### 测试环境
  * development （自测）
  * experience （服务端发布，提测）

### 正式环境
  * preview （服务端发布，自测）
  * master （线上）
