---
title: mongodb的文档游标

author: icestone
tags:
- mongodb
- mongodb
- 数据库
- database

categories:  
  - 文档游标, 为什么学习前端都要学习MongoDB?> 因为MongoDB原生  

created: Wed Feb 09 2022 00:00:00 GMT+0800 (中国标准时间)
---
#### 文档游标

###### 为什么学习前端都要学习MongoDB?

> 因为MongoDB原生就支持JavaScript, 也就是我们可以直接在MongoDB中混入JS代码

###### 什么是文档游标

我们执行find方法后, find方法其实是有返回值的, find方法会返回一个文档游标(相当于C语言指针)

###### 文档游标常用方法

hasNext(): 是否还有下一个文档  
next(): 取出下一个文档  
forEach(): 依次取出所有文档

###### 文档游标注意:

默认情况下通过文档游标遍历完所有文档后, 系统会在10分钟后自动关闭当前游标  
如果不想自动关闭, 我们可以通过noCursorTimeout函数来保持游标一直有效:

    var cursor = db.person.find().noCursorTimeout()
    

如果想手动关闭游标, 我们也可以通过close函数来手动关闭游标

    cursor.close()
    

###### 示例:

    // 需求: 往person集合中插入100个文档
    var arr =[];
    for(var i = 0; i < 100; i++){
      arr.push({name:'it'+i, age:18+i});
    }
    db.person.insertMany(arr)
    
    
    var cursor = db.person.find().noCursorTimeout()
    //cursor[0]
    //cursor[1]
    while(cursor.hasNext()){
       printjson(cursor.next())
    }
    
    cursor.forEach(printjson)
    cursor.close()
    */
    
    //需求,往person集合中插入个文档:
    //db.person.insertOne({})
    //db.person.insertMany({})
    /*var arr=[];
    for(var i=0;i<100;i++){
        arr.push({name:'it'+i,age:18+i});
    }
    db.person.insertMany(arr)*/
    
    //我们在执行find之后会有一个返回值的,它会返回一个文档游标(相当于c与语言的指针)
    var cursor=db.person.find()
    cursor[10]
    
    /*while(cursor.hasNext()){
        printjson(cursor.next())
    }*/
    
    //forEach,会对查询到的所有文档进行遍历,这里是遍历并打印所有
    //cursor.forEach(printjson)