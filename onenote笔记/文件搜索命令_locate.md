---
title: 文件搜索命令_locate

author: IceStone
created: '2020-01-16T07:34:12.132Z'
tags: Linux

---

# 文件搜索命令_locate

Locate

消耗系统资源较小,

命令所在路径:/usr/bin/locate

权限:所有用户

语法:locate文件名

功能:在文件资料库中查找文件

范例:$locateinittab

它建立的有一个资料库,每一个文件新建都会被它记录

 
1.用locate查找新文件时需要更新资料库,可以手动更新:

Updatedb:更新locate的资料库

1. 如果文件存放在/tmp目录下,那么可能用locate是找不
到的,因为tmp目录是存放临时文件的,locate并不对其做记

录

--------------------------------------------------------------------

Locate-I文件名

查找时不区分大小写

 
 
 
 
 
 
 
