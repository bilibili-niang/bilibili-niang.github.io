---
title: mongodb统计函数

author: icestone
tags:
- mongodb
- mongodb
- 数据库
- database

categories:  
  - 统计函数cursor.count(): 统计集合中文档的个数applySkipLimit默认为false, 表示忽略skip和limit2.示例db.person.find().count()// 注意点: count函数可以接收一个applySkipLimit参数, 通过这个参数可以告诉MongoDB在统计的时候是否需要忽略Skip和Limit//      默认情况下applySkipLimit的取值是false, 表示忽略Skip和Limitdb.person.find().skip  

created: Tue Mar 01 2022 00:00:00 GMT+0800 (中国标准时间)
---
##### 统计函数

cursor.count(): 统计集合中文档的个数

    applySkipLimit默认为false, 表示忽略skip和limit
    

2.示例

    db.person.find().count()
    

// 注意点: count函数可以接收一个applySkipLimit参数, 通过这个参数可以告诉MongoDB在统计的时候是否需要忽略Skip和Limit  
// 默认情况下applySkipLimit的取值是false, 表示忽略Skip和Limit

    db.person.find().skip(6).count()
    db.person.find().limit(5).count()
    db.person.find().skip(6).count({applySkipLimit:true})
    db.person.find().limit(5).count({applySkipLimit:true})
    

###### 统计函数注意点

> 在find函数不提供筛选条件时, count函数会从集合的元数据中取得结果  
> 在单台电脑上是这个结果是准确的,  
> 但是如果数据库为分布式结构(多台电脑)时,  
> 如果不给find函数提供筛选条件, 那么count函数返回的结果并不一定准确

###### `code`:

db.person.find().limit(500)

//查询出总数  
db.person.find().count()  
//注意::count函数可以接一个applySkipLimit参数,通过这个参数可以告诉mongodb在统计的时候是否需要加上skip和limit  
//默认情况下applySkipLimit取值是false,忽略skip和limit  
db.person.find().skip(9).limit(10).count()  
//如果不想忽略:  
db.person.find().skip(9).limit(10).count({applySkipLimit:true})

//注意:如果在使用find查询数据的时候,没有指定查询的一个条件,那么默认情况下在一台电脑通过count函数统计的结果是准确的,  
//如果在使用find查询没有指定条件,但是如果是分布式的,在多台电脑上用count统计的结果就不是准确的了  
//结论:只要需要使用count函数来统计文档个数,那么在查询的时候,一定要加上条件,这样无论在什么样的环境下都是准确的了