---
title: ACL权限,setfacl,mask

author: IceStone
created: '2020-01-30T12:58:55.973Z'
tags: Linux

---

# ACL权限,setfacl,mask

#### ACL权限简介和开启：

查看分区ACL权限是否开启

#dumpe2fs-h/dev/sha3

#dumpe2fs命令是查询指定分区详细文件系统信息的命令

选项：

-h仅显示超级块中信息，而不显示磁盘块组的详细信息


临时开启分区ACL权限

#mount-oremount.acl/

#重新挂在根分区，并挂载加入acl权限

#### 永久开启分区ACL权限：

#vi/etc/fstab

uuid=c2ca6f57-b15c-43ea-bca0-f23083d8bd2 /  ext4      default,acl       1 1

#(在default后面加上acl)

#mount-oremount/

#重新挂载文件系统或重新启动系统，使修改生效


查看&设定ACL命令：

查看：使用ll -d查看时可以看到权限后面有+号，即代表有ACL权限

#getfacle文件名

#查看acl权限

选项：

-m设定acl权限

-x删除指定的acl权限

-b删除所有的acl权限（文件夹中所有的ACL权限）

-d设定默认的acl权限

-k删除默认acl权限

-R递归设定acl权限

#setfacl  u:用户名：权限文件

#给用户赋予r-x权限，使用“u:用户名：权限”格式


#groupaddd tgroup2

#setfcl  -m  g:tgroup2:rwx  project/

#为组tgroup2分配acl权限，使用“g:组名：权限”格式



 

最大有效权限：mask

mask是用来指定最大有效权限的，如果我给用户赋予了acl权限，是需要和mask的权限“相与”才能得到用户的真正权限（相与：两者都为真，需要用户与mask权限相同）

#setfacl-mm:权限文件名

#调整最大权限

会影响所属组和ACL权限，并不会影响所属人的权限


#setfacl-xg:用户组文件

#删除指定用户组的ACL权限


#setfaacl-d文件名

#删除该目录下所有的ACL权限

