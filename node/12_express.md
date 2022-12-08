###  Express

原生的express在某些方面表现不足以满足我们的需求

---

### 修改完代码,服务器自动重启:

> 可以使用一个第三方的命令行工具:

使用`nodemon`来帮助我们解决频繁修改服务器代码的工具

他还是一个基于nodejs开发的一个第三方命令行工具,

安装:

```javascript
// 在任意目录
cnpm i --global nodemon
```

安装完毕之后,使用:

```javascript
// 原来:
node app.js
// 使用nodemon:
nodemon app.js
```

只要是以nodemon启动的服务器,他会监视你的文件变化,当文件发生变化的时候,自动重启服务器

---

### 基本路由,post:

基本路由:

```javascript
var express=require('express')
// 1.创建app
var app=express()

app.get('/',function(req,res){
    // res.write('hello')
    // res.end()
    
    // express推荐不要使用原来的那些,而去使用res.send()
    res.send('hello')
})
```

---

### 路由:

- 请求方法
- 请求路径
- 请求处理函数

get:

```javascript
// 当你以get方法请求 / 的时候,执行对应的处理函数
app.get('/',function(){
ressend('hello world!')
})
```

post:

```javascript
// 当你以post方法请求 /  的时候,执行对应的处理函数
app.post('/',function(){
    res.send('got a post request')
})
```

---

### 访问静态资源:

> 有三种方式:

```javascript
var express = require('express')
var app = express()

// 1.
// 当以/public/开头的时候,去 ./public/ 目录中去找对应的资源
// app.use('/public/', express.static('./public/'))
// 上面的可以通过 http://127.0.0.1:3000/public/login.html 来访问


// 2.
// 当省略第一个参数的时候,则可以通过省略 /public 的方式来访问
// 这种方式的好处就是可以省略 /public/ 
app.use(express.static('./public/'))
// 省略之后,可以通过 http://127.0.0.1:3000/login.html 来访问

// 3.
// 此时必须是/a/public目录中的资源具体路径
// app.use('/a/', express.static('./public/'))
// 可以认为是为 /public/ 起别名
// 可以通过下面的路径来访问:
// http: //127.0.0.1:3000/a/login.html

// 更推荐第一种方式

app.get('/', function(req, res) {
    // res.write('hello')
    // res.end()
    // express推荐不要使用原来的那些,而去使用res.send()
    res.send('hello start apge')
})
app.listen(3000, function() {
    console.log("app is run at port 3000");
})
```

---

### 在express中配置使用art-template:

安装:

```shell
npm install --save art-template
npm install --save express-art-template
```

配置:

```javascript
app.engine('art', require('express-art-template'))
// 或者:
app.engine('html', require('express-art-template'))
// 使用前者的话,指定模板文件的后缀名必须为 .art
// 使用后者的话,模板文件名可以
```



使用:

```javascript
app.get('/', function(req, res) {
    // express默认会去项目中的views目录找到index.html
    res.render('index.html',{
        title:'hello world'
    })
})
```

> 如果希望修改views默认的视图存储目录,可以:

```javascript
app.set('views',目录路径)
```

---

### 在Express中获取表单POST请求体数据:

在express中没有内置获取表单post请求体的API,这里我们需要使用一个第三方包,`body-parse`

安装:

```shell
npm install --save body-parse
```

配置:

```javascript
var express =requeire('express')
// 引包
var bodyParser=require('body-parser')
var app=express()

// 配置body-parser 中间件(插件,专门用来解析表单POST请求体)
// 只要加入这个[配置,则在req请求对象上会多出来一个属性: body
// 也就是说你这个直接通过req,body,来获取表单POST请求体数据了
// parser application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))
// parse application/json
app.use(bodyParser.json())
app.use(function(req.res){
    // 可以通过req.body来获取表单POST请求体数据
    res.end(JSON.stringify(req.body,null,2))
})
```

使用:

```javascript
app.use(function(req.res){
    res.setHeader('Content-Type','text/plain')
    res.write('you posted:\n')
    //可以通过req.body来获取表单POST请求体数据
    res.end(JSON.stringIify(req.body,null,))
})
```



---

### 在Express中获取表单GET请求参数

Express内置了一个API,可以直接通过`req.query`来获取

```javascript
req.query
```

---



### Express对于没有配置的路径,默认会返回一个Cat not get xxx

> 如果你想要定制这个404页面,
>
> 需要通过中间件来配置



> 只需要在自己的路由之后增加一个

```javascript
app.use(function(req,res){
//未处理的请求路径都会跑到这里
//404
})
```



