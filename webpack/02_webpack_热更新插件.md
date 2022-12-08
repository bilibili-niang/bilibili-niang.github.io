### 热更新插件的配置:  
`webpack.vonfig.js`中:  
```javascript
module.exports = {
    devServer: {
        hot: true, //开启热更新,只要开启了热更新就不会自动刷新网页了
        hotOnly: true, //哪怕不支持热更新也不要刷新网页
                }
            },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
        ],
```


### 注意:热更新插件中,css使用不同的loader效果是不同的:  
`css loader`中使用(这个loader也会同时压缩css代码的):  
`loader: MiniCssExtractPlugin.loader,`它并不会进行热更新,压迫使用它还要求热更新,需要配置:  
```javascript
    loader: MiniCssExtractPlugin.loader,
        options: {
            hmr: true
        }
```  
此时在压缩CSS代码的同时还会进行热更新  
### 使用下面的`loader`不需要配置其他的:  
loader: "style-loader"