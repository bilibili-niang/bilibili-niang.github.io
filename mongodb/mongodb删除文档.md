---
title: mongodb删除文档

author: icestone
tags:
- mongodb
- 前端
- mongodb
- 数据库
- database

categories:  
  - mycode:db.person.insert([{name:'zs', age:18},{name:'zs', age:19},{name:'ls', age:20},{name:'ls', age:21},{name:'ww', age:22},{name:'zl', age:23},])//注意点:和update方法不同,remove默认会删除满足条件的所有数据db.person.remove({name:'zs'})//删除第一个满足条件的数据:db.pe.  

created: Sun Mar 06 2022 00:00:00 GMT+0800 (中国标准时间)
---
> `mycode`:

    db.person.insert([
    {name:'zs', age:18},
    {name:'zs', age:19},
    {name:'ls', age:20},
    {name:'ls', age:21},
    {name:'ww', age:22},
    {name:'zl', age:23},
    ])
    

![在这里插入图片描述](https://img-blog.csdnimg.cn/3ef3b2019881465885a931123fb43172.png)

*   //注意点:和update方法不同,remove默认会删除满足条件的所有数据

    db.person.remove({name:'zs'})
    

![在这里插入图片描述](https://img-blog.csdnimg.cn/b22fb165dca14eaea0ff0357930c2c92.png)

*   //删除第一个满足条件的数据:

    db.person.remove({name:'ls'},{justOne:true})
    

![在这里插入图片描述](https://img-blog.csdnimg.cn/4f1945919e9b4393ab988196b2abd3cb.png)

*   //删除所有文档:

    db.person.remove({})
    

![在这里插入图片描述](https://img-blog.csdnimg.cn/6bfbc64aac824fecb9dd7f6b5cfd4621.png)

> `teacher's code`:

*   1.删除文档  
    db..remove(, )  
    : 删除筛选条件  
    : 删除额外配置
    
*   2.示例
    

    db.person.insert([
    {name:'zs', age:18},
    {name:'zs', age:19},
    {name:'ls', age:20},
    {name:'ls', age:21},
    {name:'ww', age:22},
    {name:'zl', age:23},
    ])
    

*   2.示例
*   2.1删除所有满足条件  
    注意点: 和update方法不同, remove方法默认就会删除所有满足条件的数据

    db.person.remove({name:'zs'})
    

*   2.2删除第一个满足条件

    db.person.remove({name:'ls'},{justOne:true})
    

*   2.3删除所有文档

    db.person.remove({})