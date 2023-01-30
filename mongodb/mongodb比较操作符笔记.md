---
title: mongodb比较操作符笔记

author: icestone
tags:
- mongodb
- mongodb
- 数据库
- nosql

categories:  
  - 比较操作符//和MySQL一样, MongodDB中也支持很多比较操作符//$eq: 等于 / $ne: 不等于//$gt: 大于 / $gte: 大于等于//$lt: 小于 / $lte: 小于等于/*2.使用格式db.&lt;collection&gt;.find(    {&lt;field&gt;: {$&lt;operator&gt;: &lt;value&gt;}},    &lt;projection&gt;)*/show databases;use usser  

created: Wed Feb 09 2022 00:00:00 GMT+0800 (中国标准时间)
---
#### 比较操作符

    //和MySQL一样, MongodDB中也支持很多比较操作符
    //$eq: 等于 / $ne: 不等于
    //$gt: 大于 / $gte: 大于等于
    //$lt: 小于 / $lte: 小于等于
    
    /*
    2.使用格式
    db.<collection>.find(
        {<field>: {$<operator>: <value>}},
        <projection>
    )
    */
    show databases;
    
    use usser
    
    db.person.remove()
    db.person.insert([{name:'zs', age:17, gender:'男'},{name:'ls', age:18},{name:'ww', age:19}])
    db.person.find()
    
    //查询zs
    db.person.find({name:'zs'})//默认情况下就是按照相等来判断
    
    db.person.find({name:{$eq:'zs'}})//或者明确告诉它要相等的字段
    
    db.person.find({age:{$gte:'18'}})//大于等于
    
    db.person.find({age:{$lt:'18'}})//小于
    
    db.person.find({age:{$ne:'18'}})//不等于
    
    //注意点:在做不等于判断的时候,没有需要判断的字段,也算作是不等于
    db.person.find({gender:{$ne:'女'}})//不等于
    

#### 其它比较操作符

    /*
    $in: 匹配和任意指定值相等的文档
    $nin:匹配和任意指定值都不相等的文档
    */
    
    /*
    2.使用格式
    db.<collection>.find(
        {<field>: {$<operator>: [<value1>, <value2>, ...]}},
        <projection>
    )
    */
    
    db.person.find()
    
    //name为zs或者ls的字段
    db.person.find({name:{$in:['zs','ls']}})
    
    //匹配name不为zs或者ls的人
    db.person.find({name:{$nin:['zs','ls']}})
    
    //注意:和$neq一样,如果没有需要判断的字段,也算满足条件
    db.person.find({gender:{$nin:['男','女']}})