关系型数据库:

- 所有的关系型数据库都需要通过`sql`语言来操作
- 所有的关系型数据库在操作之前都需要设计表结构
- 而且数据表还支持约束
  - 唯一的
  - 主键
  - 默认值
  - 非空
- 非关系型数据库非常的灵活
- 有的非关系型数据库就是 key-value 对
- 但是MangoDB是长得最像关系型数据库的非关系型数据库
  - 数据库->数据库
  - 数据表->集合(数组)
  - 表记录->(文档对象)
- MangoDB不需要设计表结构
- 也就是说你可以任意的往里面存数据,没有数据结构这么一说

----

### 启动:

> 在cmd中输入`mongod`启动,
>
> 注意,在cmd中启动时,需要看下在哪个`盘符`下,并且该盘符下必须有文件:`/data/db`否则启动失败

如果想要修改默认的数据存储目录,可以:

> mongod  –dbapth=数据存储目录路径

停止:

> 再开启服务的控制台,直接Ctrl+C即可停止
>
> 或者直接关闭控制台也可以

---

### 连接:

> 新开启一个cmd窗口,直接输入mongo,即可连接,默认连接的是本机的mangoDB服务

退出:

> 在连接状态下输入exit退出连接

---

### 基本命令:

- `show dbs`
  - 查看显示数据库
- `db`
  - 查看当前操作的数据库

- `use 数据库名称`
  - 切换到指定的数据库(如果没有,会新建)
- `show collections`
  - 显示当前数据库的所有集合
- `db.集合名称.find()`
  - 查询当前集合的所有数据



---

### 在node中操作MongoDB

##### 使用官方的mongodb包

- 略

#### 使用第三方mongoose来操作MonogoDB数据库

- 第三方包`mongoose`基于MongoDB官方的`mongodb`包再一次做了封装
  - 网址:mongoosejs.com



---

### MongoDB数据库的基本概念

- 数据库
- 集合
- 文档

```javascript
{
    qq:{
        user:[
            
        ],
           products:[
                
        ]
        ...
    },
	taobao:{
    
	},
    baidu:{
        
    }
}
```

- 可以有多个数据库，
- 一个数据库中可以有多个集合(表)
- 一个集合中可以有多个文档(表记录)
- 文档结构灵活,不需要像MySQL一样,先创数据库,表,设计表结构
  - 在这里只需要:当你需要插入数据的时候,只需要要指定哪个数据库的哪个集合操作就可以了
  - 一切都由MongoDB来帮助你完成建库建表这件事

---

### 起步,为数据库添加架构(设计schema,发布架构):

```javascript
/*
 * @Author: your name
 * @Date: 2021-07-24 22:12:34
 * @LastEditTime: 2021-07-24 22:29:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \heima\nodejs\05\code\mongoose_demo\demo_2.js
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema

// 1.连接数据库
// 插入一个新的数据库时,并不会立即创建该数据库,而是会在你第一次插入一个数据时,创建该数据库
mongoose.connect('mongodb://localhost:27017/user', { useNewUrlParser: true, useUnifiedTopology: true });
//2.设计集合表结构:
// 字段名称就是表结构中的属性名称
// 一般数据库都会有约束,是为了保护数据的完整性,不会有脏数据
var userSchema = new Schema({
        username: {
            type: String,
            required: true //必须有
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String
        }
    })
    // 3.将文档结构发布为模型
    // 第一个参数接受一个字符串,第二个参数接受一个Schema
    // 第一个参数:
    //          传入一个大写名次单数字符串用来表示你的数据库名称,
    //          mognose会自动将大写名次的字符串生成小写复数,的集合名称
    //          例如这里的User就会转变成users集合名称
    // 返回值:返回模型对象(模型构造函数)
var User = mongoose.model('User', userSchema)
// 4.当我们有了这个模型构造函数,我们就可以使用这个构造函数对模型操作了(增删改查)
```

---

### 增加数据;

```javascript
// 4.当我们有了这个模型构造函数,我们就可以使用这个构造函数对模型操作了(增删改查)
var admin = new User({
        username: 'admin',
        password: '123456',
        email: 'killicestone@126.com'
    })
    // 持久化对象:
admin.save(function(err, ret) {
    if (err) {
        console.log('存储失败');
    } else {
        console.log('存储成功');
    }
})
```



---

### 查询数据:

> 查询所有:

```javascript
 User.find(function(err, ret) {
    if (err) {
        console.log('查询失败');
    } else {
        console.log(ret);
    }
})
```

> 使用条件查询:

```javascript
User.find({
    username: '张三'
}, function(err, ret) {
    if (err) {
        console.log('查询失败');
    } else {
        console.log(ret);
    }
})
```

> 查找匹配的第一个:

```javascript
// 此时只会查找username为张三的第一条数据
User.findOne({
    username: '张三'
}, function(err, ret) {
    if (err) {
        console.log('查询失败');
    } else {
        console.log(ret);
    }
})
```

或者:

```javascript
// 此时只会查找出表中的第一条数据
User.findOne(function(err, ret) {
    if (err) {
        console.log('查询失败');
    } else {
        console.log(ret);
    }
})
```

>  例如查找username为张三,password为123456的数据:

```javascript
User.find({
    username: '张三',
    password: '123456'
}, function(err, ret) {
    if (err) {
        console.log('查询失败');
    } else {
        console.log(ret);
    }
})
```

---

### 删除数据:

> 根据条件删除一个:

```javascript
User.remove({
    username: '张三'
}, function(err, ret) {
    if (err) {
        console.log('删除失败');
    } else {
        console.log('删除成功');
        console.log(ret);
    }
})
```

> 根据id删除一个

```javascript
Model.findByIdAndRemove(id,[options],[callback])
```

---



### 更新数据:

> 根据id更新数据

```javascript
User.findByIdAndUpdate('60fc26d4d4309417f001d602', {
    password: '123'
}, function(err, ret) {
    if (err) {
        console.log('更新失败');
    } else {
        console.log('更新成功');
        console.log(ret)
    }
})
```

> 根据指定条件更新所有:

```javascript
model.findOneAndUpdate([coditions],[update],[options],[callback])
```



