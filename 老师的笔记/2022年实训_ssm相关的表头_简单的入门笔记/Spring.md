# 						Spring

spring核心是IOC （控制反转）和AOP（面向切面编程）。

Spring贯穿于表现层controller、业务逻辑层service和持久层mapper

整合到一起就是SSM(Spring、SringMVC、Mybatis)框架

持久层  ：操作数据库

业务层：决定你的功能逻辑，业务逻辑，需要用到数据库的数据 ，所在在业务层当中调用持久层的方法来获取数据，同时实现业务层的功能

控制层：将功能或者想展示的内容给前端。那么功能或者内容从哪来？从业务层来，所以在控制调用业务层的方法。


new duixiang();

婚恋网站。jack 男  找对象，活，女的就行。  rose 女 找对象，获得，男的就行。



## Spring框架的优点：

1.非侵入式设计

非侵入式设计是指允许应用中自由选择和组装Spring框架的各个功能模块，并且不要求应用程序的类必须继承或者实现Spring框架的某个类或某个接口

2.降低耦合性，方便开发

将所有的类交给Spring容器来管理，从而降低耦合

3.支持AOP编程

4.支持声明式事务

5.支持JUnit测试



# Spring IOC （容器）

##  什么是控制反转(IoC)

IoC是Inversion of Control的缩写，也叫做“控制反转”

什么叫控制反转？

之前咱们要用某一个对象，需要自己手动new  

主动获取：

BookServlet  {
 BookService bookService = new BookService();
}



ioc容器结合Di依赖注入的一个方式，

现在，将类交给容器管理，容器在初始化的时候就已经将容器内的bean生成了，你要用直接从容器中拿

把所有的类交由spring容器来管理，要用的时候就从容器中通过bean的id来获取



被动获取：

DI（Dependency Injection）依赖注入

容器能知道哪一个组件（类）运行的时候，需要另外一个类（组件）；容器通过反射的形式，将容器中准备好的对象注入（利用反射给属性赋值）





## 创建第一个Spring项目

1.导包

Junit测试

hamcrest-core-1.3.jar

junit-4.12.jar



使用spring需要这几个基础jar包

spring-beans-5.2.6.RELEASE.jar

spring-context-5.2.6.RELEASE.jar

spring-core-5.2.6.RELEASE.jar

spring-expression-5.2.6.RELEASE.jar



spring默认的一个日志包

commons-logging-1.1.3.jar



2.编写spring配置文件












## 配置spring项目

### 1.导包：

Junit测试

hamcrest-core-1.3.jar

junit-4.12.jar



使用spring需要这几个基础jar包

spring-beans-5.2.6.RELEASE.jar

spring-context-5.2.6.RELEASE.jar

spring-core-5.2.6.RELEASE.jar

spring-expression-5.2.6.RELEASE.jar



spring默认的一个日志包

commons-logging-1.1.3.jar





使用aop需要

aspectjweaver-1.9.6.jar  外部提供给springAOP功能的增强包

spring-aop-5.2.6.RELEASE.jar  支持springaop的jar包



C3p0数据源的jar包

c3p0-0.9.5.2.jar

mchange-commons-java-0.2.11.jar



spring使用jdbc

spring-jdbc-5.2.6.RELEASE.jar



spring事务管理

spring-tx-5.2.6.RELEASE.jar



连接mysql数据库的驱动

mysql-connector-java-5.1.47.jar



### 2.创建资源目录

目录结构在项目目录下new一个directory 目录名为resources,将这个文件夹标记为resources root。用于存放spring-config.xml配置文件



### spring.xml表头

~~~xml
<?xml version= "1.0"  encoding= "UTF-8" ?>
<beans xmlns= "http://www.springframework.org/schema/beans"
        xmlns:xsi= "http://www.w3.org/2001/XMLSchema-instance"
        xmlns:context= "http://www.springframework.org/schema/context"
        xmlns:jdbc= "http://www.springframework.org/schema/jdbc"
        xmlns:aop= "http://www.springframework.org/schema/aop"
        xmlns:tx= "http://www.springframework.org/schema/tx"
        xsi:schemaLocation="
        http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/tx http://www.springframework.org/schema/tx/spring-tx.xsd
        http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd
        http://www.springframework.org/schema/jdbc http://www.springframework.org/schema/jdbc/spring-jdbc.xsd
       http://www.springframework.org/schema/aop http://www.springframework.org/schema/aop/spring-aop.xsd">
  


	
</beans>
~~~



### 3.注册bean

```xml
<?xml version= "1.0"  encoding= "UTF-8" ?>
<beans xmlns= "http://www.springframework.org/schema/beans"
        xmlns:xsi= "http://www.w3.org/2001/XMLSchema-instance"
        xmlns:context= "http://www.springframework.org/schema/context"
        xmlns:jdbc= "http://www.springframework.org/schema/jdbc"
        xmlns:aop= "http://www.springframework.org/schema/aop"
        xmlns:tx= "http://www.springframework.org/schema/tx"
        xsi:schemaLocation="
        http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/tx http://www.springframework.org/schema/tx/spring-tx.xsd
        http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd
        http://www.springframework.org/schema/jdbc http://www.springframework.org/schema/jdbc/spring-jdbc.xsd
       http://www.springframework.org/schema/aop http://www.springframework.org/schema/aop/spring-aop.xsd">
  
<!-- 注册一个对象，Spring会自动创建这个Person对象 -->
<!-- 一个Bean标签可以注册一个组件（对象、类）
class:写要注册的组件的全类名
id：对象的唯一标识
 -->
<bean id="" class="">
    <!-- 使用property标签为对象属性赋值
 	name=""，指定属性名
	value=""，为属性赋值
	-->
	<property name="" value=""></property>
</bean>

	
</beans>

```
### 4.从容器中取出组件（类）

~~~java


import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;



public class Test {
	@Test
	public void test() {
		//ApplicationContext代表IOC容器
		//ClassPathXmlApplicationContext：当前应用的xml配置文件
		//根据IOC配置文件得到容器对象applicationContext
		ApplicationContext applicationContext = new ClassPathXmlApplicationContext("xx.xml");
		
        //三种获取bean对象的方式
		//通过bean的id获取对象，由于方法本身的返回对象时Object，所以需要做一次强制类型转换
		强制转换bean的类名 xx = (强制转换bean的类名)applicationContext.getBean("bean的id值");
		System.out.println(p);
        
		
		//根据反射类型获取bean对象，这种方式获取bean对象不需要强转
//		Person bean = context2.getBean(Person.class);
//		System.out.println(bean);
//		System.out.println(bean==p1);
		
		
		//当spring容器当中存在多个同一类型的bean的时候，根据反射类型来获取bean对象的时候需要再加上bean的id值，不需要强转
		Person bean2 = context2.getBean("p2",Person.class);
		System.out.println(bean2);
	}
}

~~~

#### 作业1：通过IOC容器创建对象，并为对象赋值

### 根据bean的类型从IOC容器中获取bean的实例

applicationContext.getBean(xx.class);

applicationContext.getBean(" bean名" , xx.class);



## 基于Xml的装配

1：通过属性的Setter方法给属性赋值

2：通过构造方法给属性赋值





### 通过有参构造创建对象并赋值

~~~xml
	 
	<bean id="xx" class="com.joe.entity.xxxx">
         <!--一对constructor-arg标签代表一个参数
		constructor-age标签数量由有参构造的参数数量决定
		-->
	 	<constructor-arg name="参数名" value="值"></constructor-arg> 	
	 </bean>

	<!--第二种写法省略name， 但是需要加index-->
	<bean id="xx" class="com.joe.entity.xxxx">
         <!--一对constructor-arg标签代表一个参数
		constructor-age标签数量由有参构造的参数数量决定
		index属性表示参数在构造方法中的索引
		type指定参数类型
		-->
	 	<constructor-arg value="值" index="x" type=""></constructor-arg> 	
	 </bean>

~~~

### bean引用类型赋值

~~~xml
<bean id="xx1" class="xxxx">
    <!-- 使用property标签为对象属性赋值
 	name=""，指定属性名
	value=""，为属性赋值
	-->
	<property name="" value=""> 复杂类型直接写在property标签内 </property>
</bean>

<bean id="xx2" class="xxx">
    <!-- 使用property标签为对象属性赋值
 	name=""，指定属性名
	ref=""引用复杂类型,例如引用上面的bean ,xx1
	-->
	<property name="" ref="xx1"> 
    </property>
</bean>

<!--给属性赋null，直接将<null>标签写在<property>标签内</property>-->



<!--第二种赋值-->
<bean id="xx2" class="xxx">
    <!-- 使用property标签为对象属性赋值
 	name=""，指定属性名
    复杂值写在property标签当中
	-->
	<property name="" > 
        <bean class="xxx">
        	<property name="" value=""></property>
        </bean>
    </property>
</bean>

~~~

#### 作业2：为引用类型赋值

### bean集合类型赋值

~~~xml
<!--为list类型赋值-->
<bean id="xx2" class="xxx">
    <!-- 使用property标签为对象属性赋值
 	name=""，指定属性名
    复杂值写在property标签当中
	-->
	<property name="" > 
        <list>
        	
        </list>
    </property>
</bean>

<!-- 通过bean容器给集合类型赋值 -->
	<bean id="tea2" class="com.joe.entity.Teacher">
		<property name="name" value="dai" ></property>
		<property name="age" value="22"></property>
		<!--将list标签写在property标签内，  -->
		<property name="stu">
			<list>
			<!-- list标签内写内部bean -->
				<bean class="com.joe.entity.Student">
  					<property name="name" value="xiong"></property>
  					<property name="age" value="16"></property>
  				</bean>
  				<bean class="com.joe.entity.Student">
  					<property name="name" value="wen"></property>
  					<property name="age" value="16"></property>
  				</bean>
  				<bean class="com.joe.entity.Student">
  					<property name="name" value="zhang"></property>
  					<property name="age" value="16"></property>
  				</bean>
  				<bean class="com.joe.entity.Student">
  					<property name="name" value="cao"></property>
  					<property name="age" value="16"></property>
  				</bean>
			</list>
		</property>
	</bean>

===============================================================================


<!--为map类型赋值    //map集合都是以键值对的形式保存值     key(键名)=value(值)，通过key获取value-->
<bean id="xx2" class="xxx">
    <!-- 使用property标签为对象属性赋值
 	name=""，指定属性名
    复杂值写在property标签当中
	-->
	<property name="" > 
        <map>
            <!--一对entry标签代表一个键值对-->
        	<entry key="" value=""></entry>
            			<!--value-ref直接引用外部的值-->
            <entry key="" value-ref=""></entry>
        </map>
    </property>
</bean>


案例：
<?xml version= "1.0"  encoding= "UTF-8" ?>
<beans xmlns= "http://www.springframework.org/schema/beans"
        xmlns:xsi= "http://www.w3.org/2001/XMLSchema-instance"
        xmlns:context= "http://www.springframework.org/schema/context"
        xmlns:jdbc= "http://www.springframework.org/schema/jdbc"
        xmlns:aop= "http://www.springframework.org/schema/aop"
        xmlns:tx= "http://www.springframework.org/schema/tx"
        xsi:schemaLocation="
        http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/tx http://www.springframework.org/schema/tx/spring-tx.xsd
        http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd
        http://www.springframework.org/schema/jdbc http://www.springframework.org/schema/jdbc/spring-jdbc.xsd
       http://www.springframework.org/schema/aop http://www.springframework.org/schema/aop/spring-aop.xsd">
  	
  	<!-- 将Student类注册到spring容器当中  通过id 值s1可以获取到容器当中的这个bean -->
	<bean id="s1" class="com.joe.entity.Student">
		
	</bean>
	
	<!--将com.joe.entity.Teacher类注册到spring容器当中  通过id 值t1可以获取到容器当中的这个bean   -->
	<bean id="t1" class="com.joe.entity.Teacher">
	<!-- 通过property标签给属性赋值 -->
		<property name="name" value="joe"></property>
		<property name="age" value="11"></property>
		
		<!-- 由于存在一个引用类型为Map的属性，所以需要在property标签内嵌套map标签 -->
		<property name="map">
			<map>
				<!-- 一对entry标签表示一个键值对，  key=value，
				key属性取键名
				value属性取对应的值
				 -->
				<entry key="1" value="haha">	
				</entry>
				 <!-- 由于map集合内的值可以是任意类型，
				所以我们可以存放例如String,Integer,Double,Long,也可以存放引用数据类型，例如对象 
				value-ref可以将外部的bean引用为对应的值，
				例如:entry key="2" value-ref="s1"意思就是将键名为2，值为外部引用的ID值s1的bean存放到map集合当中
				-->
				<entry key="2" value-ref="s1">
				</entry>
			</map>
		</property>
	</bean>
	
</beans>
~~~

### bean为properties类型赋值

~~~xml
<!--为properties类型赋值  properties所有的k=v都是String-->
<bean id="xx2" class="xxx">
    <!-- 使用property标签为对象属性赋值
 	name=""，指定属性名
    复杂值写在property标签当中
	-->
	<property name="" > 
        <props>
            <!--所有的k=v都是String-->
        	<prop key="xx">值</prop>
            <prop key="xx">值</prop>
        </props>
    </property>
</bean>
~~~

### bean继承，设置bean只能用来被继承

~~~xml
<!--abstract="true"设置bean只能用来被继承 -->
<bean id="" class="" abstract="true">
    <!-- 使用property标签为对象属性赋值
 	name=""，指定属性名
	value=""，为属性赋值
	-->
	<property name="" value=""></property>
</bean>

案例：
  	<!-- 将Student类注册到spring容器当中  通过id 值s1可以获取到容器当中的这个bean 
  		如果要让一个bean只能被继承，不能被实例化，就加一个abstract="true"
  		例如bean id="s1" class="com.joe.entity.Student" abstract="true"
  	-->
	<bean id="s1" class="com.joe.entity.Student" >
		
	</bean>

===============================================================================

<!--parent:指定当前bean的配置信息继承于哪个-->
<bean id="" class="" parent="要继承的bean ID值">
    <!-- 使用property标签为对象属性赋值
 	name=""，指定属性名
	value=""，为属性赋值
	-->
	<property name="" value=""></property>
</bean>


案例：
	<bean id="s1" class="com.joe.entity.Student" >
		<property name="name" value="joe"></property>
		<property name="age" value="11"></property>
		<property name="banji" value="31901"></property>
	</bean>
	<!-- 当创建的多个bean有重复属性时，可以用过继承来获取属性
	parent="要继承的bean的id值"
	 -->
	<bean id="s2" class="com.joe.entity.Student" parent="s1" >
		<property name="name" value="lucy"></property>
		<property name="age" value="18"></property>
	</bean>
	<bean id="s3" class="com.joe.entity.Student" parent="s1">
		<property name="name" value="stack"></property>
		<property name="age" value="25"></property>
	</bean>
~~~



### 测试bean的作用域，分别创建单实例和多实例的bean

~~~xml
<!--scope属性指定bean的作用域，一共有4个值，我们只需要学习单实例和多实例，默认是单实例的
scope="prototype"  多实例 ，特点如下：
		1.容器启动时默认不会创建对象
		2.获取的时候创建bean
		3.每次获取都会创建一个新的对象

		
		singleton  单实例 ， 特点如下：
		1.在容器启动完成之前就已经创建好了对象并保存在容器中了。
		2.任何获取都是获取之前创建好的那个对象。

		==========单实例案例：		//1.通过核心配置文件获取到容器对象    在配置核心配置文件的时候，已经将所有的单例模式的bean对象托管给了spring容器，
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("spring.xml");
		System.out.println("获取到了容器对象");
		//2.通过容器对象获取到对应的bean。

		Student s1 = (Student)context.getBean("s1");
	
		//spring容器创建bean对象默认是单例模式，
		//也就是根据一个bean来创建对象的话，永远是同一个
		//单例模式对象创建在容器对象之前
		Student s4 = (Student)context.getBean("s1");
		System.out.println(s1==s4);
-->
<bean id="" class="" scope="">
  
	<property name="" value=""></property>
</bean>
~~~



### 配置通过静态工厂创建bean，实例工厂创建bean、beanFactory

工厂模式：工厂帮我们创建对象：有一个专门帮我们创建对象的类，这个类就是工厂。
静态工厂：工厂本身不用创建对象，通过**静态**方法调用，对象 = 工厂类.工厂方法名()。

~~~java
package com.joe.factory;

import com.joe.entity.Person;

public class PersonStaticFactory {
	public static Person getPerson(String name,Integer age){
		System.out.println("静态工厂正在创建对象");
		Person p = new Person();
		p.setAge(age);
		p.setName(name);
		return p;
	}
}

~~~

注册静态工厂bean

~~~xml
	 <!-- 1.静态工厂(不需要创建工厂本身)factory-method="":指定工厂方法 -->
	 <bean id="" class="" factory-method="">
	 		<!-- 指定参数 value赋值 index指定参数下标 -->
	 	<constructor-arg value="" index=""></constructor-arg>
		
	 </bean>

案例
	<bean id="p3" class="com.joe.factory.PersonStaticFactory" factory-method="getPerson">
		<constructor-arg value="18" index="1"></constructor-arg>
		<constructor-arg value="deng" index="0"></constructor-arg>
	</bean>
~~~



实例工厂：需要创建一个工厂对象：工厂类 工厂对象 = new 工厂类();
						   对象 = 工厂对象.工厂方法名();

~~~java
package com.joe.factory;

import com.joe.entity.Person;

public class PersonFactory {
	
	//定义了一个方法，用于获取人类对象，在Spring当中，如果在工厂类当中有一个获取对应对象的方法，
	//可以把该方法叫做工厂方法	
	public Person getPerson(String name,Integer age){
		System.out.println("实例工厂正在创建对象");
		Person p = new Person();
		p.setAge(age);
		p.setName(name);
		return p;
	}
}

~~~

注册实例工厂bean

~~~xml
	<bean id="pf" class="com.joe.factory.PersonFactory">
	
	</bean>
	
	<!--factory-bean用于绑定工厂bean的id名
		factory-method用于绑定工厂方法
	  -->
	<bean id="p2" factory-bean="pf" factory-method="getPerson">
		<!--value参数值，index指定参数的下标或者说位置  -->
		<constructor-arg value="18" index="1"></constructor-arg>
		<constructor-arg value="joe" index="0"></constructor-arg>
	</bean>



~~~

测试公厂

~~~java
	//测试工厂
	@Test
	public void test2(){
		//人类工厂对象pf是由容器对象context根据bean的id值pf获取到的，而spring当中默认是单例模式
		PersonFactory pf = (PersonFactory)context.getBean("pf");
		Person p1 = pf.getPerson("d",18);//pf对象调用一次getPerson方法，相当于new Person();
		Person p2 = pf.getPerson("f",18);//new Person();
	
		System.out.println(p1==p2);
		
		
		System.out.println("=========================");
		
		Object b1 = context.getBean("p2");
		System.out.println(b1);
//		Object b2 = context.getBean("p2");
//		System.out.println(b1==b2);
		
		Object bean = context.getBean("p3");
		System.out.println(bean);
		
		
	}
~~~





### 引用外部属性文件

~~~xml
	

<!--配置数据库 c3p0连接池 -->
	 <bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource">
	 	<property name="driverClass" value="com.mysql.jdbc.Driver"></property>
	 	<property name="jdbcUrl" value="jdbc:mysql://localhost:3306/mybatis"></property>
	 	<property name="user" value="root"></property>
	 	<property name="password" value="ccat"></property>
	 </bean>

 
<!--引用外部属性,配置数据库连接池-->

<!-- 加载外部配置文件 固定写法classpath：表示引用类路径下的一个资源 -->
	<context:property-placeholder location="classpath:db.properties"/>
	
	<!-- 在SSM框架开发中都是通过数据库连接池来连接数据库，常用的数据库连接池有druid,c3p0
		在这里，我们直接配置c3p0数据库连接池
	 -->
	<bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource">
	 	<property name="driverClass" value="${jdbc.driver}"></property>
	 	<property name="jdbcUrl" value="${jdbc.url}"></property>
	 	<property name="user" value="${jdbc.user}"></property>
	 	<property name="password" value="${jdbc.password}"></property>
	 </bean>


~~~

### 基于XML的自动装配

~~~xml
	 <!--xml自动装配  (仅对于自定义类型的属性生效)
	autowire="default/no"  如果是这两个值的话直接不写autowire属性就行了
	
	//按照某种规则自动装配
	autowire="byName"
			  以属性名作为id去容器中找到这个组件，给他赋值，如果找不到，就赋null值-->


案例：
	<bean id="car" class="com.joe.entity.Car">
		<property name="name" value="丰田"></property>
	 </bean>

 	  <bean id="p1" class="com.joe.entity.Person" autowire="byName">
	 		
	 </bean>


		<!--autowire="byType"
			  以属性的类型作为查找依据去容器中找到这个组件，如果容器中有多个该类型的组件，会报错org.springframework.beans.factory.NoUniqueBeanDefinitionException: No qualifying bean of type 'com.joe.entity.Car' available: expected single matching bean but found 2: car1,car2

-->
案例：
	<!-- bean就代表组件，将组件注册到spring容器当中 -->
	 <bean id="car1" class="com.joe.entity.Car">
		<property name="name" value="丰田"></property>
	 </bean>
	 <bean id="car2" class="com.joe.entity.Car">
		<property name="name" value="红旗"></property>
	 </bean>
	 


	 <bean id="p1" class="com.joe.entity.Person" autowire="byType">
	 		
	 </bean>


<!--如果类中有集合属性，那么容器可以把容器中所有该集合的泛型赋值给这个集合-->
~~~



## spring常用注解

要使用spring的注解进行开发，需要先在核心配置文件中开启注解扫描

@Component  在类上面加@Component注解相当于在核心配置文件当中注册一个bean

​							<bean id="" class=""></bean>

​							默认bean的id就为类名，首字母小写

例如：下面这个Teacher在ioc容器当中的beanID 就为teacher

~~~java
@Component
public class Teacher {
}


~~~

也可以手动指明id

例如：下面这个Student在ioc容器当中的beanID 就为s1

~~~Java、
@Component("s1")
public class Student {
}
~~~

@Controller 等同于@Component 只不过用在Controller层中

@Service 等同于@Component  用在Service层中

@Repository  等同于@Component  用在持久层中

@Scope 指明bean的作用域

@Value

@Autowired  

```
@Autowired 自动装配bean
* 根据属性的类型，去容器当中自动寻找一个bean，作为属性值
```

@Qualifier







## 注解配置bean

//在将组件通过注解注册进Spring容器当中时可以指定bean的id；例如@Service("service")，那么该bean的id就为service，@Service("serviceImpl")，该bean的id就为serviceImpl,如果不指定id，那么默认为该组件名首字母小写

~~~xml
<!-- //@Repository("personMapper")相当于做了下面这个操作
	<bean id="personMapper" class="com.joe.mapper.PersonMapperImpl">
	
	</bean> 
	-->

	<!-- 如果是@Repository 相当于
	<bean  class="com.joe.mapper.PersonMapperImpl">
	
	</bean> -->
~~~



1.给组件配置注解

~~~xml
<!--通过给bean上添加某些注解，可以快速的将bean加入到ioc容器中Spring有四个注解:
@Controller ：控制器;我们推荐给控制器层（servlet包下的类)的组件加这个注解
@service ：业务逻辑;我们推荐业务逻辑层service层的组件添加这个注解
@Repository ：给数据库层(持久化层，dao层)的组件添加这个注解
@Component ：给不属于以上几层的组件添加注解
-->
~~~

2.自动扫描加了注解的组件

~~~xml
<!--自动扫描   base-package="要扫描的包路径"，将该包下的所有加了注解的类注册进容器中-->
<context:component-scan base-package="">
	
</context:component-scan>
~~~

使用注解配置bean：

1、bean的id默认就是组件的类名首字母小写，如果要修改bean的id，直接在加注解时改。例如:@Controller("要改的id")

2、组件的作用域，默认就是单例模式；  加@Scoper（value=""）注解可以修改作用域

### 基于@Autowired注解实现根据类型自动装配

~~~java
autowired原理
@Qualifier("")：指定一个名字作为id，让spring别使用变量名作为id
@Autowired
private BookService bookService
    1)、先按照类型去容器中找到对应的组件;bookService = ioc.getBean(BookService.class
		1)、找到一个:找到就赋值
		2)、没找到:抛异常
		3)、找到多个?
            1.按照变量名作为id继续匹配。
            	1.匹配上，装配
            	2.匹配不上，报错
            		可以使用@Qualified注解指定id名
~~~



MVC开发模式

通过控制层调用业务层，业务层调用底层的方法实现解耦。

在业务层当中调用底层的方法，需要将底层赋给业务层的实现类当成一个属性

private PersonMapper personMapper;这个时候属性并没有赋值，我们需要将一个PersonMapper的实例化对象赋给personMapper这个属性,而我们之前学过springIOC，知道要获取对象，可以直接从IOC容器当中拿，那么通过@Repository注解，将PersonMapper注册到IOC容器当中，这个时候直接IOC容器当中拿PersonMapper这个bean就可以了，怎么获取这个bean呢，通过@Autowired 

​		private PersonMapper personMapper;

注解获取这个bean； 并将这个bean赋值给personMapper这个属性。

~~~java
//底层接口
public interface PersonMapper {
	//在底层定义一个打印人类的方法
	public void printPerson(Person p);
}
//业务层接口
public interface PersonService {
	//由于底层接口定义了一个打印人类的方法，那么业务层接口同样需要定义一个该方法，
	//意思就是，底层接口所有需要调用的方法，业务层接口都需要有一模一样的方法
	public void printPerson(Person p);
}
//底层实现类
/*在将组件通过注解注册进Spring容器当中时可以指定bean的id；
 * 例如@Service("service")，
 * 那么该bean的id就为service，
 * @Service("serviceImpl")，该bean的id就为serviceImpl,
 * 如果不指定id，那么默认为该组件名首字母小写*/
@Repository("personMapper")  
public class PersonMapperImpl implements PersonMapper {

	@Override
	public void printPerson(Person p) {
		// TODO Auto-generated method stub
		System.out.println("mapper层的打印方法");
		System.out.println(p);
	}

}
package com.joe.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.joe.entity.Person;
import com.joe.mapper.PersonMapper;
//将业务层的实现类注册进spring容器当中
@Service
public class PersonServiceImpl implements PersonService {
	//我们在业务层的实现类当中将底层接口私有化，然后在重写业务层的接口当中直接调用底层接口的方法，
	//意味着及时我们调用业务层的方法，实际上就是调用底层的方法,
	//私有化PersonMapper的过程中会创建一个对象，那么这个对象从哪来。
	//我们之前通过@Repository将底层接口的实现类注入进了springIOC容器当中,
	//所以要通过一个@Autowired 注解，自动配置PersonMapperImpl这个bean
	@Autowired  //PersonMapper personMapper = context.getBean(PersonMapper.class);
	/*如果spring容器当中有多个同一类型的bean时，通过@Qualifier("id名")注解指定bean*/
	@Qualifier("personMapper") //PersonMapper personMapper= context.getBean("personMapper",PersonMapper.class);
	
	private PersonMapper personMapper; //=personMapper;
	
	@Override
	public void printPerson(Person p) {
		// TODO Auto-generated method stub
		//业务层的printPerson方法没有做任何功能，只是单纯的调用了mapper的方法
		personMapper.printPerson(p);
	}

}


//控制层
@Controller
public class PersonController {
	@Autowired
	private PersonService personService;
	
	public void printPerson(Person p){
		
		personService.printPerson(p);
	}
}
~~~



















# SpringAOP

AOP（Aspect Oriented Programming）面向切面编程，指在程序运行期间，将某段代码动态的切入到指定方法的指定位置进行运行的编程方式。

## JDK底层动态代理：

InvocationHandler

public static void logStart(Method method,Object...args) {
}

~~~java


public class XxxProxy {
	//传入被代理对象
    //返回代理对象
	public static Xxx getXxxProxy(final Xxx xxx) {
		
        InvocationHandler h = new InvocationHandler() {
			 /*Object proxy:代理对象
            Method method:当前将要执行的目标对象的方法
            Object[] args:方法调用时外界传入的参数值
          */
			@Override
			public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
				// TODO Auto-generated method stub
				//利用反射执行目标方法
                //目标方法执行后的返回值
				System.out.println("动态代理帮你执行的方法");
				Object result = null;
				try {
					System.out.println("【"+method.getName()+"】方法开始执行,用的参数列表是："+Arrays.asList(args));
					result = method.invoke(cal, args);
					System.out.println("【"+method.getName()+"】方法执行完成，结果为："+result);
				} catch (Exception e) {
					// TODO Auto-generated catch block
					System.out.println("【"+method.getName()+"】方法执行出现异常，异常信息是:"+e.getCause());
				}
				//将返回值返回到外界
				return result;
			}
		};
		Class<?>[] interfaces = xxx.getClass().getInterfaces();
		ClassLoader loader =xxx.getClass().getClassLoader();
		 //Proxy为目标对象创建代理对象;
		Object proxy = Proxy.newProxyInstance(loader, interfaces, h);
		
		return (Xxx)proxy;
	}
}


~~~

案例

被代理的接口

~~~java
package com.joe.inter;

public interface Calculate {
	//	在计算机接口当中定义加减乘除四个方法
	public int jia(int i1,int i2);
	public int jian(int i1,int i2);
	public int chen(int i1,int i2);
	public int chu(int i1,int i2);
}

~~~

被代理接口的实现类

~~~java
package com.joe.impl;

import com.joe.inter.Calculate;

//这个实现类叫做被代理对象，    通过jdk当中的一个proxy类创建一个代理
public class CalImpl implements Calculate {

	@Override
	public int jia(int i1, int i2) {
		// TODO Auto-generated method stub
		int result = i1+i2;
		return result;
	}

	@Override
	public int jian(int i1, int i2) {
		// TODO Auto-generated method stub
		int result = i1-i2;
		return result;
	}

	@Override
	public int chen(int i1, int i2) {
		// TODO Auto-generated method stub
		int result = i1*i2;
		return result;
	}

	@Override
	public int chu(int i1, int i2) {
		// TODO Auto-generated method stub
		int result = i1/i2;
		return result;
	}

}

~~~

代理类

~~~java
package com.joe.proxy;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;
import java.util.Arrays;

import com.joe.inter.Calculate;

//计算机代理类，用于代理被代理的对象CalImpl
public class CalProxy {
	//获取一个代理
	public static Calculate getCalProxy(Calculate cal){
		//绑定被代理对象的方法
		InvocationHandler h= new InvocationHandler() {
			
			/*proxy - 调用该方法的代理实例 
			method -所述方法对应于调用代理实例上的接口方法的实例。 方法对象的声明类将是该方法声明的接口，它可以是代理类继承该方法的代理接口的超级接口。 
			args -包含的方法调用传递代理实例的参数值的对象的阵列，或null如果接口方法没有参数。 原始类型的参数包含在适当的原始包装器类的实例中*/
			@Override
			public Object invoke(Object proxy, Method method, Object[] args)
					throws Throwable {
				// TODO Auto-generated method stub
				System.out.println("动态代理在帮你实现方法");
				System.out.println("【"+method.getName()+"】方法正在运行"+"参数列表为："+Arrays.asList(args));
				Object result = method.invoke(cal, args);
				System.out.println("【"+method.getName()+"】方法运行完毕，结果为："+result);
				
				return result;
			}
		};
		//通过被代理类的反射，获取接口
		Class<?>[] interfaces = cal.getClass().getInterfaces();
		//通过被代理类的反射获取类加载器
		ClassLoader loader = cal.getClass().getClassLoader();
		
		//通过jdk当中的Proxy类获取代理
		Object calProxy= Proxy.newProxyInstance(loader, interfaces, h);
		return (Calculate)calProxy;
	}
}

~~~

测试

~~~java
package com.joe.test;

import com.joe.impl.CalImpl;
import com.joe.inter.Calculate;
import com.joe.proxy.CalProxy;

public class ProxyTest {
	public static void main(String[] args) {
		CalImpl calImpl = new CalImpl();
		
		//调用代理类的获取代理的方法，会返回一个代理对象
		Calculate calProxy = CalProxy.getCalProxy(calImpl);
        //通过代理对象调用方法
		calProxy.chen(2, 2);
		calProxy.chu(6, 2);
		calProxy.jia(2, 6);
		calProxy.jian(8, 2);
	}
}

~~~







## AOP所需jar包

aspectjweaver-1.9.6.jar

aspectjweaver-1.9.6-sources.jar

## 注解配置AOP步骤

1.将切面注册到Spring容器当中

@Aspect
@Component

2.通过@Before、@AfterReturning、@AfterThrowing、@After、@Around告诉Spring，切面类里面的每一个方法，都是何时何地运行

@Before在目标方法之前运行；   前置通知

使用方式@Before("execution(public int  方法所在类全路径.方法名(参数))")。。。如果该类中所有方法都要加，直接全类名.*

也可以写成@Before("execution(* 方法所在类全路径.*(..))")

@AfterReturning在目标方法之后运行；	后置通知



@AfterThrowing在目标方法执行异常运行；	异常通知



@After在目标方法结束的时候运行；	返回通知



@Around环绕；	环绕通知

3.开启基于注解的AOP扫描、开启spring的组件扫描

~~~xml
<aop:aspectj-autoproxy></aop:aspectj-autoproxy>
~~~

4.测试，动态代理的接口

### 案例：

spring.xml

~~~xml
<?xml version= "1.0"  encoding= "UTF-8" ?>
<beans xmlns= "http://www.springframework.org/schema/beans"
        xmlns:xsi= "http://www.w3.org/2001/XMLSchema-instance"
        xmlns:context= "http://www.springframework.org/schema/context"

        xmlns:aop= "http://www.springframework.org/schema/aop"

        xsi:schemaLocation="
        http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd

        http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd

       http://www.springframework.org/schema/aop http://www.springframework.org/schema/aop/spring-aop.xsd">
  	<!-- 包扫描，扫描base-package路径下的所有注解 -->
	<context:component-scan base-package="com.joe" />
	
	<!-- 开启基于注解的AspectJ支持 -->
	<aop:aspectj-autoproxy></aop:aspectj-autoproxy>
	
</beans>
~~~

Mapper接口

~~~java
package com.joe.mapper;

public interface UserMapper {
    public void insert();
    public void delete();
    public double update(Integer i,Integer j);
    public String select();

    /*public void login();*/
}

~~~

Mapper接口实现类

~~~java
package com.joe.mapper.impl;

import com.joe.mapper.UserMapper;
import org.springframework.stereotype.Repository;

@Repository("userMapper")
public class UserMapperImpl implements UserMapper {
    @Override
    public void insert() {
        System.out.println("添加用户");
    }

    @Override
    public void delete() {
        System.out.println("删除用户");
    }

    @Override
    public double update(Integer i,Integer j) {
        System.out.println("修改用户");
        return i/j;
    }

    @Override
    public String select() {
        return "查询用户";
    }

    /*
    @Override
    public void login() {

        *//*
        * 增加的功能代码
        * *//*

        if(name.equals("name")&&password.equals("password")){
            System.out.println("登录成功");
        }

        *//*增加的功能代码*//*
    }*/
}

~~~

切面

~~~java
package com.joe.aspectj;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.*;
import org.springframework.stereotype.Component;
/*
* @Aspect注解，将该类标记为切面
* */
@Aspect
@Component
public class MyAspectj {

    /*
    *
    * execution(
    * 权限修饰符(可省略)
    * *(返回类型,*表示所有的返回类型)
    * com.joe.mapper.impl.UserMapperImpl（切入点的路径）
    * .*（切入点所指明的方法，*表示切入点下所有的方法都被切入）
    * (..) 两个..表示方法中所有的参数)
    *
    * */
    @Pointcut("execution( double com.joe.mapper.impl.UserMapperImpl.update(Integer,Integer))")
    public void pointcut(){}

    /*
    * @Before（切入点）  在切入方法运行之前
    * */
    @Before("pointcut()")
    public void before(){
        System.out.println("在切入方法运行之前");
    }
    @Before("pointcut()")
    public void sayHello(){
        System.out.println("hello");
    }

    @AfterReturning("pointcut()")
    public void afterReturning(){
        System.out.println("切入方法返回通知");
    }
    /*
    * @Around 环绕切入，可以在这个方法中指明某段代码运行在切入点之前和切入之后
    * */
    @Around("pointcut()")
    public Object around(ProceedingJoinPoint joinPoint) throws Throwable {
        System.out.println("运行在joinPoint.proceed()之前");
        Object obj = joinPoint.proceed();
        System.out.println("运行在joinPoint.proceed()之后");
        return obj;
    }

    @AfterThrowing("pointcut()")
    public void afterException(){
        System.out.println("切入方法运行发生异常时");
    }

    /*
    * @After(切入点) 在切入方法运行之后
    * */
    @After("pointcut()")
    public void after(){
        System.out.println("在切入方法运行之后");
    }


}

~~~

测试

~~~java
package com.joe.test;

import com.joe.mapper.UserMapper;
import org.junit.Test;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class AopTest {
    @Test
    public void test01(){
        ClassPathXmlApplicationContext ioc = new ClassPathXmlApplicationContext("spring.xml");
        UserMapper userMapper = ioc.getBean("userMapper", UserMapper.class);
        userMapper.insert();
        System.out.println();

        userMapper.delete();
        System.out.println();


        System.out.println(userMapper.select());

        userMapper.update(4,2);
        System.out.println();
    }
}

~~~









# Spring原生JDBC案例

spring提供了一个jdbcTemplate的模板用于操作数据库
把这个jdbcTemplate理解为一个类似于prepraStatement的类



spring.xml

同时需要配置数据源

~~~
<?xml version= "1.0"  encoding= "UTF-8" ?>
<beans xmlns= "http://www.springframework.org/schema/beans"
       xmlns:xsi= "http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context= "http://www.springframework.org/schema/context"
       xmlns:jdbc= "http://www.springframework.org/schema/jdbc"
       xmlns:aop= "http://www.springframework.org/schema/aop"
       xmlns:tx= "http://www.springframework.org/schema/tx"
       xsi:schemaLocation="
        http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/tx http://www.springframework.org/schema/tx/spring-tx.xsd
        http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd
        http://www.springframework.org/schema/jdbc http://www.springframework.org/schema/jdbc/spring-jdbc.xsd
       http://www.springframework.org/schema/aop http://www.springframework.org/schema/aop/spring-aop.xsd">

    <!--开启包注解扫描-->
    <context:component-scan base-package="com.joe"/>


    <!--要操作数据库，必然需要配置数据源
    配置C3p0 数据源
    -->
    <bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource">
        <!--driverclass 填数据库驱动-->
        <property name="driverClass" value="com.mysql.jdbc.Driver"/>
        <!--jdbcUrl填数据库地址-->
        <property name="jdbcUrl" value="jdbc:mysql://localhost:3306/spring-mybatis"/>
        <!--数据库用户名-->
        <property name="user" value="root"/>
        <!--数据库密码-->
        <property name="password" value="root"/>
    </bean>

    <!--spring提供了一个jdbcTemplate的模板用于操作数据库
    把这个jdbcTemplate理解为一个类似于prepraStatement的类
    -->
    <bean id="jdbcTemplate" class="org.springframework.jdbc.core.JdbcTemplate">
        <!--jdbcTemplate需要配置数据源
        name="dataSource" 表示给数据源属性赋值
        ref  引用某个bean作为数据源属性的值
         -->
        <property name="dataSource" ref="dataSource"/>
    </bean>



</beans>
~~~





jdbcTemplate提供了一个update方法用于执行增、删、改的操作

提供了一个query()方法用于执行查询操作



Mapper层接口

~~~java
package com.joe.dao;

import com.joe.entity.Account;

public interface AccountDao {
    /**
     * 添加账号
     * @param account
     * @return
     */
    public int addAccount(Account account);

    /**
     * 根据id删除账号
     * @param id
     * @return
     */
    public int deleteAccount(Integer id);

    /**
     * 根据传入参数来修改账号
     * @param account
     * @return
     */
    public int updateAccount(Account account);

    /**
     * 根据id查找账户
     * @param id
     * @return
     */
    public Account findById(Integer id);
}


~~~



Mapper层实现类

~~~java
package com.joe.dao.impl;

import com.joe.dao.AccountDao;
import com.joe.entity.Account;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("accountDao")
public class AccountDaoImpl implements AccountDao {
    @Autowired
    @Qualifier("jdbcTemplate")
    private JdbcTemplate jdbcTemplate;
    @Override
    public int addAccount(Account account) {
        /*准备sql语句*/
        String sql = "insert into account(username,balance) value (?,?)";
        /*
        当存在多个占位符时，需要将占位符中要存放的参数保存到一个Object数组中
        再将数组传入到update()方法中。
        如果只有1个占位符，则直接将参数传入update方法
        */
        String username = account.getUsername();
        Double balance = account.getBalance();
        Object[] objects = {username, balance};

        /*update()用于执行增、删、改操作
        * */
        int update = this.jdbcTemplate.update(sql, objects);

        return update;
    }

    @Override
    public int deleteAccount(Integer id) {

        String sql = "delete from account where id = ?";
        int update = this.jdbcTemplate.update(sql, id);

        return update;
    }

    @Override
    public int updateAccount(Account account) {
        return 0;
    }

    @Override
    public Account findById(Integer id) {
        String sql = "select * from account where id = ?";
        /*
        resultSet  String username=rs.getString("username");  new Account().setUsername(username);

        new BeanPropertyRowMapper<实体类>(实体类的反射)用于将数据库中的数据与实体类的字段映射起来
        * */
        BeanPropertyRowMapper<Account> rowMapper = new BeanPropertyRowMapper<>(Account.class);
        /*
        * this.jdbcTemplate.query(sql语句, 实体类与数据库映射的rowMapper, 传入的参数
        * */
        Account account = this.jdbcTemplate.queryForObject(sql, rowMapper, id);

        return account;
    }
}


~~~

测试类

~~~java
package com.joe.test;

import com.joe.dao.AccountDao;
import com.joe.entity.Account;
import org.junit.Test;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MyTest {
    @Test
    public void test01(){
        ClassPathXmlApplicationContext ioc = new ClassPathXmlApplicationContext("spring.xml");

        AccountDao accountDao = ioc.getBean("accountDao", AccountDao.class);
        int flag = accountDao.addAccount(new Account(124, "rose", 200.0));
        if (flag>0){
            System.out.println("账户添加成功");
        }else {
            System.out.println("账户添加失败");
        }
    }

    @Test
    public void test02(){

        ClassPathXmlApplicationContext ioc = new ClassPathXmlApplicationContext("spring.xml");

        AccountDao accountDao = ioc.getBean("accountDao", AccountDao.class);

        int i = accountDao.deleteAccount(1);
        if (i>0){
            System.out.println("账户删除成功");
        }else {
            System.out.println("账户删除失败");
        }
    }

    @Test
    public void test03(){
        ClassPathXmlApplicationContext ioc = new ClassPathXmlApplicationContext("spring.xml");

        AccountDao accountDao = ioc.getBean("accountDao", AccountDao.class);

        Account byId = accountDao.findById(3);
        System.out.println(byId);
    }
}

~~~





# mysql数据库的事务特性、隔离级别以及对应的隔离级别可能会发生的问题详解

https://www.cnblogs.com/wyaokai/p/10921323.html









# Spring整合Mybatis

## 1.导包

所需依赖mybatis-spring-2.0.2.jar

spring-tx-5.2.6.jar事务管理包

spring-jdbc-5.2.6.jar数据源包

## 2.创建mybatis.xml，里面不用写任何内容

## 3.创建spring.xml。在xml当中配置

### 3.1、配置数据源DataSource

使用Spring的数据源替换Mybatis的配置，需要导入依赖spring-jdbc-5.2.6.jar

~~~xml
<!--开启spring的组件扫描，扫描com.joe包下面的所有组件-->
<context:component-scan base-package="com.joe"/>	

<!-- 使用Spring的数据源替换Mybatis的配置 -->
	<bean id="dataSource" class="org.springframework.jdbc.datasource.DriverManagerDataSource">
		<property name="driverClassName" value="com.mysql.jdbc.Driver"></property>
		<property name="url" value="jdbc:mysql://localhost:3306/mybatis?useSSL=true&amp;useUnicode=true&amp;characterEncoding=UTF-8"></property>
		<property name="username" value="root"></property>
		<property name="password" value="ccat"></property>
	</bean>
~~~

### 3.2、配置SqlSessionFactory

~~~xml
	<!-- sqlSeSessionFactory -->
	<bean id="sqlSeSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean">
		<!-- 引入数据源 -->
		<property name="dataSource" ref="dataSource"></property>
		<!-- 绑定Mybatis配置文件 -->
		<property name="configLocation" value="classpath:mybatis-config.xml"></property>
		<!-- 配置mapper映射器 -->
		<property name="mapperLocations" value="classpath:com/joe/mapper/*.xml"></property>
	</bean>
~~~

### 3.3配置Mapper层扫描器

~~~xml
<!--mapper扫描器-->
    <bean class="org.mybatis.spring.mapper.MapperScannerConfigurer">
        <!--basePackage用于指定要扫描的包-->
        <property name="basePackage" value="com.joe.mapper"/>
    </bean>
~~~

## 4.测试

~~~java
package com.joe.test;

import com.joe.entity.Account;
import com.joe.mapper.AccountMapper;
import org.junit.Test;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MyTest {
    @Test
    public void test01(){
        /*初始化ioc容器*/
        ClassPathXmlApplicationContext ioc = new ClassPathXmlApplicationContext("spring.xml");
        /*获取mapper层的bean*/
        AccountMapper accountMapper = ioc.getBean("accountMapper", AccountMapper.class);
        /*调用根据id来查询account的方法*/
        Account account = accountMapper.findById(2);
        System.out.println(account);
    }

    @Test
    public void test02(){
        ClassPathXmlApplicationContext ioc = new ClassPathXmlApplicationContext("spring.xml");
        AccountMapper accountMapper = ioc.getBean("accountMapper", AccountMapper.class);

        int delete = accountMapper.delete(2);
        System.out.println(delete);
    }

    @Test
    public void test03(){
        ClassPathXmlApplicationContext ioc = new ClassPathXmlApplicationContext("spring.xml");
        AccountMapper accountMapper = ioc.getBean("accountMapper", AccountMapper.class);

        int i = accountMapper.insert(new Account(10, "lucy", 10000000.0));
        System.out.println(i);

    }

    @Test
    public void test04(){
        ClassPathXmlApplicationContext ioc = new ClassPathXmlApplicationContext("spring.xml");
        AccountMapper accountMapper = ioc.getBean("accountMapper", AccountMapper.class);

        int i = accountMapper.update(new Account(3, "jacky", 5222222.0));
        System.out.println(i);

    }

}

~~~







# Maven

项目管理工具，帮我们进行项目管理，可以帮我们自动导入项目所需的依赖