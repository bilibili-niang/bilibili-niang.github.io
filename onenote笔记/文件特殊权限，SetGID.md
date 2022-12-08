---
title: 文件特殊权限，SetGID

author: IceStone
created: '2020-02-02T11:21:08.408Z'
tags: Linux

---

# 文件特殊权限，SetGID

* /usr/bin/locate是可执行二进制程序，可以赋予SGID
* 执行用户lamp对/usr/bin/locate命令拥有执行权限
* 执行/usr/bin/locate命令时，组身份会升级为slocate组，而slocate组对/var/lib/mlocate/mlocate.db数据库拥有r权限，所以普通用户可以使用locate命令查询mlocate.db数据库
* 命令结束，lamp用户的组身份返回为lamp组
 
 
SetGID针对目录的作用：

* 普通用户必须对此目录拥有r和x权限，才能进入此目录
* 普通用户在此目录中的有效组会变成此目录的属组
* 若普通用户对此目录拥有w权限时，新建的文件默认的属组是这个目录的属组
 
SetGID针对文件的作用：

* 只有可执行的二进制程序才能设置SGID权限
* 命令执行者要对该程序拥有x（执行）权限
* 命令执行在执行程序的时候，组身份升级为该程序文件的属组
* SetGID权限同样为只在该程序执行过程中有效
 
 
设定SetGISD

2代表SGID

chmod 2755文件名

chmod g+s文件名

