---
title: 文件处理命令_cp

author: IceStone
created: '2020-01-14T08:08:08.21Z'
tags: Linux

---

# 文件处理命令_cp

Cp -r /tmp/Japan/cangjing /root

将目录/tmp/Japan/cangjing复制到目录/root下

 
Cp -rp /tmp/Japan/boduo /tmp/Japan/longze /root

将/tmp/Japan目录下的boduo和longze目录复制到/root下,保持目录属性

 
如果不加p的话文件复制的时间会与原来时间一样,

-p可以保持文件属性不变

 
Cp -r /tmp/Japan/cangjing /root更改后的文件名

将目录/tmp/Japan/cangjing复制到目录/root下,并且将文件的名称改为更改后的文件名

 
