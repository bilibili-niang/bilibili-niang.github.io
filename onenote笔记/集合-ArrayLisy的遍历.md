---
title: 集合-ArrayLisy的遍历

author: IceStone
created: '2019-12-07T14:02:31.104Z'
tags: Java基础

---

# 集合-ArrayLisy的遍历

有两种方法来遍历ArrayList:

 
(1).先把集合转为数组,再进行遍历

packageCollection.SET_ADD_LIST;

 
importcom.sun.org.apache.xpath.internal.objects.XObject;

 
importjava.util.ArrayList;

importjava.util.Collection;

 
//集合的遍历

classDog{

privateStringname;

publicvoidsetName(Stringname){

this.name=name;

}

publicStringgetName(){

returnname;

}

Dog(Stringname){

this.name=name;

}

}

publicclassCollection_2{

publicstaticvoidmain(String[]args){

//法一:先把集合转为数组,再进行遍历

Collectionc=newArrayList();

c.add("a");

c.add("b");

c.add("c");

System.out.println(c);

//将集合转为数组

Object[]arr=c.toArray();

for(inti=0;i<arr.length;i++){

System.out.println(arr[i]);

}

Collectionc2=newArrayList();

c2.add(newDog("wc"));

c2.add(newDog("wc2"));

Object[]arr2=c2.toArray();//自动把宿主里面的所有元素向上转型了(把他转为了Dog类)

for(inti=0;i<arr2.length;i++){

Dogd=(Dog)arr2[i];

System.out.println(d.getName());

}

}

}

Object[]toArray():按照适当顺序(从第一个到最后一个元素)返回包含此列表中所有元素的数组

c.toArray();

//自动把宿主里面的所有元素向上转型了(把他转为了Dog类)

Dogd=(Dog)arr2[i];

(2)法二:迭代器(Iterator)遍历:

Iteratorit=c.iterator();//将c总所有的元素扔到迭代器it中,可以直接获取迭代器中的内容

//放到Iterator中的类型会自动提升类型为Object

Objectobj1=it.next();//把当前游标的内容获取出来,并且当前游标往后走一位it.hasNext();//判断迭代器中是否还有元素,返回的是布尔值

 
用while来进行遍历:

while(it.hasNext()){

System.out.println(it.next());

}

(遍历并输出)

//迭代器只是一个接口,实现的方法要通过它的子类

 
