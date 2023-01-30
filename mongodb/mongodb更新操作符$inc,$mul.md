---
title: mongodb更新操作符$inc,$mul

author: icestone
tags:
- mongodb
- mongodb
- 数据库
- database

categories:  
  - mycodedb.person.insertOne({name:'lnj',age:33})db.person.find()db.person.updateOne({name:'lnj'},{$inc:{age:-3}})db.person.updateOne({name:'lnj'},{$inc:{age:+5}})//乘5db.person.updateOne({name:'lnj'},{$mul:{age:5}})//除2db.person.updateOne({name:'.  

created: Tue Mar 01 2022 00:00:00 GMT+0800 (中国标准时间)
---
> `mycode`

    db.person.insertOne({name:'lnj',age:33})
    
    db.person.find()
    
    db.person.updateOne({name:'lnj'},{$inc:{age:-3}})
    
    db.person.updateOne({name:'lnj'},{$inc:{age:+5}})
    //乘5
    db.person.updateOne({name:'lnj'},{$mul:{age:5}})
    //除2
    db.person.updateOne({name:'lnj'},{$mul:{age:0.5}})
    

//注意:如果操作的字段不存在,会自动新增  
//如果哦是$inc不仅仅会新增,还会将操作的值赋值给新字段

    db.person.updateOne({name:'lnj'},{$inc:{score:65}})
    

//如果是$mul,那么只会新增字段,不会将操作的值赋值给新增的字段,使用0来填充

    db.person.updateOne({name:'lnj'},{$mul:{geight:1.75}})
    

//注意: i n c , inc, inc,mul只能操作数值类型的字段

    db.person.updateOne({name:'lnj'},{$inc:{name:65}})
    

* * *

> `teacher's code`

###### 1. i n c 和 inc和 inc和mul更新操作符

KaTeX parse error: Expected '}', got 'EOF' at end of input: …减少字段保存的值) 格式: {inc:{: }}  
KaTeX parse error: Expected '}', got 'EOF' at end of input: …除以字段保存的值) 格式: {mul:{: }}

###### 2.示例

    db.person.update({name:'lnj'}, {$inc:{age:2}})
    db.person.update({name:'lnj'}, {$inc:{age:-5}})
    
    db.person.update({name:'lnj'}, {$mul:{age:0.5}})
    db.person.update({name:'lnj'}, {$mul:{age:2}})
    

###### 3.注意点:

3.1只能操作数字类型字段  
3.2如果操作的字段不存在, 会自动新增这个字段  
不同的是 i n c 会 把 操 作 的 值 赋 值 给 ��� 增 的 字 段 , 而 inc会把操作的值赋值给新增的字段, 而 inc会把操作的值赋值给新增的字段,而mul会自动赋值为0

    db.person.update({name:'lnj'}, {$inc:{weight:2}})
    db.person.update({name:'lnj'}, {$mul:{height:2}})