---
title: mongodb排序函数

author: icestone
tags:
- mongodb
- mongodb
- 数据库
- database

categories:  
  - 排序函数```shellcursor.sort({field: ordering, ..  

created: Fri Feb 11 2022 00:00:00 GMT+0800 (中国标准时间)
---
#### 排序函数

    cursor.sort({field: ordering, ...}): 按照指定规则排序
    ordering为1表示升序排序
    ordering为-1表示降序排序
    

###### 示例

// 注意点: 默认情况下find方法只会返回100个文档

    db.person.find()
    db.person.insert({name:'itzb', age:15})
    db.person.find().limit(101)
    db.person.find().sort({age:1})
    db.person.find().sort({age:-1})
    

###### 注意点

3.1find方法默认只会取出100个文档  
3.2sort函数永远在分页函数之前执行

    db.person.find().skip(5).limit(5)
    db.person.find().skip(5).limit(5).sort({age:-1})
    

> code:

    show databases;
    use usser;
    show collections;
    
    db.person.find()
    
    db.person.insertOne({name:'itzb',age:12})
    
    //注意:默认情况下find方法只会返回100个文档
    //返回指定数量:
    db.person.find().limit(500)
    //指定年龄升序
    db.person.find().sort({age:1}).limit(200)
    //指定年龄降序
    db.person.find().sort({age:-1}).limit(200)
    

**_注意:sort函数如果和limit,skip一起使用的时候,无论sort写在前面还是后面,都会先执行sort函数_**