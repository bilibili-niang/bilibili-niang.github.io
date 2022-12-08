---
title: this 的作用

author: IceStone
created: '2019-11-16T04:48:26Z'
tags: Java基础

---

# this 的作用

publicclassuser{

Stringname;

intage;

user

(Stringname,

intage

)

{name=name;

age=age;}

publicstaticvoidmain(String[]args){

useruser1=newuser("张三",85);

//user1.name="张三";user1.age=9;

System.out.println("我叫做"+user1.name);

System.out.println("我的年龄是"+user1.age);

}

}

 
 
输出值为:

我叫做null

我的年龄是0

 
(上文中("张三",85)但输出却不是)

在一个方法中,要给变量赋值,它会先到方法中去找有没有该变量,如果有,就给方法内部的变量赋值,如果没有,就往它上一级去找

如果在前面加上this就代表在字段中赋值,

{this.name=name;

this.age=age;}

 
此时输出:

我叫做张三

我的年龄是85

InkNode is not supportedthis:

这个,代表当前正在使用对象的地址



使用:

1.帮我们区分成员变量和局部变量的二异性,必须得要使用this

2.在同类当中,实例方法的调用,前面实际上是有this,可以省略

3.可以把this作为参数传递,当前对象是什么类型,this就是什么类型

4.可以当作返回值返回

5.static不可以和this一起使用

6.构造器的重载互调this();此时this代表构造器名,必须写到第一行

//省略的例子:

 
publicclassuser{

Stringname;

intage;

user(Stringname,intage)

{this.name=name;this.age=age;}

voidshow(){

System.out.println(this.name);

}

voidsayhello(){

show();

}

publicstaticvoidmain(String[]args){

useruser1=newuser("张三",85);

//System.out.println(user1.name);System.out.println(user1.age);

user1.sayhello();

}

}

//这个show之前省略了个this.

InkNode is not supportedInkNode is not supportedInkNode is not supported 
