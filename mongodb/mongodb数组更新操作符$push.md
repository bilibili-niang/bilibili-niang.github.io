---
title: mongodb数组更新操作符$push

author: icestone
tags:
- mongodb
- mongodb
- 数据库
- database

categories:  
  - /*1.$push数组更新操作符KaTeX parse error: Expected '}', got 'EOF' at end of input: …不去重)格式     : {push: {:, …}}*/show databases;db.person.find()db.person.updateOne({name:'zs'},{$push:{tags:'react'}})再次执行:db.person.updateOne({name:'zs'},{$push:{tags:'  

created: Tue Mar 01 2022 00:00:00 GMT+0800 (中国标准时间)
---
/\*  
1.$push数组更新操作符  
KaTeX parse error: Expected '}', got 'EOF' at end of input: …不去重) 格式 : {push: {:, …}}  
\*/

    show databases;
    
    db.person.find()
    
    db.person.updateOne({name:'zs'},{$push:{tags:'react'}})
    

![在这里插入图片描述](https://img-blog.csdnimg.cn/ab0a90efe454402ebfcc2e8f639ec313.png)

再次执行:

    db.person.updateOne({name:'zs'},{$push:{tags:'react'}})
    

![在这里插入图片描述](https://img-blog.csdnimg.cn/f2bf4dfa47fa49c5bd69e5319a795ef5.png)