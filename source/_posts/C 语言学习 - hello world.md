---
title: C 语言学习 - hello world
date: 2018-02-23 17:42:27
tags: c
---

-----
### Mac 去编译和链接 c 程序

例子：
如：/helloWrold.c

``` bash
#include <stdio.h>
int main()
{
    printf("hello world!");
    return 0;
}
```

#### 编译和链接的步骤合并

``` bash
$ cc helloWrold.c
```

将会生成 a.out 在 mac 下可执行文件的后缀，windows 下则是 a.exe 结尾

#### 编译和链接的步骤可分开

``` bash
$ cc -c helloWorld.c
```

- 生成 helloWorld.o

``` bash
$ cc -o helloWorld helloWorld.o
```

生成 helloWorld

#### 执行编译后的文件

``` bash
$ ./a.out
```
或者
``` bash
$ ./helloWorld
```

#### 总结

  1. 编写程序 -> 编译 -> 链接 -> 运行
