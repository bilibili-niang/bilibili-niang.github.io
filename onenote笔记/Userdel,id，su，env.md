---
title: Userdel,id，su，env

author: IceStone
created: '2020-01-30T11:51:27.703Z'
tags: Linux

---

# Userdel,id，su，env

#userdel [-r]用户名

选项：

-r删除用户的同时删除出用户家目录

 
手工删除用户：

#vi/etc/passwd

#vi /etc/shadow

#vi /etc/group

#vi /etc/gshadow

#rm -rf /var/spool/mail/lamp

#rm -rf /home/lamp/

Id查询用户的id，和uid

 
env，直接输入，可以查询当前用户的环境变量

 
Su用户切换

$su -root

如果没有加“-”，则用户切换不完全

$su -rooot -c "useradd user3"

#不切换成root，但是执行useradd命令添加user3用户

