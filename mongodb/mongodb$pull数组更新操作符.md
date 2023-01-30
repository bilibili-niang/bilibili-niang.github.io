---
title: mongodb$pull数组更新操作符

author: icestone
tags:
- mongodb
- mongodb
- 数据库
- nosql

categories:  
  - mycode:db.person.insert([{name:'zs', books:[{name:'html', price:66}, {name:'js', price:88}], tags:['html', 'js', ['1', '2']]},{name:'ls', books:[{name:'vue', price:99}, {name:'node', price:199}], tags:['a', 'b', 'ab', 'c', 'ac']}])db.person.find().  

created: Tue Mar 01 2022 00:00:00 GMT+0800 (中国标准时间)
---
> `mycode`:

    db.person.insert([
    {name:'zs', books:[{name:'html', price:66}, {name:'js', price:88}], tags:['html', 'js', ['1', '2']]},
    {name:'ls', books:[{name:'vue', price:99}, {name:'node', price:199}], tags:['a', 'b', 'ab', 'c', 'ac']}
    ])
    

    db.person.find()
    

![在这里插入图片描述](https://img-blog.csdnimg.cn/a37f474edfee45c7843a3e97d8ee4a40.png)

db.person.updateOne({name:‘zs’},{$pull:{tags:‘js’}})  
![在这里插入图片描述](https://img-blog.csdnimg.cn/0c1ca9bea58e4e0d88a0f8e4323171f5.png)

//也可以是使用正则表达式:

    db.person.updateOne({name:'ls'},{$pull:{tags:/^a/}})
    

![在这里插入图片描述](https://img-blog.csdnimg.cn/26d693ef957846c096e4bb3ae133c4fc.png)

// 注意点: 如果要删除的元素是一个数组, 那么必须一模一样才能删除

    db.person.updateOne({name:'zs'},{$pull:{tags:["2","1"]}})
    

![在这里插入图片描述](https://img-blog.csdnimg.cn/3c85ec1553e54db3b29948c98262a026.png)

    db.person.updateOne({name:'zs'},{$pull:{tags:["1","2"]}})
    

![在这里插入图片描述](https://img-blog.csdnimg.cn/138c1385996d44d5b2e5290695c06284.png)

// 注意点: 如果要删除的元素是一个文档, 那么不用一模一样也可以删除

    db.person.updateOne({name:'zs'},{$pull:{books:{price:66,name:'html'}}})
    

![在这里插入图片描述](https://img-blog.csdnimg.cn/5df64888b69e4e6a8b40be14cbc04c92.png)

//只要有一个匹配的就会把整个文档删掉

    db.person.updateOne({name:'zs'},{$pull:{books:{name:'js'}}})
    

![在这里插入图片描述](https://img-blog.csdnimg.cn/795a7f4f6ffd40e4a3b70d525fb4a412.png)

> `teacher's code`;

1.$pull数组更新操作符  
KaTeX parse error: Expected '}', got 'EOF' at end of input: …字段中删除特定元素 格式: {pull: {:<value|condition>, …}}

2.示例  
db.person.insert(\[  
{name:‘zs’, books:\[{name:‘html’, price:66}, {name:‘js’, price:88}\], tags:\[‘html’, ‘js’, \[‘1’, ‘2’\]\]},  
{name:‘ls’, books:\[{name:‘vue’, price:99}, {name:‘node’, price:199}\], tags:\[‘a’, ‘b’, ‘ab’, ‘c’, ‘ac’\]}  
\])  
删除特定元素  
根据条件删除元素  
db.person.update({name:‘zs’}, {KaTeX parse error: Expected 'EOF', got '}' at position 17: …ull:{tags:'js'}}̲) db.person.upd…pull:{tags:/^a/}})

3.注意点  
// 注意点: 如果要删除的元素是一个数组, 那么必须一模一样才能删除  
db.person.update({name:‘zs’}, {KaTeX parse error: Expected 'EOF', got '}' at position 23: …ags:\['2', '1'\]}}̲) db.person.upd…pull:{tags:\[‘1’, ‘2’\]}})  
// 注意点: 如果要删除的元素是一个文档, 那么不用一模一样也可以删除  
db.person.update({name:‘zs’}, {KaTeX parse error: Expected 'EOF', got '}' at position 37: …, name:'html'}}}̲) db.person.upd…pull:{books:{name:‘js’}}})