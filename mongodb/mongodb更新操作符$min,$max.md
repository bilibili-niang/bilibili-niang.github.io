---
title: mongodb更新操作符$min,$max

author: icestone
tags:
- mongodb
- 前端
- mongodb
- 数据库
- database

categories:  
  - mycodedb.person.deleteOne({name:'lnj'})db.person.insertOne({name:'zs',age:18})//$min是用min指定的值和原来的值比较,看谁小,留下下的数值db.person.updateOne({'name':'zs'},{$min:{age:5}})//$max是用max指定的值和原来的值比较,看谁大,留下大的数值db.person.updateOne({'name':'zs'},{$max:{age:33}})/.  

created: Tue Mar 01 2022 00:00:00 GMT+0800 (中国标准时间)
---
> `mycode`

    db.person.deleteOne({name:'lnj'})
    db.person.insertOne({name:'zs',age:18})
    

//$min是用min指定的值和原来的值比较,看谁小,留下下的数值

    db.person.updateOne({'name':'zs'},{$min:{age:5}})
    

//$max是用max指定的值和原来的值比较,看谁大,留下大的数值

    db.person.updateOne({'name':'zs'},{$max:{age:33}})
    

//注意:如果操作的字段不存在,那么会自动增加并将操作的值赋值给新增的字段

    db.person.updateOne({'name':'zs'},{$max:{score:33}})
    db.person.updateOne({'name':'zs'},{$min:{height:177}})
    

//注意:和 i n c , inc, inc,mul不同, m i n 和 min和 min和max不仅仅能操作数值类型的字段,只要是可以比较的字段,都可以进行操作  
//下面的按照字母前后顺序比较了

    db.person.insertOne({name:'def',age:666})
    db.person.updateOne({name:'def'},{$min:{name:'efg'}})
    db.person.updateOne({name:'def'},{$min:{name:'cde'}})
    

//注意:不是相同的数据类型也可以进行比较:

    db.person.updateOne({name:'zs'},{$min:{name:''}})
    
    db.person.find()
    

* * *

> `teacher's code`:

###### 1. m i n 和 min和 min和max更新操作符

KaTeX parse error: Expected '}', got 'EOF' at end of input: …比较保留更小字段值 格式: {min:{: }}  
KaTeX parse error: Expected '}', got 'EOF' at end of input: …比较保留更大字段值 格式: {max:{: }}

###### 2.示例

    db.person.insert({name:'lnj', age:33})
    db.person.update({name:'lnj'}, {$min:{age:50}})
    db.person.update({name:'lnj'}, {$min:{age:18}})
    
    db.person.update({name:'lnj'}, {$max:{age:5}})
    db.person.update({name:'lnj'}, {$max:{age:55}})
    

###### 3.注意点:

// 注意点: 如果操作的字段不存在, 那么会自动增加, 并且会将操作的值赋值给新增的字段

    db.person.update({name:'lnj'}, {$min:{weight:120}})
    db.person.update({name:'lnj'}, {$max:{height:175}})
    

// 注意点: 和 i n c / inc/ inc/mul不同, m i n / min/ min/max不仅仅能操作数值类型的字段, 只要是可以比较的字段都可以操作  
db.person.insert({name:‘def’, age:666})  
db.person.update({name:‘def’}, {KaTeX parse error: Expected 'EOF', got '}' at position 17: …in:{name:'efg'}}̲) db.person.upd…min:{name:‘cde’}})  
// 注意点: 不是相同的数据类型也可以进行比较  
db.person.update({name:‘lnj’}, {$min:{age:null}})

MongoDB对BSON的数据类型有一个潜在的排序规则(一下排名分先后,由小到大)

    Null
    Numbers(ints, longs, doubles, decimals)
    Symbol, String
    Object
    Array
    BinData
    ObjectId
    Boolean
    Date
    Timestamp
    Regular Expression
    

> http://www.icestone.work/markdown?145