---
title: DML

author: IceStone
created: '2020-02-12T09:42:46.102Z'
tags: MYSQL

---

# DML

查询表中的所有数据:

SELECT * FROM表名;

 
插入操作:

INSERT INTO表名(列1,列2.....) VALUE (列值1,列值2....);

另一种方法:

INSERT INTO VALUE 表名(列值1,列值2....);

(没有写列,相当于列值时写全部的)

 
注意事项:

列名与列值的类型,个数,顺序要一一对应.

值不要超出列定义的长度

插入的日期和字符一样,都使用引导括起来

批量插入:

INSERT INTO表名(列1,列2.....) VALUES (列值1,列值2....),(列值1,列值2....);

 
 
更新操作:

UPDATE表名SET列=n列='字段' WHERE某一列=已有值;

 
在原来基础上加1:

UPDATE students SET age=age+1 WHERE name='wc';

 
删除操作:

DELETE FROM表名[WHERE列名=值]

TRUNCATE TABLE表名;

 
DELETED与TRUNCATE的区别:

DELETE删除表中的数据,表结构还在

TRUNUCATE删除是直接把表DROP掉,然后再创建一个同样的新表,执行速度比DELETE快

 
 
limte

