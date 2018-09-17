---
title: git 撤销 - 针对本地没有 push 的 commit
date: 2018-03-09 11:10:04
tags: git
---

-----
### 撤销已经 commit 的文件和 msg，没有 push 之前

```
  $ git add file_name

  $ git commit -m (git cz)
```

发现我们的 commit 有问题，msg 有误，和遗漏或缺少 我们想要的 file，使用一下操作：

```
  $ get reset --soft HEAD^
```

  * HEAD^ 代表上一次(HEAD~1)
  * HEAD~2 代表上二次
