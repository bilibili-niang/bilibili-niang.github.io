---
title: DDL

author: IceStone
created: '2020-02-10T15:10:26Z'
tags: MYSQL

---

# DDL

创建数据库:

create database数据库名character utf8;


修改数据库:

alter database数据库名character gdk;


创建学生表:

创建表:指定表的结构
1.先进入一个数据库;

2.输入建表的命令:

CREATE TABLE(

列名1列的类型[约束];

列名2列的类型[约束];

............

列名n列的类型[约束]

);

注意:最后一行没有逗号

表中添加字段:

altertable表名add字段名类型;


更改已有字段类型:

altertable表名modify字段名类型(约束);


查看表结构:

desc表名;


修改表名:

RENAME TBALE表名TO要修改的表名;


修改表的字符集:

ALTER TABLE表名CHARACTER SET字符集名称;


修改表的列名:

ALTER TABLE表名CHANGE原始列名新列名数据类型;


查看表的创建细节:

SHOW CREATE TABLE表名;


删除一列:

ALTER TABLE表名DROP字段名;


删除表:

DROP TABLE表名;

定义学生表:id,name,age,email
CREATE TABLE studebt(

idbigint

name              varchar(20)

email              varchar(20)

age                  int

);



如:

![](images/dece6b6e-0be3-49c7-9baf-9cdb86314725.png) 

