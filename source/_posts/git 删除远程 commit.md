---
title: git 删除远程 commit
date: 2017-12-12 17:05:42
tags: git
---

-----
### 发现上一个 push  到远程分支的 commit 有问题，需要删除它，并工作区的代码不受到影响：

1. 是回到指定的 commit 版本，回到指定的版本的时候 stash 中的代码都会 pop

```
  $ git reset commit_id
```

2. 把工作区的代码储藏，这一步是为了准备同步 本地和 远程的版本

```
  $ git stash
```

3. 为啥不用 git push 而是使用强制推送？，你试试就知道

````
  $ git push --force
```

4. 把储藏的文件释放到工作区中 为下一次提交做准本

```
  $ git stash pop
```

5. 正常的 push 流程

```
  $ git add <file>....
  $ git commit -m "xxx"
  $ git push
```
