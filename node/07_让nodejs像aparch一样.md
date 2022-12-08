> 要nodejs像aparch一样,请求啥,返回啥,代码:  

```javascript
var http = require('http')
var fs = require('fs')
var server = http.createServer()
var wwwDir = 'C:/Project/WebStudy/heima/nodejs/02/code/app'
server.on('request', function (req, res) {
    // res.setHeader('Content-type','')
    var url = req.url;
    var filePath = '/index.html'
    if (url !== '/') {
        filePath = url
    }
    fs.readFile(wwwDir + filePath, function (err, data) {
        if (err) {
            return res.end('404 Not Found')
        }
        res.end(data)
    })
    console.log("请求路径是:" + wwwDir + filePath);
})
server.listen('3000', function () {
    console.log("服务器启动成功,地址是:127.0.0.1:3000")
})
```

