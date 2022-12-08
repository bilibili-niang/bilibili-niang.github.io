---
title: 用户管理命令,默认值文件,useradd,passwd

author: IceStone
created: '2020-01-26T08:12:01Z'
tags: Linux

---

# 用户管理命令,默认值文件,useradd,passwd

# useradd [选项]用户名

用户添加命令:useradd

-uUID:手工指定用户的UID号

-d家目录:手工指定用户的家目录

-c用户说明:手工指定用户的说明

-g组名:手工指定用户的初始组

-G组名:指定用户的附加组

-sshell:手工指定用户的登录shell,默认是/bin/bash

 
修改用户密码:passwd

-S查询用户密码的状态,仅root用户可用

-l暂时锁定用户,仅root用户可用，（使用vim  /etc/shadow可查看到锁定的账户真正的密码串的后面多了一个感叹号）

-u解锁用户,仅root用户可用

--stdin（两个-）可以通过管道符输出的数据作为用户的密码

 
用户默认值文件:

/etc/default/useradd

|GROUP=100|用户默认组|
|---|---|
|HOME=/home|用户家目录|
|INACTIV=-1|密码过期宽限天数|
|EXPIPE=|密码失效时间|
|SHELL=/bin/skel|默认shell|
|CREATE_MAIL_SPOOL=yes|是否建立邮箱|
 
另一个用户默认文件:

/etc/login.defs

|PASS_MAX_DAYS  99999|密码有效期,第五字段|
|---|---|
|PASS_MIN_DAYS0|密码修改间隔|
|PASS_MIN_LEN5|密码最小5位|
|PASS_WARN_AGE7|密码到期警告|
|UID_MIN500|最小和最大UID范围|
|GID_MIN60000| 
|
|ENCRYPT_METHOD   SHA512|加密模式|
 
产看密码状态：

#passwd-Slamp

lampPS 2013-06 0 99999 7 -1

#用户名密码设定时间（2013-01-06）密码修改时间（0）

密码有效期（99999）警告日期（7）密码不失效（-1）

InkNode is not supported