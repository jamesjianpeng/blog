---
title: git 提交和追加提交
date: 2018-01-20 8:50:00
tags: git
---

-----
### 追加提交信息和文件

- 我想修改 commit msg 和 追加提交文件使用一下操作

```
  $ git add <file_1>...

  $ git commit -m "msg"
```

  * 我们提交之后发现还需要追加提交的文件，并且需要重新写 msg

```
  $ git add <file_2>...

  $ git commit -a
```

  * 之后就会出现把 file_2... 加入之前的 commit 中并重写 msg , 编辑完之后:wq , 追加就成功了
