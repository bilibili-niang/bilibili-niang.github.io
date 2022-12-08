#### 使用node操作mysql数据库

> 安装包:

```javascript
cnpm i mysql
```



```javascript
// 引入包
var mysql = require('mysql')
// 创建连接:
var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '10086',
        database: 'users'
    })
// 2.连接数据库
connection.connect();

// 3.执行数据操作
/* connection.query('SELECT * From `users`', function(error, results, fields) {
    if (error) throw error;
    console.log('The solution is:', results);
}) */

// 插入:
connection.query(`INSERT INTO users VALUES(NULL,"admin","123456")`, function(error, results, fields) {
    if (error) throw error;
    console.log('The solution is:', results);
})

// 关闭连接:
connection.end()
```

