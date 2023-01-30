---
title: mongodb更新操作符$rename

author: icestone
tags:
- mongodb
- mongodb
- 数据库
- nosql

categories:  
  - mycode:db.person.find()//对zs的字段名修改为了mynamedb.person.update({name:'zs'},{$rename:{name:'myname'}})//注意:如果修改的是文档字段中的字段,那么取值必须写上层级关系db.person.update({name:'ww'},{$rename:{'book.name':'book.bookname'}})//如果要操作的字段不存在,那么不会进行任何操作//注意:如果重命名之后的名称已经存在,那么之.  

created: Tue Mar 01 2022 00:00:00 GMT+0800 (中国标准时间)
---
> `mycode`:

db.person.find()

//对zs的字段名修改为了myname

    db.person.update({name:'zs'},{$rename:{name:'myname'}})
    

//注意:如果修改的是文档字段中的字段,那么取值必须写上层级关系

    db.person.update({name:'ww'},{$rename:{'book.name':'book.bookname'}})
    

//如果要操作的字段不存在,那么不会进行任何操作

//注意:如果重命名之后的名称已经存在,那么之前已经存在的字段会被删除  
//底层的本质:先调用 u n s e t 删 除 原 有 的 重 名 字 段 , 再 调 用 unset删除原有的重名字段,再调用 unset删除原有的重名字段,再调用set设置新的字段

//注意:不能通过$rename更新操作符来操作数组

    db.person.insertOne({name:'it666',age:66,book:{name:'zs',price:99},tags:[{name:'html',price:'132'},{name:'js',price:'465'}]})
    db.person.updateOne({name:'it666'},{$rename:{'tags.0.name':'tags.0.TagName'}})
    

//不要用$rename操作数组

//可以将外层的文档转移到内层

    db.person.updateOne({name:'it666'},{$rename:{age:'book.age'}})
    

//也可以将内层的文档转移到外层

    db.person.updateOne({name:'it666'},{$rename:{'book.age':'age'}})
    

* * *

* * *

> `teacher's code`

1.$rename更新操作符  
KaTeX parse error: Expected '}', got 'EOF' at end of input: …e: 重命名字段 格式 :{rename:{:, …}}

2.示例

    db.person.update({name:'zs'}, {$rename:{name:'MyName'}})
    

// 注意点: 如果修改的是文档字段中的字段, 那么取值必须写上层级关系

    db.person.update({name:'ww'}, {$rename:{'book.name':'book.BookName'}})
    

// 注意点: 如果要操作的字段不存在, 那么不会做任何的操作

    db.person.update({name:'ls'}, {$rename:{age:'MyAge'}})
    

// 注意点: 如果重命名之后的名称已经存在了, 那么已经存在的字段就会被删除  
// 底层的本质: 先调用了 u n s e t 删 除 了 原 有 的 b o o k 字 段 , 然 后 再 调 用 unset删除了原有的book字段, 然后再调用 unset删除了原有的book字段,然后再调用set修改字段的名称

    db.person.update({name:'ww'}, {$rename:{name:'book'}})
    

// 注意点: 不能通过$rename更新操作符来操作数组

    db.person.insert(
    {
    name:'it666',
    age:666,
    book:{name:'知播渔', price:999},
    tags:[{name:'html', price:'123'}, {name:'js', price:456}]
    }
    )
    db.person.update({name:'it666'}, {$rename:{'tags.0.name':'tags.0.TagName'}})
    

4.乾坤大挪移  
// 可以将外层的字段转移到内层的文档中

    db.person.update({name:'it666'}, {$rename:{age:'book.age'}})
    db.person.find()
    

// 可以将内存文档中的字段, 转移到外层文档中

    db.person.update({name:'it666'}, {$rename:{'book.age':'age'}})