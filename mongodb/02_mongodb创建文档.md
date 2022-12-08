### 主键

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

因为MongoDB是支持'横向扩展'的数据库
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

在MongoDB中支持除了'数组类型'以外的其它类型数据作为主键
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



### 写入文档:

1.写入一个文档

```shell
db.<collection>.insertOne(
    <document>,
    {
        writeConcern: <document>
    }
);
document: 需要写入的文档
writeConcern: 写入安全级别
```

2.安全级别
用于判断数据是否写入成功,
安全级别越高, 丢失数据风险越小, 但是性能消耗(操作延迟)也就越大
默认情况下MongoDB会开启默认的安全些级别,先不用关心

3.注意点
在使用insertXXX写入文档时, 如果调用insertOne的集合不存在会自动创建

```shell
db.person.insertOne({name:'zs', age:18})
db.person.find()
db.student.insertOne({name:'zs', age:18}) #集合不存在会自动创建
db.student.find()
```

4.其它方式

```shell
db.<collection>.save(
    <document>,
    {
        writeConcern: <document>
    }
);
```

```shell
db.person.save({name:'ls', age:19})
db.person.find()
db.teacher.save({name:'ls', age:19}) #集合不存在会自动创建
db.teacher.find()
```

5.insertOne和save不同
*`主键冲突时insertOne会报错,而save会直接用新值覆盖久值`*

```shell
db.person.insertOne({_id:1, name:'ww', age:22})
db.person.find()
db.person.insertOne({_id:1, name:'ww', age:22}) #报错
db.person.save({_id:1, name:'it666', age:66}) #用新数据替换久数据
db.person.find()
```

1.写入多个文档

若写入的文档不存在,则会自动创建该文档,insert,insertOne,save都是这样的

```shell
db.<collection>.insertMany(
    [<document>, ...],
    {
        writeConcern: <document>,
        ordered: <boolean>
    }
);
```

ordered: 是否按顺序写入
ordered默认取值是true, 也就是会严格按照顺序写入
如果ordered是false, 则不会按照顺序写入, 但写入效率更高(系统会自动优化)

```shell
db.person.insertMany(
[{name:'zs', age:18},{name:'ls', age:19},{name:'ww', age:20}],
{}
)
db.person.find()
```

2.注意点:
如果ordered是true, 前面的文档出错, 后面的所有文档都不会被写入
如果ordered是false, 前面的文档出错, 后面的所有文档也会被写入

```shell
db.person.insertMany(
[{_id:1, name:'zs', age:18},{_id:1, name:'ls', age:19},{_id:2, name:'ww', age:20}],
{ ordered: true }
)
db.person.find()

db.person.remove({})
db.person.insertMany(
[{_id:1, name:'zs', age:18},{_id:1, name:'ls', age:19},{_id:2, name:'ww', age:20}],
{ ordered: false }
)
db.person.find()
```

#### 写入一个或多个文档

```shell
db.<collection>.insert(
    <document> or ,[<document>, ...]
    {
        writeConcern: <document>,
        ordered: <boolean>
    }
);
```

insertOne和insertMany结合体

2.注意点:
和insertOne/insertMany一样,  集合不存在会自动创建
和insertOne/insertMany一样,  `主键冲突会报错`
和insertMany一样, 默认都是按顺序插入, 前面的文档出错, 后续所有文档不会被插入



#### 写入多个文档:

1.写入多个文档

```shell
db.<collection>.insertMany(
    [<document>, ...],
    {
        writeConcern: <document>,
        ordered: <boolean>
    }
);
```

- ordered: 是否按顺序写入
- ordered默认取值是true, 也就是会严格按照顺序写入
- 如果ordered是false, 则不会按照顺序写入, 但写入效率更高(系统会自动优化)

```shell
db.person.insertMany(
[{name:'zs', age:18},{name:'ls', age:19},{name:'ww', age:20}],
{}
)
db.person.find()
```

2.注意点:
如果ordered是true, 前面的文档出错, 后面的所有文档都不会被写入
如果ordered是false, *`前面的文档出错, 后面的所有文档也会被写入`*

```shell
db.person.insertMany(
[{_id:1, name:'zs', age:18},{_id:1, name:'ls', age:19},{_id:2, name:'ww', age:20}],
{ ordered: true }
)
db.person.find()

db.person.remove({})
db.person.insertMany(
[{_id:1, name:'zs', age:18},{_id:1, name:'ls', age:19},{_id:2, name:'ww', age:20}],
{ ordered: false }
)
db.person.find()
```

#### 清空一个集合的所有数据(例如清空db数据库下的person集合):

> `db.person.remove({})`

---



### 查询文档

```shell
db.<collection>.find(
    <query>,
    <projection>
)
```

- query: 查询条件, 相当于MySQL中的where
- projection: 投影条件, 规定了结果集中显示那些字段, 相当于MySQL中的 select 字段1, 字段2, .. from 表名;

#### 查询所有文档

```shell
db.<collection>.find();
```

不传入条件, 默认就是查询所有

#### 查询满足条件文档

>  db.person.insert([{name:'zs', age:17},{name:'ls', age:18},{name:'ww', age:19}])

#### 单个字段条件

>  db.person.find() // 默认会返回指定集合中所有的数据和所以的字段
> db.person.find({name:'zs'}) // 我们可以通过第一个参数指定查询条件, find方法会把所有满足条件的数据返回给我们

#### 多个字段条件

> db.person.find({name:'zs', age:17}) // 默认是And关系, 也就是默认要求同时满足所有指定的条件, 才会返回对应的数据
> db.person.find({age:17, name:'zs'}) // 注意点: 没有顺序要求, 只要是同时满足多个条件即可

#### 文档中又是文档情况

```shell
db.person.insert(
[{name:'zs', age:17, book:{name:'HTML', price:66}},
{name:'ls', age:18, book:{name:'JavaScript', price:88}},
{name:'ww', age:19, book:{name:'Vue', price:199}}]
)
```

> db.person.find({'book.name':'JavaScript'}) // 如果某一个文档的某一个字段的取值又是一个文档, 那么在判断的时候我们可以通过`'字段.文档:属性名称`的方式来判断

#### 查询指定字段

0表示不显示, 1表示显示
除主键以外, 其它字段不能同时出现0和1(要么不写,写了就必须全是1或者全是0)

>  db.person.find({},{_id:0}) // 如果不想查询某一个字段, 那么就可以指定这个字段的投影取值为0_

>  db.person.find({},{_id:0, name:1, age:1, book:1}) // 如果想查询某一个字段, 那么就可以指定这个字段的投影取值为1_
>                                                   // 默认情况下如果不指定, 那么所有字段的投影取值都是1

>  db.person.find({},{_id:0, name:1, age:1, book:0}) // 除了_id字段以外, 其它的字段不能同时出现0和1

>  db.person.find({},{_id:0, book:0}) 

---



### 比较操作符

和MySQL一样, MongodDB中也支持很多比较操作符
$eq: 等于 / $ne: 不等于
$gt: 大于 / $gte: 大于等于
$lt: 小于 / $lte: 小于等于

#### 使用格式

```shell
db.<collection>.find(
    {<field>: {$<operator>: <value>}},
    <projection>
)
```

#### 示例

```shell
db.person.insert([{name:'zs', age:17, gender:'男'},{name:'ls', age:18},{name:'ww', age:19}])
```

查询名称叫做zs的人
查询所有成年人
查询所有未成年人
查询所有不是18岁的人

```shell
db.person.find({name:'zs'}) //默认情况下就是按照相等来判断
db.person.find({name:{$eq:'zs'}}) //这里就是明确的告诉MongoDB需要按照相等来查询
db.person.find({age:{$gte: 18}}) //查询年龄大于18的人
db.person.find({age:{$lt: 18}})
db.person.find({age:{$ne: 18}})
```

注意点: 没有指定字段也算作不等于

```shell
db.person.find({gender:{$ne: '女'}}) //注意点: 在做不等于判断的时候, 没有需要判断的字段, 也算作是不等于
```

---

### 其它比较操作符
`$in`: 匹配和任意指定值相等的文档
`$nin`:匹配和任意指定值都不相等的文档

2.使用格式

```shell
db.<collection>.find(
    {<field>: {$<operator>: [<value1>, <value2>, ...]}},
    <projection>
)
```

#### 实例
查询名称叫做zs或者ls的人
查询名称不叫zs或者ls的人
查询性别不是男或女的人

```shell
db.person.find({name:{$in:['zs', 'ls']}}) // 匹配和任意指定值相等的文档
db.person.find({name:{$nin:['zs', 'ls']}}) // 匹配和任意指定值都不相等的文档
db.person.find({gender:{$nin:['男', '女']}}) // 注意点: 和$ne一样, 如果没有需要判断的字段, 也算作满足条件
```

注意点: 没有指定字段也算作不包含

---

### 逻辑操作符
$not: 匹配条件不成立的文档

```shell
{<field>: {$not: {<expression>}}}
```

$and: 匹配条件全部成立的文档

```shell
{<field>: {$and: [{<expression1>}, {<expression2>}, ...}]}
```

$or : 匹配至少一个条件成立的文档

```shell
{<field>: {$or: [{<expression1>}, {<expression2>}, ...}]}
```

$nor: 匹配多个条件全部不成立的文档

```shell
{<field>: {$nor: [{<expression1>}, {<expression2>}, ...}]}
```



#### 示例:
#### $not

//查询所有年龄不等于18岁的人
`db.person.find({age:{$ne:18}})`
`db.person.find({age:{$not:{$eq:18}}})`
//查询不是男人的人
`db.person.find({gender:{$eq:'男'}})`
// 注意点: $not运算符和$ne/$nin一样, 如果需要查询的字段不存在, 也会算作条件成立
`db.person.find({gender:{$not:{$eq:'男'}}})`

#### $and
//查询所有名称叫做zs的未成年人
`db.person.find({$and:[{name:{$eq:'zs'}},{age:{$lt:18}}]})`
`db.person.find({$and:[{name:'zs'},{age:{$lt:18}}]})`
`db.person.find({name:'zs', age:{$lt:18}})`

#### $or
//查询所有名称叫做zs或者ls的人
`db.person.find({name:{$in:['zs','ls']}})`
`db.person.find({$or:[{name:{$eq:'zs'}},{name:{$eq:'ls'}}]})`
`db.person.find({$or:[{name:'zs'},{name:'ls'}]})`

#### $nor

//查询所有名称不叫zs或者ls的人
`db.person.find({name:{$nin:['zs','ls']}})`
`db.person.find({$nor:[{name:'zs'},{name:'ls'}]})`//查询所有名称不叫zs或者性别不是男的人

> 注意点: $nor运算符和$ne/$nin/$not一样, 如果需要查询的字段不存在,  也会算作条件成立
> db.person.find({$nor:[{gender:'男'}]})



```
db.person.find(
{
$and:[
{
name:{
$eq:'zs'},{age:{$lt:18}
}
}
]
}
)
```



