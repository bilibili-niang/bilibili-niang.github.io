---
title: ListView练习_购物商城
author: IceStone
tags:
  - android
categories:
  - android
abbrlink: 4285
date: 2021-10-21 22:29:00
---

### 基础命令


#### 启动数据库
*(这一句是在cmd中执行mongod命令的前提)*
> `mongod`

#### 连接mongodb
> `mongo`

#### 查看数据库
和MYSQL中的 how databases; 指令一样,查看数据库
> `show dbs`

#### 创建数据库
> use 新的数据库名称

#### 查看一个数据库中的集合
查看使用的数据库中的集合*
> show collections
*其中`admin`,`local`,`config`三个数据库是默认的*

#### 创建一个集合
*为datacase(指定的数据库)创建一个集合*
> database.createCollection(‘创建集合的名称’)

#### 往一个集合中插入数据
往集合中插入内容,它也是可以插入多个数据的
> database.集合名称.insert({json对象})

---

### mongodb的主键:

- MongoDB的主键和MySQL一样, 也是用于保证每一条数据唯一性的
- 和MySQL不同的是, MongoDB中的主键无需明确指定
    + 每一个文档被添加到集合之后, MongoDB都会自动添加主键
    + MongoDB中文档主键的名称叫做 _id

- 默认情况下文档主键是一个ObjectId类型的数据
    + ObjectId类型是一个12个字节字符串(5e8c5ae9-c9d35e-759b-d6847d)
        + 4字节是存储这条数据的时间戳
        + 3字节的存储这条数据的那台电脑的标识符
        + 2字节的存储这条数据的MongoDB进程id
        + 3字节是计数器


#### 为什么要使用ObjectId类型数据作为主键?

> 因为MongoDB是支持'横向扩展'的数据库
- 横向扩展是指'增加数据库服务器的台数'
- 纵向扩展是指'增加数据库库服务器的配置'

- 过去一个数据库只能安装在一台电脑上, 但是每台电脑的性能是有峰值的
  一旦达到峰值就会导致服务器卡顿、宕机、重启等问题.
  所以过去为了防止如上问题的出现,我们只能不断的'纵向扩展'
  也就是不断的提升服务器的配置, 让服务器能处理更多的请求
  但是纵向扩展也是有峰值的, 一台电脑的配置不可能无限提升
  所以为了解决这个问题就有了分布式数据库
- 分布式数据库是指可以在多台电脑上安装数据库, 然后把多台电脑组合成一个完整的数据库,
  在分布式数据库中,我们可以通过不断同步的方式, 让多台电脑都保存相同的内容
  当用户请求数据时, 我们可以把请求派发给不同的数据库服务器处理
  当某一台服务器宕机后, 我们还可以继续使用其它服务器处理请求
  从而有效的解决了单台电脑性能峰值和单台电脑宕机后服务器不能使用的问题
  
  

#### 是否支持其它类型数据作为主键?

> 在MongoDB中支持除了'数组类型'以外的其它类型数据作为主键  
在MongoDB中甚至还支持将一个文档作为另一个文档的主键(复合主键),如:

```shell
db.person.insert({name: 'lnj', age: 33});
db.person.insert({_id: 1, name: 'lnj', age: 33});
#db.person.insert({_id: 1, name: 'lnj', age: 33}); #报错
db.person.insert({_id: '1', name: 'lnj', age: 33});
db.person.insert({_id: {name:'it66', gender: '男'}, name: 'lnj', age: 33});
#db.person.insert({_id: {name:'it66', gender: '男'}, name: 'lnj', age: 33}); #报错
db.person.insert({_id: {gender: '男', name:'it66'}, name: 'lnj', age: 33});
```

> 如果说为了保证id的唯一性,那么需要指定的id不会一模一样!


