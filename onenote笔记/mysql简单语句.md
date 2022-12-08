---
title: mysql简单语句:

author: IceStone
created: '2020-02-17T07:58:49.067Z'
tags: MYSQL

---

# mysql简单语句:

CREATETABLE studen (创建表

id int PRIMARY KEY AUTO_INCREMENT,设置为主键且自动增长

name VARCHAR(20)  UNIQUE设置为不可重复

);


CREATE TABLEstu(

id INT PRIMARY KEY AUTO_INCREMENT,设置主键,主键自增长

name VARCHAR(20) UNIQUE NOT NULL,设置name,可以为空,但不允许重复

gender CHAR(1)

DEFAUT '男'设置gender,默认为男

);

 

 


关联外键的一张表:

CREATE TABLE stu(id INT PRIMARY KEY ,nameVARCHAR(50),age INT);


CREATE TABLEscore(sid INT ,score INT,

CONSTRAINT sc_st_fk FOREIGN KEY(sid) REFERENCES stu(id)

);


为表添加一列:

ALTER TABLE demo add gender CHAR(10);

修改表中一列

ALTER TABLE DEMO MODIFY gender varchar(5);

修改表名:

RENAME TABLE demo to demo1;

修改表的字符集:

ALTER TABLE demo1 CHARACTER SET utf8;

修改表的列名:

ALTER TABLE demo1 CHANGE id sid INT(20) ;

查看建表信息:

SHOW CREATE TABLE `demo1` ;

删除一列:

ALTER TABLE `demo1` drop `student`;

删除表:

drop table demo1;

修改列的数据类型:

ALTER TABLE `demo1` modify gender2 INT ;

表的重命名:

RENAME TABLE `demo1` to demo;

修改列名:

ALTER TABLE `demo` CHANGE id sid INT ;

查看表的字段信息:

DESC表名;

查看表的创建细节:

SHOWＣＲＥＡＴＥTABLE表名；

删除一列：

ALTER TABLE demo DROP gender2;

删除表：

DROP TABLE表名;

将sid数值自动加一:

UPDATE demo set score=score+1 WHERE sid=3;

查询性别为女,年龄为20的数据:

SELECT * FROM `student` WHERE s_sex='女' and `s_age` =20;

查询姓名为王菊或编号为1的数据:

SELECT * FROM `student` WHERE s_id=1 or s_name='王菊';

查询s_id为1,5,6的数据:

SELECT * FROM `student` WHERE s_id=1 or s_id=5 or s_id=6;

查询s_age为空的记录:

SELECT * FROM `student` WHERE `s_age`=null;

查询性别不为男的:

SELECT * FROM `student` WHERE s_sex<>'男';

查询年龄大于18,小于22的记录:

SELECT * FROM `student` WHERE s_age>18 and s_age<22;

或者:

SELECT * FROM `student` WHERE s_age BETWEEN 18 AND 22;


ALTER TABLE scoreADD CONSTRAINT sc_st_fk FOREIGN KEY REFERENCES stu(id);为分数表添加约束


CREATE TABLE person(id INT PRIMARY KEY AUTO_INCREMENT, nmae VARCHAR(50));

CREATE TABLE car(name VARCHAR(20),colorVARCAHR(20),pid INT ,

CONSTRAINT c_p_fk FOREIGN KEY(pid) REFERENCES person(id)

);


创建老师表:

CREATE TABLE teacher(

tid INT PRIMARY KEY AUTO_INCREMENT,

name VARCHAR(50),

ahe INT,

gender cahr(1) DEFAULT '男'

);

创建学生表:

CREATE YABLE student(

sid INT PRIMARY KEY AUTO_INCREMENT,

name VARCAHR(50) NOT NULL,

age INT ,

gender CHAR (1) DEFAULT '男'

);

创建学生与老师的关系表:

CREATE TABLE tea_stu_rel(

tid INT,

sid INT

);

添加外键:

ALTER TABLE tea_stu_rel ADD CONSTRAINT fk_tid FOREIGN KEY(tid) REFERENCES teacher(tid);

ALTER TABLE tea_stu_rel ADD CONSTRAINT fk_sid FOREIGN KEY(sid)REFERENCES student(sid);


查询两个表中指定列相等的数据

SELECT * fromstu st INNER JOIN score sc ON st.id-sc.id;

 


左连接:把左边所有的数据查出来,右边只查出满足条件的

SELECT *FROM stu stLEFT OUTER JOIN scoresc ON st.id=sc.id;


右连接:把右边的全部数据查出,左边只查出满足条件的

SELECT * FROM stu st RIGHT JOIN score sc ON st.id=sc.id;

 

创建一个表,它的主键是cid

CREATE TABLE course(cid INT PRIMARY key,NAME VARCHAR(50));


两个表之间的关联

SELECT st.'name',sc.score FROM stu st,score sc WHERE st.id=sc.isd;


三张表之间的关联:

SELECT st.'name',sc.score,c.name  FROM stu st,score sc ,course c WHERE st.id=sc.sid AND sc.cid=c.cid;


学生对应的分数:

SELECT * FROM stust JOIN score sc ON st.id =sc.id;


三张表关联:

SELECT * FROM stust JOIN score sc ON st.id =sc.id JOINcourse c ON sc.cid=c.cid;

 


非等值查询

查询所有员工的姓名,工资,所在部门的名称以及工资等级

SELECTe.ename,e.salary ,d.dname FROM emp e,dept d,salgrade g  WHERE e.deptnp=d.deptno  AND e.salary >=  g.lowsalary  and  e.salary  <=  g.highsalary;

或者是:

SELECTe.ename,e.salary ,d.dname FROM emp e,dept d,salgrade g  WHERE e.deptnp=d.deptno  AND e.salary BETWEENg,lowsalary AND g.highsalary;

或者是:

SELECT e.ename,e.salary,d.dname FROM emp e JOIN dept a ON e.deptno =d.deptnoJOINsalgrade g ON e.salary BETWEEN g,lowsalary AND g.highsalary;

 

 

自然连接:

SELECT * FROM stu,score WHERE stu.id = score.sid;

或者是:

SELECT * FROM stu JOIN score ON stu.id = score.sid;

或者是(自然连接):

SELECT * FROM stu NATURAL JOIN score;

 

 

子查询:

SELECT ename,deptno FROM emp  WHERE depno  =  (SELECT depno FROM emp WHERE ename = '项羽');


查询指定部门薪水大于两千的:

SELECT ename FROM (SELECT ename,salary,deptno FROM emp WHERE deptno  =  30) s WHERE s.salary > 2000;


查询工资高于某个人的员工

SELECT ename,salary FROM emp WHERE salary > (SELECT salary FROM emp WHERE ename = '程咬金');


查询工资高于30号部门所有人的员工信息

SELECTename ,salary FROM emp WHERE salary > (SELECT MAX(salary) FROM emp WHERE deptno = 30);


查询工作与工资与某个员工相同的人:

SELECT *FROM emp WHERE (job,salary) in(SELECT job,salary FROM emp WHERE ename='妲己');

SELECT *FROM emp e,(SELECT job,salary FROM emp WHERE ename ='妲己') r WHERE e.job=r.job and e.salary=r.salary;


统计有两个以上下属的员工的信息:

SELECT  mgr,GROUP_CONCAT(mgr),COUNT(mgr)  FROM emp

GROUP BY mgr HAVING  COUNT(mgr)>=2;

 

查询每个分数的学生,以及学生人数

* SELECT `score` ,GROUP_CONCAT(s_name) ,COUNT(*) FROM `student` GROUP BY `score` ;

查询按照部门分组的薪资,并显示薪资和大于5000的部门:

* SELECT department,GROUP_CONCAT(`salary`),SUM(`salary`)  FROM `student` GROUP BY department  HAVING sum(salary) > 5000;

设置了主键,主键自动增长,name值不可以重复,不可以为空,gender值默认为男

* CREATE TABLE demo4 (d4_id int PRIMARY KEY AUTO_INCREMENT ,d4_name varchar(10) UNIQUE not null,d4_gender char(1) DEFAULT '男');

生成指定位数的随机数:

-- 随机生成指定个数的字符串

DELIMITER $$

CREATE FUNCTION rand_str(n int) RETURNS VARCHAR(255)

BEGIN

-- 声明一个str 52字母


DECLARE str VARCHAR(100) DEFAULT 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';


-- 记录当前是第几个:

DECLARE i int DEFAULT 0;

-- 生成的结果:

DECLARE res_str VARCHAR(255) DEFAULT '';


WHILE i < n DO

-- 随机生成指定个数的字符串

-- floor(1 + rand()*52);

-- substr(str,floor(1 + rand()*52),1);

set res_str=CONCAT(res_str,substr(str,floor(1 + rand()*52),1));

set i=i+1;

end WHILE ;

RETURN res_str;

END $$

DELIMITER ;

* 使用:

    * SELECT rand_str(5);

 

 

插入指定数量的随机数据:

* -- CREATE TABLE emp(id int,name VARCHAR (50),age int);
* DELIMITER //
* CREATE PROCEDURE insert_emp(in startnum int,in maxnum int)
* BEGIN
* -- 声明一个变量记录当前数据是第几条
* DECLARE i int DEFAULT 0;
* -- 默认情况下,自动提交SQL
* set AUTOCOMMIT =0;-- 不让他自动提交SQL
* REPEAT
* set i=i+1;
* INSERT INTO emp VALUES(startnum+i,rand_str(5),FLOOR(10+rand()*30));
* until i=maxnum
* end REPEAT;
* COMMIT ;
* END //
* -- 整体提交所有SQL语句 提高效率
* DELIMITER ;

 

 

 
