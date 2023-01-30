---
title: mongodb的字段操作符

author: icestone
tags:
- mongodb
- mongodb
- 数据库
- nosql

categories:  
  - //字段操作服符db.person.remove()db.person.insert([{name:'zs', age:17, gender:'男'},{name:'ls', age:18},{name:'ww', age:19},{name:'it666', age:20, gender:'女'}])//需求:要求查询出所有拥有gender属性的文档:db.person.find({gender:{$exists:true}})//查询出所有男性://应用场景:配合$ne/$n  

created: Wed Feb 09 2022 00:00:00 GMT+0800 (中国标准时间)
---
//字段操作服符

    db.person.remove()
    
    db.person.insert([
    {name:'zs', age:17, gender:'男'},
    {name:'ls', age:18},
    {name:'ww', age:19},
    {name:'it666', age:20, gender:'女'}
    ])
    
    //需求:要求查询出所有拥有gender属性的文档:
    db.person.find({gender:{$exists:true}})
    //查询出所有男性:
    
    //应用场景:配合$ne/$nor/$not来清理数据
    db.person.find({gender:{$ne:'男'}})
    //查询出不是男且字段不为空的人:
    db.person.find({gender:{$ne:'男',$exists:true}})
    
    db.person.insert([
    {name:'itzb', age:'88'},
    {name:'lnj', age:'999'}
    ])
    
    db.person.find()
    
    //查出所有年龄为字符串的文档
    db.person.find({age:{$type:'string'}})