---
title: mongodb分页方法

author: icestone
tags:
- mongodb
- mongodb
- 数据库
- nosql

categories:  
  - 分页方法cursor.limit(<number>): 取多少个文档cursor.s  

created: Fri Feb 11 2022 00:00:00 GMT+0800 (中国标准时间)
---
##### 分页方法

cursor.limit(): 取多少个文档  
cursor.skip() : 跳过多少个文档

###### 示例

    //var cursor = db.person.find()
    // 需求: 要求取出前5个文档
    //cursor.limit(5)
    // 需求: 要求跳过前面的5个文档, 取出剩余的所有
    //cursor.skip(5)
    // 注意点: 我们可以直接在find方法后面调用limit方法或者skip方法
    //db.person.find().limit(5)
    //db.person.find().skip(5)
    
    ###### 分页函数注意点
    // 注意点: MongoDB是支持链式调用的
    // 需求: 跳过前面5个文档, 取出后面的5个文档
    //db.person.find().skip(5).limit(5)
    // 注意点:在链式调用的时候, 无论skip写在前面还是后面, 都会在limit之前执行
    db.person.find().limit(5).skip(10)
    

    //var cuesor=db.person.find()
    //需求:要求取出前五条数据:
    //cursor.limit(5)
    
    //需求:要求跳过前面的五个文档,取出剩下的文档
    //cuesor.skip(5)
    //注意:我们可以在find后面调用limit/skip方法
    //db.person.find().limit(5)
    //db.person.find().skip(5)
    
    //注意:mongodb是支持链式调用的
    
    //需求:跳过前面5条文档,取出后面五个文档:
    db.person.find().skip(5).limit(5)
    //注意点:在链式调用的时候,无论skip写在前面还是后面,都会在limit之前执行