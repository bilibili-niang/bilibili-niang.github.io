---
title: mongodb的条件查询笔记

author: icestone
tags:
- mongodb
- mongodb
- 数据库
- database

categories:  
  - show databases;use usserdb.person.remove({})//删掉所有db.person.insert([{name:'zs', age:17, gender:'男'},{name:'ls', age:18},{name:'ww', age:19}])db.person.insert([{name:'zs', age:16, gender:'男'},{name:'zs', age:18},{name:'zs', age:19}])db.person.find()  

created: Wed Feb 09 2022 00:00:00 GMT+0800 (中国标准时间)
---
    show databases;
    use usser
    
    db.person.remove({})//删掉所有
    
    db.person.insert([{name:'zs', age:17, gender:'男'},{name:'ls', age:18},{name:'ww', age:19}])
    
    db.person.insert([{name:'zs', age:16, gender:'男'},{name:'zs', age:18},{name:'zs', age:19}])
    db.person.find()
    
    db.person.find({name:'zs',age:18}) //默认是and关系
    db.person.find({age:18,name:'zs'}) //没有顺序条件,只要是同时满足多个要求
    
    db.person.find({name:{$eq:'zs'}})
    
    
    db.person.find({age:{$gte:18}})
    
    db.person.insert(
    [{name:'zs',age:17,book:{name:'HTML',price:66}},
    {name:'ls',age:14,book:{name:'JAVA',price:95}},
    {name:'ww',age:94,book:{name:'Vue',price:65}},
    ])
    
    db.person.find({'book.name':'JAVA'})//如果某一个文档的某一个字段的取值又是一个文档,那么在判断的时候,可以通过字段.文档属性名称的方式来判断
    
    //如果不想显示某一个字段值,那么就可以设置该字段的投影取值为0,\
    db.person.find({},{_id:0})//这里是不显示默认主键,
    
    //默认情况下,如果不指定,那么所有字段的取值都是1
    db.person.find({},{_id:0,name:1,age:1})
    //除了_id字段以外,其他的字段不能同时出现0和1,会报错,例如下面的
    db.person.find({},{_id:0,name:1,age:1,book:0})
    //而这个时候,只需要指定book为0即可
    
    db.person.find({},{_id:0,name:1,age:1,book:1})