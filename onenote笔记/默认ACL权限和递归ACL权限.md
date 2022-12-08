---
title: 默认ACL权限和递归ACL权限

author: IceStone
created: '2020-02-02T05:23:14.102Z'
tags: Linux

---

# 默认ACL权限和递归ACL权限

递归ACL权限：只能针对目录

递归是父目录在设定ACL权限时，所有的子文件和子目录也会拥有相同的ACL权限。（针对现有的文件）

#setfacl -m u:用户名：权限-R文件名(目录下的子文件)

 
 
默认ACL权限：只能针对目录

默认ACL权限的作用是如果给父目录设定了默认ACL权限，那么父目录中所有新建的子文件都会集成父目录的ACL权限(针对新建文件)

#setfacl-md:u:用户名：权限文件名

 
