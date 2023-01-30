---
title: mongodb更新操作

author: icestone
tags:
- mongodb
- 前端
- mongodb
- 数据库
- database

categories:  
  - 更新文档MongoDB中有三个常用的更新方法: save()/update()/findAndmodify()save方法save用于往集合里添加一个新文档或者覆盖文档当没有指定文档_id的时候就是新增当指定了集合中已经存在的_id的时候就是覆盖示例db.person.insert([{name:'zs', age:18},{name:'ls', age:19},{name:'ww', age:20},{name:'zs', age:21},])update方法db.col  

created: Tue Mar 01 2022 00:00:00 GMT+0800 (中国标准时间)
---
##### 更新文档

> MongoDB中有三个常用的更新方法: save()/update()/findAndmodify()

###### save方法

save用于往集合里添加一个新文档或者覆盖文档  
当没有指定文档\_id的时候就是新增  
当指定了集合中已经存在的\_id的时候就是覆盖

###### 示例

    db.person.insert([
    {name:'zs', age:18},
    {name:'ls', age:19},
    {name:'ww', age:20},
    {name:'zs', age:21},
    ])
    

###### update方法

    db.collection.update(<filter>, <update>, <options>)
    <filter>: 筛选条件
    <update>: 新的内容
    <options>: 额外配置
    

###### 通过update覆盖满足条件数据

默认情况下如果没有使用更新操作符, 那么就会使用指定的内容覆盖符合条件的内容  
例如:

    db.person.update({name:'ww'},{age:90},{})
    

在第二个对象中并未指定它的name,那么就会空出来:  
![在这里插入图片描述](https://img-blog.csdnimg.cn/f5a4917e4b494c4d8574f9fb98d6822f.png)

###### 示例:

db.person.update({name:‘lnj’}, {name:‘zs’})

###### 注意点:

> update方法默认情况下就是覆盖

//如果不想覆盖, 而是想单纯的更新, 那么就必须在第二个参数中使用’更新操作符’  
db.person.update({name:‘ww’},{score: 99.9},{})

> update方法默认只会更新满足条件的第一个文档

//如果想更新所有满足条件的文档, 那么就必须指定第三个参数  
db.person.update({name:‘zs’}, {name:‘zs’, age:55}, {})

> 注意点: 如果在使用update方法的时候, 在第二个参数中指定了\_id, 那么就必须保证指定的\_id和被更新的文档的\_id的取值一致  
> //否则就无法更新, 否则就会报错

// 开发技巧: 在企业开发中如果需要使用update方法, 那么就不要指定\_id  
db.person.update({name:‘zs’}, {\_id:1, name:‘zs’, age:55}, {})  
db.person.update({name:‘zs’}, {\_id:ObjectId(“5e9007350718cb6e37ab4515”), name:‘zs’, age:88}, {})

> 注意点: 如果想更新所有满足条件的文档, 我们可以指定第三个参数的取值multi:true  
> // 注意点: 如果指定了multi:true, 那么就必须在第二个参数中使用’更新操作符’  
> db.person.update({name:‘zs’}, {name:‘zs’, age:55}, {multi:true})

    show databases;
    use usser;
    
    show collections;
    db.person.find()
    
    db.person.remove()
    
    db.person.insert([
    {name:'zs', age:18},
    {name:'ls', age:19},
    {name:'ww', age:20},
    {name:'zs', age:21},
    ])
    

//save已被启用  
db.person.save({age:666,name:‘it6666’})  
db.person.insertOne({age:666,name:‘it6666’})  
db.person.update({\_id:ObjectId(“61d130de0ea303199c46109f”)},{score:39.6})

> 注意这里在java的driver中会有问题(比如DG的mongodb驱动就是java的,会报错)

//update默认就是覆盖,如果不想覆盖,而是单纯地更新部分数据,那么就需要使用更新操作符:  
db.person.update({name:‘ww’},{age:90},{})

//更新数据中的连个zs的age,但是update默认只会更新第一个  
db.person.update({name:‘zs’},{name:‘zs’,age:50})  
//如果想更新满足条件的所有文档,那么必须指定第三个参数:

> 如果在使用update的时候,在第二个参数中指定了\_id,那么就必须保证指定的\_id和被更新的文档的\_id的取值一致

//否则就会报错

    db.person.update({name:'zs'},{_id:1,name:'zs',age:50})
    

// 开发技巧: 在企业开发中如果需要使用update方法, 那么就不要指定\_id

> 如果指定了multi为true,那么就必须在第二个参数中使用更新操作符,否则是覆盖,会报错

//db.person.update({name:‘zs’},{name:‘zs’,age:50},{multi:true})  
`err`:

    WriteResult({
        "nMatched" : 0,
        "nUpserted" : 0,
        "nModified" : 0,
        "writeError" : {
            "code" : 9,
            "errmsg" : "multi update is not supported for replacement-style update"
        }
    })