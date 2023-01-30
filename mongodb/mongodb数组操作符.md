---
title: mongodb数组操作符

author: icestone
tags:
- mongodb
- mongodb
- 数据库
- database

categories:  
  - 数组操作符/*$all      : 匹配数组中包含所有指定查询值的文档{&lt;field&gt;: {$all: [&lt;value1&gt;, &lt;value2&gt;, ...]}}$elemMatch: 匹配数组中至少有一个能完全匹配所有的查询条件的文档{&lt;field&gt;: {$elemMatch: {&lt;query1&gt;, &lt;query2&gt;, ...}}}2.示例查询tags中同时拥有html和js的文档db.person.insert([  

created: Wed Feb 09 2022 00:00:00 GMT+0800 (中国标准时间)
---
#### 数组操作符

    /*
    $all      : 匹配数组中包含所有指定查询值的文档
    {<field>: {$all: [<value1>, <value2>, ...]}}
    $elemMatch: 匹配数组中至少有一个能完全匹配所有的查询条件的文档
    {<field>: {$elemMatch: {<query1>, <query2>, ...}}}
    
    2.示例
    查询tags中同时拥有html和js的文档
    db.person.insert([
    {name: 'zs', tags:['html', 'js', 'vue']},
    {name: 'ls', tags:['html', 'react', 'vue']},
    {name: 'ww', tags:['html', 'node', 'js']},
    ])
    db.person.find({tags:{$all:['html', 'js']}})
    
    查询所有名称叫做zs,年龄是18岁的文档
    db.school.insert([
    {class: 'one',
    studnets: [
        {name:'zs', age: 18},
        {name:'ls', age: 19},
        {name:'ww', age: 20},
    ]},
    {class: 'two',
    studnets: [
        {name:'zs', age: 20},
        {name:'ls', age: 19},
        {name:'ww', age: 18},
    ]},
    ])
    
    db.school.find({'studnets.name':'ww', 'studnets.age':18})
    db.school.find({studnets:{$elemMatch:{name:'ww',age:18}}})*/
    
    db.person.remove();
    
    db.person.insert([
    {name: 'zs', tags:['html', 'js', 'vue']},
    {name: 'ls', tags:['html', 'react', 'vue']},
    {name: 'ww', tags:['html', 'node', 'js']},
    ])
    
    db.person.find()
    //需求:要求查询出所有tags数组中同时包含html和js的文档:
    
    db.person.find({tags:{$all:['html','js']}})
    
    //$elemMatch: 匹配数组中至少有一个能完全匹配所有的查询条件的文档
    db.school.insert([
    {class: 'one',
    studnets: [
        {name:'zs', age: 18},
        {name:'ls', age: 19},
        {name:'ww', age: 20},
    ]},
    {class: 'two',
    studnets: [
        {name:'zs', age: 20},
        {name:'ls', age: 19},
        {name:'ww', age: 18},
    ]},
    ])
    
    db.school.find()
    
    //需求:要求查询出有名称叫做ww,并且年龄是18岁这个学生的班级:
    /*
    下面的查询条件会先去找name:'ww',再去找age:18,会找这两个条件的交集而不是并集,所以要使用到$elemMatch
    */
    db.school.find({'studnets.name':'ww','studnets.age':18})
    //下面是可以的
    db.school.find({studnets:{$elemMatch:{name:'ww',age:18}}})