---
title: mongodb逻辑操作符

author: icestone
tags:
- mongodb
- mongodb
- 数据库
- nosql

categories:  
  - //逻辑操作符:/*$not: 匹配条件不成立的文档{&lt;field&gt;: {$not: {&lt;expression&gt;}}}$and: 匹配条件全部成立的文档{&lt;field&gt;: {$and: [{&lt;expression1&gt;}, {&lt;expression2&gt;}, ...}]}$or : 匹配至少一个条件成立的文档{&lt;field&gt;: {$or: [{&lt;expression1&gt;}, {&lt;expression2&gt;  

created: Wed Feb 09 2022 00:00:00 GMT+0800 (中国标准时间)
---
//逻辑操作符:

    /*
    $not: 匹配条件不成立的文档
    {<field>: {$not: {<expression>}}}
    $and: 匹配条件全部成立的文档
    {<field>: {$and: [{<expression1>}, {<expression2>}, ...}]}
    $or : 匹配至少一个条件成立的文档
    {<field>: {$or: [{<expression1>}, {<expression2>}, ...}]}
    $nor: 匹配多个条件全部不成立的文档
    {<field>: {$nor: [{<expression1>}, {<expression2>}, ...}]}
    
    2.示例:
    //2.1$not
    //查询所有年龄不等于18岁的人
    db.person.find({age:{$ne:18}})
    db.person.find({age:{$not:{$eq:18}}})
    //查询不是男人的人
    db.person.find({gender:{$eq:'男'}})
    // 注意点: $not运算符和$ne/$nin一样, 如果需要查询的字段不存在, 也会算作条件成立
    db.person.find({gender:{$not:{$eq:'男'}}})
    
    //2.2$and
    //查询所有名称叫做zs的未成年人
    db.person.find({$and:[{name:{$eq:'zs'}},{age:{$lt:18}}]})
    db.person.find({$and:[{name:'zs'},{age:{$lt:18}}]})
    db.person.find({name:'zs', age:{$lt:18}})
    
    //2.3$or
    //查询所有名称叫做zs或者ls的人
    db.person.find({name:{$in:['zs','ls']}})
    db.person.find({$or:[{name:{$eq:'zs'}},{name:{$eq:'ls'}}]})
    db.person.find({$or:[{name:'zs'},{name:'ls'}]})
    
    //2.4$nor
    //查询所有名称不叫zs或者ls的人
    db.person.find({name:{$nin:['zs','ls']}})
    db.person.find({$nor:[{name:'zs'},{name:'ls'}]})
    
    //查询所有名称不叫zs或者性别不是男的人
    // 注意点: $nor运算符和$ne/$nin/$not一样, 如果需要查询的字段不存在, 也会算作条件成立
    db.person.find({$nor:[{gender:'男'}]})
    */
    
    db.person.find()
    
    db.person.find({age:{$ne:18}})
    db.person.find({age:{$eq:18}})
    
    //查询出不等于18的
    db.person.find({age:{$not:{$eq:18}}})
    
    //查询出不是男的人
    db.person.find({gender:{$eq:'男'}})
    
    //注意:not运算符和$ne/$nin一样,如果需要查询的字段不存在,也会算作条件成立
    //查询出不是男的人
    db.person.find({gender:{$not:{$eq:'男'}}})
    
    //and运算符
    //查询出name为zs且年龄小于18的人
    db.person.find({$and:[{name:{$eq:'zs'}},{age:{$lt:18}}]})
    //上面的简化:
    db.person.find({$and:[{nmae:'zs'},{age:{$lt:18}}]})
    
    //name为zs,age小于18
    db.person.find({name:'zs',age:{$lt:18}})
    
    //or
    //name为zs或者ls的人
    db.person.find({name:{$in:['zs','ls']}})
    //使用or来查询name为zs或是ls的人
    db.person.find({$or:[{name:'zs'},{name:'ls'}]})
    
    //nor
    //查出name不为zs或者ls的人:
    db.person.find({name:{$nin:['zs','ls']}})
    //使用nor:
    db.person.find({$nor:[{name:'zs'},{name:'ls'}]})
    //和$ne,$nin一样,它也会将不存在的字段算作不等于的条件
    db.person.find({$nor:[{gender:'男'}]})