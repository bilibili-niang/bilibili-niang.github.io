1.CSS模块Tree-Shaking  
不光JS模块可以进行Tree-Shaking, CSS模块也可以进行Tree-Shaking  

2.如何开启CSS模块Tree-Shaking  
https://github.com/webpack-contrib/purifycss-webpack  
2.1安装相关插件  
```
npm i -D purifycss-webpack purify-css glob-all  
```
2.2配置插件  
```
const PurifyCSS = require("purifycss-webpack");  
const glob = require("glob-all");  
```
```
new PurifyCSS({
    paths: glob.sync([  
        // 要做CSS Tree Shaking的路径文件  
        path.resolve(__dirname, "./*.html"),  
        path.resolve(__dirname, "./src/js/*.js"),  
    ])
}),
```

---

操作:

```
npm i -D purifycss-webpack purify-css glob-all  
```
在package.json中配置:
```
const glob = require("glob-all");  
const PurifyCSS = require("purifycss-webpack");  
```
之后,在`webpack.config.prod`的plugin中创建代码:
```
new PurifyCSS({
    paths: glob.sync([  
        path.join(__dirname, 'src/*.html')
    ])
}),
```

如果你还要过滤js文件,在`webpack.config.prod`的`plugins`中添加:
```
new PurifyCSS({
    paths: glob.sync([
        // 要做CSS Tree Shaking的路径文件  
        // 告诉webpack要过滤哪些文件
        // path.resolve(__dirname, "./*.html"),
        path.resolve(__dirname, "src/js/*.js"),
        path.join(__dirname, 'src/*.html')
    ])
}),
```

> 注意:配置TreeShaking应该是在`webpack.config.prod`中完成,