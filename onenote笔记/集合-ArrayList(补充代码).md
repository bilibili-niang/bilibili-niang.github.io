---
title: 集合-ArrayList(补充代码)

author: IceStone
created: '2019-12-07T14:00:03.348Z'
tags: Java基础

---

# 集合-ArrayList(补充代码)

packageCollection.SET_ADD_LIST;

 
importjava.util.ArrayList;

importjava.util.Collection;

 
classstudent{

Stringage;

Stringname;

 
@Override

publicStringtoString(){

return"student{"+

"age='"+age+'\''+

",name='"+name+'\''+

'}';

}

}

 
publicclassCollection_1{

publicstaticvoidmain(String[]args){

int[]a={10,20,4};

a[1]=50;

//可以认为是面向接口或多态的写法

//集合中存在的都是对象

Collectionc=newArrayList();//数组,可以添加元素

 
booleanb1=c.add("123");

booleanb2=c.add(10);//会自动装箱,将基本数据类型转为对象

booleanb3=c.add(true);

studentstu=newstudent();

stu.name="myxq";

stu.age="17";

booleanb4=c.add(stu);//boolean会返回一个布尔值.

 
booleanb5=c.add(stu);

 
System.out.println(b1);

System.out.println(b2);

System.out.println(b3);

System.out.println(b4);

System.out.println(b5);//List中可以添加重复元素

//List中add的返回值都是true;在今后开发当中不会接收结果

//因为set中是不能添加重复元素,添加就会报告false

System.out.println(c);//ArrayList的爷爷类里面覆盖了toString方法,

//在student中生成toString才会输出其中所有的内容

 
System.out.println("---");

 
Collectionc2=newArrayList();

c2.add("a");

c2.add("b");

c2.add("c");

System.out.println(c2);

//可以移除指定的元素remove

c2.remove("a");

//获取集合中有几个元素

intt=c2.size();

System.out.println("个数是:"+t);

 
//还可以清除元素中所有的元素

c2.clear();

System.out.println(c2);

 
 
}

}

Collectiong_1:

