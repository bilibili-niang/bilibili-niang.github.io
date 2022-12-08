---
title: 网络命令_netstat

author: IceStone
created: '2020-01-17T08:29:49.123Z'
tags: Linux

---

# 网络命令_netstat

路径:/bin/netstat

权限:所有用户

语法:netstat[选项]

功能:显示网络相关信息

 
选项:

-t:TCP协议

-u:UDP协议

-l:监听

-r:路由

-n:显示IP地址和端口号

范例:

# netstat -tlun查看本机监听的端口

# netstat -an查看本机所有的网络连接

# netstat -rn查看本机所有路由表

 
