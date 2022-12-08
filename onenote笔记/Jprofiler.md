---
title: Jprofiler:

author: IceStone
created: '2020-04-17T14:58:29.56Z'
tags: jvm

---

# Jprofiler:

在idea中的配置:

//-Xms设置初始化内存分配大小

//-Xmx设置最大分配内存

//-XX:PrintGCDetails打印gc清理内存的信息

//-XX:+HeapDumpOnOutOfMemoryError栈溢出(OOM)的信息

//-Xms1m -Xmx8m -XX:+HeapDumpOnOutOfMemoryError


![](images/fb7812e2-0297-4178-a55a-2ce11e1ef51d.png) 

运行及结果:

![](images/b3a09c76-9613-4fcd-b22d-3c9d9bd947d9.png)他会生成一个.hprof的文件,在project目录下即可找到,


使用jprofiler打卡,可以查看内存状态

![](images/e4363b5d-1428-4d52-94b4-299c98e253ed.png)查看:


![](images/7f8717d3-3596-4148-8db2-1fec43446109.png) 

