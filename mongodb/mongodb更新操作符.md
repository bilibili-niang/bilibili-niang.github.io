---
title: mongodb更新操作符

author: icestone
tags:
- mongodb
- mongodb
- 数据库
- database

categories:  
  - mycode:db.person.insert([{name:'zs', age:18},{name:'ls', age:19},{name:'ww', age:20},{name:'zs', age:21},])db.person.find()db.person.update({name:'ww'},{age:90})//更新部分字段而不是覆盖db.person.update({name:'ww'},{$set:{age:55}})// 更新所有:db.person.up.  

created: Tue Mar 01 2022 00:00:00 GMT+0800 (中国标准时间)
---
> `mycode`:

    db.person.insert([
    {name:'zs', age:18},
    {name:'ls', age:19},
    {name:'ww', age:20},
    {name:'zs', age:21},
    ])
    

    db.person.find()
    db.person.update({name:'ww'},{age:90})
    

//更新部分字段而不是覆盖

    db.person.update({name:'ww'},{$set:{age:55}})
    

// 更新所有:

    db.person.update({name:'zs'},{$set:{age:88}},{multi:true})
    
    db.person.insert([
    {name:'zs', age:18},
    {name:'ls', age:19},
    {name:'ww', age:20},
    {name:'zs', age:21},
    ])
    db.person.find()
    
    

    db.person.insert(
    {
    name:'ww',
    age:18,
    book:{name:'跟着江哥学编程', price:2888},
    tags:['html', 'JavaScript']}
    )
    

表结构:  
\[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-sk7OAOzn-1646140076115)(/images/WmJoT\_WYc8ZGP9bppGKwmmP6.png)\]

//更新文档的字段

    db.person.update({name:'ww'},{$set:{'book.name':'javascript'}})
    

//更新数组字段

    db.person.update({name:'ww'},{$set:{'tags[0]':'html'}})
    

//注意点:如果操作的字段存在,就是更新,如果操作的字段不存在,就是插入

    db.person.update({"name":'ls'},{$set:{'score':59.5}})
    

//注意点:如果操作的是数组字段,如果操作索引不存在,那么也会自动新增  
//如果被操作的索引,前面没有数据,那么会用null填充

    db.person.update({'name':'ww'},{$set:{'tags.3':'teact'}})
    
    db.person.update({'name':'ww'},{$set:{'tags.5':'node'}})
    

更新结果:

![在这里插入图片描述](https://img-blog.csdnimg.cn/a6865cd06bc54293b127f8bf50825d4b.png)

* * *

> `teacher's code`:

1.更新操作符  
默认情况下update会使用新文档覆盖旧文档  
如果不想覆盖而是仅仅想更新其中的某些字段  
那么我们就需要使用update的更新操作符

2.$set更新操作符  
KaTeX parse error: Expected '}', got 'EOF' at end of input: …字段不存在就是新增 格式: {set:, …}

3.示例:  
db.person.update({name:‘zs’}, {KaTeX parse error: Expected 'EOF', got '}' at position 18: …t:{name:'itzb'}}̲) db.person.upd…set:{age:‘888’}})

4.更新内嵌文档和数组  
db.person.insert(\[  
{name:‘zs’, age:18},  
{name:‘ls’, age:19},  
{name:‘ww’, age:20},  
{name:‘zs’, age:21},  
\])  
db.person.update({name:‘ww’}, {age:55})  
// 更新普通字段  
db.person.update({name:‘ls’}, {KaTeX parse error: Expected 'EOF', got '}' at position 13: set:{age:55}}̲) db.person.upd…set:{age:88}}, {multi:true})

db.person.insert(  
{  
name:‘ww’,  
age:18,  
book:{name:‘跟着江哥学编程’, price:2888},  
tags:\[‘html’, ‘JavaScript’\]}  
)  
// 更新文档字段  
db.person.update({name:‘ww’}, {KaTeX parse error: Expected 'EOF', got '}' at position 31: …': 'it666.com'}}̲) // 更新数组字段 db.…set: {‘tags.0’: ‘vue’}})

5.注意点:  
// 注意点: 如果操作的字段存在, 那么就是更新, 如果操作的字段不存在, 那么就是新增  
db.person.update({name:‘ls’}, {KaTeX parse error: Expected 'EOF', got '}' at position 18: …t:{score: 59.5}}̲) // 注意点: 如果操作的…set: {‘tags.2’: ‘react’}})  
db.person.update({name:‘ww’}, {$set: {‘tags.5’: ‘node’}})