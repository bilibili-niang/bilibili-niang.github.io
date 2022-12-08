---
title: 文件搜索命令_grep

author: IceStone
created: '2020-01-16T10:39:02Z'
tags: Linux

---

# 文件搜索命令_grep

路径:/bin/grep

权限:所有用户

功能:在文件中搜寻字符串匹配的行并输出

语法:grep-iv[指定字串][文件]

功能:在文件中搜寻字串匹配的行并输出


-I不区分大小写

-v排除指定字符串(查看时去除指定字符串)


#grep -v ^#/etc/inttab

排除行首的指定字符#


范例:#grepmysql/root/iinstall.log

![](images/32f056f3-33b3-473f-9801-1fc1902a3145.png) 

