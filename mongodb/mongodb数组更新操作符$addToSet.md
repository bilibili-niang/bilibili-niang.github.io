---
title: mongodb数组更新操作符$addToSet

author: icestone
tags:
- 前端
- mongodb
- mongodb
- 数据库
- database

categories:  
  - mycode://example:db.person.insert([{name:'zs', books:[{name:'html', price:66}, {name:'js', price:88}], tags:['html', 'js']},{name:'ls', books:[{name:'vue', price:99}, {name:'node', price:199}], tags:['vue', 'node']}])//在name为zs的字段中的tags增添一个vuedb..  

created: Tue Mar 01 2022 00:00:00 GMT+0800 (中国标准时间)
---
> `mycode`:

//example:

    db.person.insert([
    {name:'zs', books:[{name:'html', price:66}, {name:'js', price:88}], tags:['html', 'js']},
    {name:'ls', books:[{name:'vue', price:99}, {name:'node', price:199}], tags:['vue', 'node']}
    ])
    

//在name为zs的字段中的tags增添一个vue

    db.person.updateOne({name:'zs'},{$addToSet:{tags:'Vue'}})
    

//注意:如果操作的元素不存在,那么会自动新增,并且将操作的值赋值给新增字段

    db.person.updateOne({name:'zs'},{$addToSet:{other:'123'}})
    

//注意:#addToSet会自动去重,如果添加的元素已经存在了,就不会添加

    db.person.updateOne({name:'zs'},{$addToSet:{other:'123'}})
    

//注意:如果往数组字段中添加的是文档类型,必须一模一样才会进行去重

    db.person.updateOne({name:'zs'},{$addToSet:{books:{name:'html',price:'66'}}})
    

//下面的和上面的顺序不一样,就不会进行去重

    db.person.updateOne({name:'zs'},{$addToSet:{books:{price:'66',name:'html'}}})
    

//注意:如果往数组字段中添加的数组,那么必须一模一样才会进行去重

    db.person.updateOne({name:'ls'},{$addToSet:{tags:['1','2']}})
    db.person.updateOne({name:'ls'},{$addToSet:{tags:['2','1']}})
    

//注意:如果往数组字段中添加的是数组,那么默认情况下会将整个数组作为一个元素添加进去  
//如果不想一个整体添加进去,那么必须使用$each来添加

    db.person.updateOne({name:'ls'},{$addToSet:{tags:{$each:['2','1']}}})
    db.person.find()
    

* * *

> `teacher's code`;

##### 1.$addToSet数组更新操作符

$addToSet: 向数组字段中添加元素  
格式 :

    {$addToSet: {<field>:<values>, ...}}
    

##### 2.示例

    db.person.insert([
    {name:'zs', books:[{name:'html', price:66}, {name:'js', price:88}], tags:['html', 'js']},
    {name:'ls', books:[{name:'vue', price:99}, {name:'node', price:199}], tags:['vue', 'node']}
    ])
    db.person.update({name:'zs'}, {$addToSet:{tags:'react'}})
    

##### 3.注意点

// 注意点:如果操作的元素不存在, 那么会自动新增, 并且将操作的值赋值给新增的数组字段

    db.person.update({name:'zs'}, {$addToSet:{other:'123'}})
    

// 注意点: $addToSet会自动去重, 如果添加的元素已经存在了, 那么就不会添加了

    db.person.update({name:'zs'}, {$addToSet:{other:'123'}})
    

// 注意点: 如果往数组字段中添加的是文档类型, 那么必须一模一样才会去重

    db.person.update({name:'zs'}, {$addToSet:{books:{name:'html', price:66}}})
    db.person.update({name:'zs'}, {$addToSet:{books:{price:66, name:'html'}}})
    

// 注意点: 如果往数组字段中添加的是数组, 那么也必须一模一样才会去重  
db.person.update({name:‘ls’}, {KaTeX parse error: Expected 'EOF', got '}' at position 27: …ags:\['1', '2'\]}}̲) db.person.upd…addToSet:{tags:\[‘1’, ‘2’\]}})  
db.person.update({name:‘ls’}, {KaTeX parse error: Expected 'EOF', got '}' at position 27: …ags:\['2', '1'\]}}̲) // 注意点: 如果往往数…each来添加

    db.person.update({name:'ls'}, {$addToSet:{tags:{$each: ['1', '2', '3']}}})