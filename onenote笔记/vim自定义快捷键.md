---
title: vim自定义快捷键

author: IceStone
created: '2020-01-19T08:47:22.906Z'
tags: Linux

---

# vim自定义快捷键

导入命令执行结果:r!命令

定义快捷键:map快捷键触发命令

范例::map^PI#<ESC>(^p是CTRL+v+p一起按下去)

:map^B0x

连续行注释:n1,n2/^/#/g

:n1,n2/^/#//g

:n1,n2/^^^//g

替换:abmymailsamlee@lampbrother.net

 
在一个文件1中导入文件2:

:r要导入的文件

导入位置是光标所在的位置

编辑shell脚本时常用

 
替换:abmymailsamlee@lampbrother.net

 
