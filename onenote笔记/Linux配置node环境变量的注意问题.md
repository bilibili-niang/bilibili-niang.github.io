---
title: Linux配置node环境变量的注意问题:

author: IceStone
created: '2021-06-02T08:36:08.004Z'
tags: Linux

---

# Linux配置node环境变量的注意问题:

常用命令

1、可用 export 命令查看PATH值

export

* 1
2、单独查看PATH环境变量，可用：

echo $PATH

* 1
3、添加PATH环境变量(临时)，可用：

export PATH=/opt/STM/STLinux-2.3/devkit/sh4/bin:$PATH

* 1
上述方法的PATH 在终端关闭 后就会消失。

4、永久添加环境变量(影响当前用户)

vim ~/.bashrc

* 1
在文档最后，添加:

export PATH="/opt/STM/STLinux-2.3/devkit/sh4/bin:$PATH"

* 1
保存，退出，然后运行：

source /etc/profile

* 1
5、永久添加环境变量(影响所有用户)

vim /etc/profile

* 1
在文档最后，添加:

export PATH="/opt/STM/STLinux-2.3/devkit/sh4/bin:$PATH"

* 1
保存，退出，然后运行：

source /etc/profile

