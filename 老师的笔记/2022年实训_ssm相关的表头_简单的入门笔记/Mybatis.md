

## MyBatis

MyBatis 本是apache的一个开源项目iBatis, 2010年这个项目由apache software foundation迁移到了google code，并且改名为MyBatis 。2013年11月迁移到Github。

MyBatis是支持普通SQL查询，存储过程和高级映射的优秀的半自动的持久层框架。

MyBatis消除了几乎所有的JDBC代码和参数的手工设置以及结果集的检索。MyBatis使用简单的XML或注解用于配置和原始映射，将接口和Java的POJOs ( Plain OrdinaryJava Objects，普通的Java对象〉映射成数据库中的记录。
每个MyBatis应用程序主要都是使用sqISessionFactory实例的，一个SqISessionFactory实例可以通过
sqlSessionFactoryBuilder获得。sqlSessionFactoryBuilder可以从一个xm配置文件或者一个预定义的配置类的实例获得。


JDBC ：

配置连接数据库的属性---获取连接----

1.basedao获取connection

static{

//1.加载数据库驱动

 Driver  class.forName("com.mysql.jdbc.Driver")

//数据库地址url、连接数据库的用户名username、连接数据库的密码password

DriverManager.getConnection(url,username,password);

}

2.获取preparestatement  pst

3.准备SQL语句

4.预编译参数

5.执行sql

6.获取resultset，封装结果

ResultSet rs = pst.executeQuery(sql);

while(rs.next()){

}





## Log4J

在resources目录下新建log4j.properties

~~~properties
### 设置###
log4j.rootLogger = debug,stdout,D,E

### 输出信息到控制抬 ###
log4j.appender.stdout = org.apache.log4j.ConsoleAppender
log4j.appender.stdout.Target = System.out
log4j.appender.stdout.layout = org.apache.log4j.PatternLayout
log4j.appender.stdout.layout.ConversionPattern = [%-5p] %d{yyyy-MM-dd HH:mm:ss,SSS} method:%l%n%m%n

### 输出DEBUG 级别以上的日志到=D://logs/log.log ###
log4j.appender.D = org.apache.log4j.DailyRollingFileAppender
log4j.appender.D.File = D://logs/log.log
log4j.appender.D.Append = true
log4j.appender.D.Threshold = DEBUG 
log4j.appender.D.layout = org.apache.log4j.PatternLayout
log4j.appender.D.layout.ConversionPattern = %-d{yyyy-MM-dd HH:mm:ss}  [ %t:%r ] - [ %p ]  %m%n

### 输出ERROR 级别以上的日志到=D://logs/error.log ###
log4j.appender.E = org.apache.log4j.DailyRollingFileAppender
log4j.appender.E.File =D://logs/error.log 
log4j.appender.E.Append = true
log4j.appender.E.Threshold = ERROR 
log4j.appender.E.layout = org.apache.log4j.PatternLayout
log4j.appender.E.layout.Conver
~~~

在Mybatis.xml中配置

~~~xml
<settings>
        <setting name="logImpl" value="LOG4J"/>
    </settings>
~~~







## 为什么要使用MyBatis？

原始的JDBC技术中，sql夹在Java代码块里，耦合度高，程序在后期不易维护。

而MyBatis中sql和Java编码分开，功能边界清晰，一个专注业务，一个专注数据 



## 



#### 使用mybatis得到连接的步骤：

1.加载xml当中的配置

2.mybatsi提供了一个类SqlSessionFactoryBuild    ，通过SqlSessionFactoryBuild来获取SqlSessionFactory会话工厂。理解为DBuitl。

3.通过SqlSessionFactory能获得sqlSession会话对象()

```xml

```

### 通过Mybatis操作数据库

#### 1.建立数据库数据

#### 2.导包

在项目下新建一个目录directory 命名为lib-------导入MyBatis驱动包mybatis-x.x.x.jar、数据库驱动包mysql-connector-java-x.x.x.jar 、测试包junit-4.12.jar----------将上述jar包复制到lib中。------右键点击lib，选择add as l ibriry



#### 3.编写配置文件

在项目下新建一个目录directory 命名为resources，然后右键点击mark directory as Resources root

在resources目录下新建一个file，命名为mybatis-config.xml

##### 	3.1mybatis全局配置文件

mybatis-config.xml的表头

~~~xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>




</configuration>
~~~



#### 通过mybatis获得连接的案例

mybatis-config.xml

~~~xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>

    <!--配置数据库的连接参数-->
    <environments default="development">
        <environment id="development">
            <!--mysql数据库事务管理，type直接填JDBC-->
            <transactionManager type="JDBC"/>
            <!--dataSource标签用于配置数据源，也就是连接数据库-->
            <dataSource type="POOLED">
                <!--编写数据库驱动-->
                <property name="driver" value="com.mysql.jdbc.Driver"/>
                <!--编写数据库连接地址-->
                <property name="url" value="jdbc:mysql://localhost:3306/mybatis01"/>
                <!--数据库用户名-->
                <property name="username" value="root"/>
                <!--数据库密码-->
                <property name="password" value="root"/>
            </dataSource>
        </environment>
    </environments>



</configuration>
~~~



测试是否获得连接

~~~java
package test;

import java.io.IOException;
import java.io.InputStream;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

public class MyTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		  //定义一个String类型的变量，用于保存mybatis核心配置文件的路径
        String resource = "mybatis-config.xml";

        //你们自己安装的idea做try catch的功能时直接ctrl + t应该是能直接弹出的
        try {
            //idea导包快捷键alt+enter
            //导入mybatis下的一个类Resources，调用getResourceAsStream的方法，
            // 加载mybatis-config.xml当中配置的参数
            InputStream inputStream = Resources.getResourceAsStream(resource);
            //idea当方法有返回对象时，想快速获取返回值的快捷键alt+enter
            //通过new 一个SqlSessionFactoryBuilder，调用其中的build方法，将上面的inputstream作为参数传入
            //会得到一个会话工厂，会话功能其实就相当于是jdbcUtil
            SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
            //通过会话工厂sqlSessionFactory获得sqlSession,sqlSession可以理解为连接
            SqlSession sqlSession = sqlSessionFactory.openSession();
            System.out.println(sqlSession);
        } catch (IOException e) {
            e.printStackTrace();
        }
	}

}

~~~







============================================================================



~~~xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
"http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
   

   
	<environments default="development">
		<environment id="development">
			<transactionManager type="JDBC"/>
			<dataSource type="POOLED">
				<property name="driver" value=""/>
				<property name="url" value=""/>
				<property name="username" value=""/>
				<property name="password" value=""/>
			</dataSource>
		</environment>
	</environments>
   
	<mappers>
        <!--使用相对于类路径的资源引用, 可以用这种注册方式注册多个mapper.xml<mapper resource="com/joe/TeacherMapper.xml"/>-->
		
        <!--mapper.xml必须与mapper在同一文件夹下 <mapper class="com.joe.mapper.TeacherMapper"/>-->
        
        <!--将包下的所有mapper.xml同时注册 ,-->
        <package name="com.joe.mapper"/>
        
	</mappers>
</configuration>
~~~



#### 4.创建实体类

#### 5.创建实体类接口

#### 6.创建实体类接口的xml文件  mapper.xml映射配置文件

mapper.xml表头

~~~xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
"http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="org.mybatis.example.BlogMapper">

</mapper>
~~~

#### 7.将接口的xml注册到mybatis的核心配置文件中

~~~xml
    <!--每一个mapper.xml都需要注册-->
	<mappers>
        <!--使用相对于类路径的资源引用-->
		<mapper resource="org/mybatis/example/BlogMapper.xml"/>
        <!--mapper.xml必须与mapper在同一文件夹下-->
        <mapper class="org.mybatis.example.BlogMapper"/>
        <!--将包下的所有mapper.xml同时注册-->
        <mapper package="org.mybatis.example"/>
	</mappers>
~~~

#### 8.测试

测试类

```java
package test;

import java.io.IOException;
import java.io.InputStream;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.Test;

import com.joe.entity.Teacher;
import com.joe.mapper.TeacherMapper;

public class MyTest {
	@Test
	public void testT() throws IOException{
		//1.获取mybatis核心配置文件
		String resource = "mybatis-config.xml";
		
		InputStream inputStream = Resources.getResourceAsStream(resource);
		
		//2.通过核心配置文件创建会话工厂sqlSessionFactory
		SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
		//3.通过会话工厂创建会话对象sqlSession相当于一次connection,如果需要自动提交事务，可以直接openSession(true)，，也可以手动提交sqlSession.commit();		
		SqlSession sqlSession = sqlSessionFactory.openSession();
		//4.通过会话对象获取实体类接口的实现类getMapper(填接口的.class)；
		TeacherMapper teacherMapper = sqlSession.getMapper(TeacherMapper.class);
	
		Teacher t = teacherMapper.findByTid(1);
		
		System.out.println(t);
		//关闭sqlSession
		sqlSession.close();
	}
}	

```

















































mybatis-config.xml中要进行多个mapper扫描时，可以使用包扫描

```xml
<package name="xxx.xx.xx" />
```



























#### util类

~~~java
package com.joe.utils;

import java.io.IOException;
import java.io.InputStream;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

public class MybatisUtil {
	
		private static SqlSessionFactory sqlSessionFactory;

		static {

			try {
				String resource = "mybatis-config.xml";

				InputStream inputStream = Resources.getResourceAsStream(resource);
				
				sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
				
			} catch (IOException e) {
				
				e.printStackTrace();
				
			}
		}
		
		public static SqlSession getSession() {
			return sqlSessionFactory.openSession();//事务提交可以openSession（true），也可以通过sqlSession.commit();
		}
	}


~~~

































### 多对1关联关系映射

要先在数据库 建表时添加外键

```sql
  CONSTRAINT fk_emp_dept1 FOREIGN KEY(deptId) REFERENCES tb_dept1(id)
```

~~~xml
<!--结果集映射单个对象javaType指定属性的java类型-->
<association property="teacher" javaType="Teacher">
    <result property="tname" column="tname"/>
</association>
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
"http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<!--通过namespace绑定mapper接口与mapper.xml文件，填mapper接口的全路径  -->
<mapper namespace="com.joe.mapper.PersonMapper">
	<resultMap id="PerIDC" type="com.joe.entity.Person">
		<result property="pid" column="pid"  />
		<result property="pname" column="pname" />
		<association property="idc" javaType="com.joe.entity.IDCards" >
			<result property="cid" column="cid"  />
			<result property="idvalue" column="idnumber" />
		</association>
	</resultMap>



	<!--public Person getPerson(int pid);   -->
	<select id="getPerson" resultMap="PerIDC">
		select  p.pid,p.pname,i.cid,i.idnumber from person p,idcards i where p.cid = i.cid and p.pid=#{pid}
	</select>
</mapper>







<!--结果集映射集合ofType指定集合中的泛型信息-->
<collection property="" ofType=""></collection>

<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
"http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<!--通过namespace绑定mapper接口与mapper.xml文件，填mapper接口的全路径  -->
<mapper namespace="com.joe.mapper.TeacherMapper">
<!--resultMap结果集映射 映射的是type类型，type填你需要映射的类型的全路径，如果有别名就填别名  -->
	<resultMap id="TeaStu" type="com.joe.entity.Teacher">
		<!--property是实体类的属性名  column是数据库里对应的字段名-->
		<result property="tid" column="tid" />
		<result property="tname" column="tname" />
		<!--collection表示映射List集合 property填映射类型的属性名  ofType填集合类的泛型的	全路径,如果起了别名，那么直接用别名即可  -->
		<collection property="stuList" ofType="com.joe.entity.Student">
			<result property="sid" column="sid" />
			<result property="sname" column="sname" />
		</collection>
	</resultMap>

	<!-- Teacher findByTid(int tid); -->
	<select id="findByTid" resultMap="TeaStu">
		select * from teacher t,student s where t.tid=s.tid and t.tid =#{tid}
	</select>
	
</mapper>
~~~

一对多关联关系映射

### 多对多关联关系映射

多对多关联关系映射需要一张中间表，例如：一个老师有多个学生，一个学生有多个老师，那么数据库里面需要有一张老师表（tid为主键），一张学生表（sid为主键），一张中间表（id为主键，tid，sid为外键）

Teacher

~~~java
package com.joe.entity;

import java.util.List;

public class Teacher {
	private int tid;
	private String tname;
	private List<Student> stuList;
	
	public int getTid() {
		return tid;
	}
	public void setTid(int tid) {
		this.tid = tid;
	}
	@Override
	public String toString() {
		return "Teacher [tid=" + tid + ", tname=" + tname + ", stuList="
				+ stuList + "]";
	}
	public Teacher() {
		super();
	}
	public String getTname() {
		return tname;
	}
	public void setTname(String tname) {
		this.tname = tname;
	}
	public List<Student> getStuList() {
		return stuList;
	}
	public void setStuList(List<Student> stuList) {
		this.stuList = stuList;
	}
}

~~~

teacherMapper.xml

~~~xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
"http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<!--通过namespace绑定mapper接口与mapper.xml文件，填mapper接口的全路径  -->
<mapper namespace="com.joe.mapper.TeacherMapper">
	<resultMap id="TeaStu" type="Teacher">
		<!--property是实体类的属性名  column是数据库里对应的字段名-->
		<result property="tid" column="tid" />
		<result property="tname" column="tname" />
		<!--collection表示映射List集合 property还是填属性名  ofType填集合类的泛型的	全路径,如果起了别名，那么直接用别名即可  -->
		<collection property="stuList" ofType="Student">
			<result property="sid" column="sid" />
			<result property="sname" column="sname" />
		</collection>
	</resultMap>

	<!-- Teacher findByTid(int tid);  如果要模糊查询tname like "%"#{tname}"%"-->
	<select id="findByTid" resultMap="TeaStu">
		select * from teacher t,student s,tea_stu ts where t.tid = ts.tid and ts.sid = s.sid and t.tid =#{tid}  
        
	</select>
</mapper>
~~~











































MySQL多表连接

~~~mysql
一）内连接（等值连接）：查询客户姓名，订单编号，订单价格
    ---------------------------------------------------
    select c.name,o.isbn,o.price
    from customers c inner join orders o
    where c.id = o.customers_id;
    ---------------------------------------------------
    select c.name,o.isbn,o.price
    from customers c join orders o
    where c.id = o.customers_id; 
    ---------------------------------------------------
    select c.name,o.isbn,o.price
    from customers c,orders o
    where c.id = o.customers_id;
    ---------------------------------------------------
    select c.name,o.isbn,o.price
    from customers c join orders o
    on c.id = o.customers_id;
    ---------------------------------------------------
    注意：内连接（等值连接）只能查询出多张表中，连接字段相同的记录




二）外连接：按客户分组，查询每个客户的姓名和订单数
    ---------------------------------------------------
    左外连接：
    select c.name,count(o.isbn)
    from  customers c left outer join orders o
    on c.id = o.customers_id
    group by c.name; 
    ---------------------------------------------------
    右外连接：
    select c.name,count(o.isbn)
    from  orders o right outer join customers c   
    on c.id = o.customers_id
    group by c.name; 
    ---------------------------------------------------
    注意：外连接既能查询出多张表中，连接字段相同的记录；又能根据一方，将另一方不符合相同记录强行查询出来


三）自连接：求出AA的老板是EE
    ---------------------------------------------------
    内自连接：
    select users.ename,boss.ename
    from emps users inner join emps boss 
    on users.mgr = boss.empno;
    ---------------------------------------------------
    外自连接：
    select users.ename,boss.ename
    from emps users left outer join emps boss 
    on users.mgr = boss.empno;
    ---------------------------------------------------
    注意：自连接是将一张表，通过别名的方式，看作多张表后，再进行连接。
      这时的连接即可以采用内连接，又可以采用外连接
~~~



### 动态SQL

#### if标签

<if test=""></if>

如果我们要实现多条件查询比如同时根据id，name，age属性来查询

String sql = "select * from teacher where"

  id = xx and name = xx and age = xx

if(id!=null){

​	sql = sql + "id = xx"

}else if( name !=null&&!name.equals("")){

​	sql = sql + "name = xx"

}else if(age!=null){

​	sql = sql + "age = xx"

}

~~~java
<!--Teacher findByCondition(Teacher teacher);  -->
	<select id="findByCondition" resultType="com.joe.entity.Teacher">
		select * from teacher
		<!--where标签会给整个SQL片段自动添加一个where 前缀  ，当and 写在前面时，会自动去除掉报错的and-->
<!-- 		<where>
			<if test="tid!=null">
				and tid = #{tid} 
			</if>
			
			<if test="tname!=null and !tname.equals(&quot;&quot;)">
				and tname = #{tname} 
			</if>
			
			<if test="tage!=null">
				and tage = #{tage} 
			</if>
			
		</where> -->
		<!--prefix="xx"给sql添加一个xx前缀 prefixOverrides="xx"去除掉sql中的无效xx     sufix=""后缀 sufixOverrides=""  -->
		<trim prefix="where" prefixOverrides="and">
			<if test="tid!=null">
				and tid = #{tid} 
			</if>

			<if test="tname!=null and !tname.equals(&quot;&quot;)">
				and tname = #{tname}
			</if>
			<if test="tage!=null">
				and tage = #{tage} 
			</if>
		</trim>
		
	</select>
~~~



#### XML中的转义符

~~~xml
"									&quot;
&									&amp;
<									&lt;
>									&gt;
不断开空格(non-breaking space)		&nbsp;
	半方大的空白	&ensp;
全方大的空白	&emsp;	
不断行的空白格	&nbsp;	
<	小于	&lt;	
>	大于	&gt;	
&	&符号	&amp;	
"	双引号	&quot;	
©	版权	&copy;	
®	已注册商标	&reg;	
™	商标（美国）	&trade;
×	乘号	&times;	
÷	除号	&divide;
~~~





#### where标签

<where>去除sql语句最前面的and

​	<if test=""></if>

</where>

#### trim标签

<trim prefix="where"为整体SQL添加一个前缀

​			prefixOverrides="and" ;去除SQL语句前面多余的字符

​			suffix=""  为整体添加一个后缀

​			suffixOverrides="" 去除SQL语句后面的字符

​	<if test=""></if>

</trim>

~~~java
	<!-- List<Teacher> findByCons(Teacher teacher); -->
		<select id="findByCons" resultType="com.joe.entity.Teacher">
		select * from teacher
		<!--prefix="xx"给sql添加一个xx前缀 prefixOverrides="xx"去除掉sql中的无效xx     sufix=""后缀 sufixOverrides=""  -->
		<trim prefix="where" prefixOverrides="and">
			<if test="tid!=null">
				and tid = #{tid} 
			</if>
			
			<if test="tname!=null and !tname.equals(&quot;&quot;)">
			<!--如果要进行模糊查询，那么%号要用""包裹住，例如"%"    
                也可以使用tage like concat('%',#{tage},'%')   这种方式更推荐
                -->
				and tname like concat ('%',#{tname},'%')
			</if>
			
			<if test="tage!=null">
				and tage = #{tage} 
			</if>
		</trim>
		
	</select>
~~~

在Mysql中%是一个占位符表示任何值



#### choose when otherwise标签

<choose>

​	<when test=""></when>

​	<when test=""></when>

​	<when test=""></when>

​	<otherwise></otherwise>

</choose>

~~~java
	<!-- Teacher findByCond(Teacher teacher); -->
	<select id="findByCond" resultType="com.joe.entity.Teacher">
		select * from teacher where 
		<choose>
			<!--只要满足其中某一个when标签的条件，其他的标签均不执行  -->
			<when test="tid!=null">
				tid = #{tid}
			</when>
			<when test="tname!=null and !tname.equals(&quot;&quot;)">
				tname like concat('%',#{tname},'%')
			</when>
			<when test="tage!=null">
				tage like concat('%',#{tage},'%') 
			</when>
			<!--当when标签内的条件均不满足时，执行otherwise  -->
			<otherwise>
				1=1
			</otherwise>
		</choose>

	</select>
~~~





#### foreach标签

<foreach collection=  "" ；指定要遍历的集合key

​				close=")" 	以xx结尾

​				open="("   以xx开始

​				separator=","   以xx作为分隔符>

</foreach>



~~~java
	<!--List<Teacher> findByCo(List<Integer> tids);  -->
	<select id="findByCo" resultType="com.joe.entity.Teacher">
		select * from teacher where tid in
		<!-- foreach item="tid"  填你要放入的数据的字段名
					collection="list" 如果形参是集合就填list或者collection，如果是数组就填array
		 			open=" ("  动态sql以xxxx开头 例如:(
		  			separator="," 动态sql以xx符号分隔  例如#{tid},#{tid}
		 			 close=")"动态sql以xxx结尾  例如：) -->  
		<!--<where> </where> -->
			<foreach item="tid" collection="list" open="(" separator="," close=")">
				#{tid}
			</foreach>
		
	</select
~~~



#### set标签

<set>替代sql中的set