#### 使用:

安装:

> cnpm i -S express-session

配置:

```javascript
app.use(session({
    secret: 'kannimadesession', //在生成的session后面添加的字符串,和在md5密码后面加上一个字符串防止别人对比出来的同理
    resave: false,
    saveUnitialized: true //无论有没有session,都默认给你分配一把钥匙
}))
```

使用:

```javascript
//添加session
req.session.foo='bar'
//获取session
req.session.foo
```

提示:默认seesion数据是内存存储,服务器一旦重启就会丢失,真正的生产环境会把session进行持久化存储

​	
