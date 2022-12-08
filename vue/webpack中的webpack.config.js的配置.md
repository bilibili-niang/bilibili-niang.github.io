```javascript
const path = require('path')
//这个配置对象其实就是一个js文件,通过node中的模块操作,向外暴露了一个配置对象
module.exports = {
    entry: path.join(__dirname, './src/main.js'),//入口,表示使用webpack要打包哪个文件
    output: {
        path: path.join(__dirname, './dist'),//指定打包好的文件存放的路径
        filename: 'bundle.js'//打包好文件的存放名字
    },
    mode: 'development',//设置mode
}

```