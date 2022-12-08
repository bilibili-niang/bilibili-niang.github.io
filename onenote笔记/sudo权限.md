---
title: sudo权限

author: IceStone
created: '2020-02-05T12:33:01.186Z'
tags: Linux

---

# sudo权限

* sudo的操作对象是系统命令
* root把本来只能超级用户使用的命令赋予普通用户执行
 
sudo的使用：

#visudo（没有空格）

#实际修改的是/etc/sudoers文件

 
root            ALL=(ALL)                         ALL

#用户名被管理的主机地址授权命令（绝对路径）

（意为：允许某一个用户在该ip网段（被访问主机的ip地址）执行某些命令）

 
#%wheel   ALL=(ALL)                          ALL

#%组名被管理主机的地址=（可使用身份）授权命令（绝对路径）

 
查看被赋予了那些命令：

#sudo -l

被赋予root权限后在使用时必须写具体的命令

 
 
