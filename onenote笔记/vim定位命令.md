---
title: vim定位命令

author: IceStone
created: '2020-01-18T07:21:49.273Z'
tags: Linux

---

# vim定位命令

:set nu设置行号

:set nonu取消行号

Gg到第一一行

G到最后一行

nG到第n行

:n到第n行

$移至行尾

0移至行首

 
X删除光标所在处字符

nx删除光标所在处后n个字符

dd删除光标所在行,ndd删除n行

dG删除光标所在行到文件末尾内容

D删除光标所在处到行尾内容

:n1,n2d删除指定范围的行

 
yy复制当前行

nyy复制当前及以下n行

dd剪切到当前行

ndd剪切当前行及以下n行

p` P粘贴在当前光标所在行下或行上

