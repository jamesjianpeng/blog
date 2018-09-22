---
title: git 初始仓库
date: 2017-11-08 14:00:06
tags: git
---
-----
### 初始化仓库

```sh
  $ git init
  $ git add <file>
  $ git commit -m "xxx"
```
### 首次强制拉取

```sh
  git pull origin master ----allow-unrelated-histories
```

### 首次推送
```
  git push -u origin master
```

### config 用户名和邮箱

```
  $ git config user.name "xxx"
  $ git config user.email "xxx"
```
### 查看配置文件

```
  $ git config --list
```
### 拉去其他分支，并切换到该分支

```
  $ git fetch orign <branch_name>
  $ git checout <fetch_branch_name>
```

### 代码 clone 的方式
  代码库的链接：

```
  $ https: https://gitlab.pengjiandry.com/root/cnodeNews.git
  $ ssh: git@gitlab.pengjiandry.com:root/cnodeNews.git
```

  第一种方式：使用默认的用户和密码

```
  $ git clone https://gitlab.pengjiandry.com/root/cnodeNews.git
```

第二种方式：显示的指定用户和密码

```
  $ git clone http://username:password@gitlab.pengjiandry.com/root/cnodeNews.git
```

第三种方式：使用 ssh, 在 clone 之前请先检查一下 ssh 密钥设置

```
  $ git clone git@gitlab.pengjiandry.com:root/cnodeNews.git
```
  ssh密钥的生成：

  1. 需要的操作：先生成一个在 ~ (/User/pengjian) ~/.ssh 下

```
  $ ssh-keygen -t rsa -C "your.email@example.com" -b 4096
```

  * 第一个交互是输入名字，默认是：id_rsa
  * 完成后会生成两个文件： id_rsa.pub / id_rsa
  * 在服务端就是需要 id_rsa.pub 的内容

  2. ~/.ssh/config 其中一个 ssh 密钥的配置

```
  Host git.coding.net # git的访问地址
  User 2393375953@qq.com
  PreferredAuthentications publickey
  IdentityFile ~/.ssh/coding_rsa
```
