---
title: lamba表达式:

author: IceStone
created: '2020-04-07T14:34:59.964Z'
tags: java多线程

---

# lamba表达式:

Lamba表达式:

* 希腊字母λ表中排序第十一位,英文名称为Lambda
* 避免匿名内部类定义过多
* 其实质属于函数式编程的概念

    * (params) ->expression[表达式]
    * (params) ->statement[语句]
    * (params) ->{statements}
    * ex:

        * new Thread(()->System.out.println("多线程学习.....")).start();


* 为什么要使用lambda表达式:

    * 避免匿名内部类定义过多
    * 可以让你的代码看起来很简洁
    * 去掉了一堆没有意义的代码,只留下核心的逻辑

 
* 理解function interface(函数式接口)是学习Java8 lambda表达式的关键所在
* 函数式接口的定义:

    * 任何接口,如果只包含唯一一个抽象方法,那么它就是一个函数式表达式
    * 对于函数式接口,我们可以通过lambda表达式来创建该接口的对象

