---
title: mongodb运算操作符

author: icestone
tags:
- mongodb
- mongodb
- 数据库
- database

categories:  
  - 运算操作符1.运算操作符{ &lt;field&gt;: { $regex: /pattern/, $options: '&lt;options&gt;' } }{ &lt;field&gt;: { $regex: /pattern/&lt;options&gt; } }查询满足正则的文档示例db.person.insert([{name:'zs', age:18},{name:'ls', age:19},{name:'ww', age:17},{name:'Zsf', age:18}  

created: Wed Feb 09 2022 00:00:00 GMT+0800 (中国标准时间)
---
##### 运算操作符

1.运算操作符

    { <field>: { $regex: /pattern/, $options: '<options>' } }
    { <field>: { $regex: /pattern/<options> } }
    

查询满足正则的文档

##### 示例

    db.person.insert([
    {name:'zs', age:18},
    {name:'ls', age:19},
    {name:'ww', age:17},
    {name:'Zsf', age:18},
    {name:'Lnj', age:19},
    {name:'Wz', age:17}
    ])
    

// 需求: 要求查询出所有姓z的人(文档)

    db.person.find({name:{$regex:/^z/, $options: 'i'}})
    

// 需求: 要求查询出所有姓是z或者l的人(文档)

    db.person.find({name:{$in:[/^z/i, /^l/i]}})
    

    db.person.insert([
    {name:'zs', age:18},
    {name:'ls', age:19},
    {name:'ww', age:17},
    {name:'Zsf', age:18},
    {name:'Lnj', age:19},
    {name:'Wz', age:17}
    ])
    
    db.person.find()
    

//需求:要求查询出所有姓z的人  
//第一种格式:  
//正则表达式默认区分大小写

    db.person.find({name:{$regex:/^z/}})
    

//忽略大小写:

    db.person.find({name:{$regex:/^z/,$options:'i'}})
    

//第二种格式:  
//需求:查出所有姓是z或者l的人  
//正则表达式后面的i是指定它忽略大小写

    db.person.find({name:{$in:[/^z/i,/^l/i]}})