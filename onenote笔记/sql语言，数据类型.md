---
title: sql语言，数据类型

author: IceStone
created: '2020-02-10T14:34:10Z'
tags: MYSQL

---

# sql语言，数据类型

sq语言:

DDL：数据定义语言--用来定义数据库对象：创建库，表，列等

DML:数据操作语言--用来操作数据库表中的记录

DQL:数据查询语言--用来查询数据

DCL:数据控制语言--用来定义访问权限和安全级别


whatsql?

SQL是Structured Quevy Language(结构化查询语言)的缩写

SQL是专为数据库建立的操作命令集,是一种功能齐全的数据库语言

在使用他时,只需要发出"做什么"的命令,"怎么做"是不用使用者考虑的


sql数据类型：

MySQL中定义数据字段的类型对你数据库的优化是非常重要的。

MySQL支持所有标准SQL数值数据类型

MYSQL支持多种类型，大致分为三类：

* 数值类型：

  ![](images/14c2b22a-7832-4e6c-80f8-5dfa7216b810.png)

  * 字符串类型

![CHAR 
VARCHAR 
TlNYBLOB 
ТТ.'УТЕХТ 
ВИОВ 
ТЕХТ 
МЕОШМТЕХТ 
LONGBLOB 
LONGTEXT 
0-2553% 
0-65535 
0-25573 
0-2557% 
0-65 5353% 
0-65 5353% 
0-16 777 2153% 
0-16 777 21576 
0-4 294 967 2953% 
0-4 294 967 2953-Ђ 
255 ](images/946acdf0-8318-4b7a-a077-069b09c567d2.png)

* 日期和时间类型

![](images/01acf769-ec46-4161-8859-f527bda7a230.png) 

 

常用数据类型：

double:浮点型，例如double（5.2）表示最多5位，其中必须有两位小数，即最大值为999.99

char：固定长度字符串；cahr(10)'abc    '(必须占用十个，没有十个就把后面的空出来)

varchar：可变长度字符串；varchar(10)'abc'（有几个字符串就只占几个）

text：字符串类型；

blob：二进制类型；

date：日期类型，格式为：yyyy-MM-dd;

time:时间类型，格式为：hh:mm:ss;

datetime:日期时间类型yyyy-MM-dd hh:mm:ss

 

在MySQL中，字符串类型和日期类型都要用单引号括起来：‘MySQL’‘2020-01-01’

