```json
{
  "name": "webpack_study",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    //webpack serve:npm run dev 时 dev要执行的动作 ;--open:完成更新后自动在浏览器中打开  --port 3000:指定端口为3000; --content-base src : 自动打开浏览器时自动打开的根路径;--hot : 启用热重载,更改代码之后,仅仅替换部分代码,并不是再次生成新的文件
    "dev": "webpack serve --open  --port 3000 --content-base src --hot",
    "build": "webpack --mode production"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1",
    "jquery": "^3.6.0"
  },
  "devDependencies": {
    "webpack": "^5.30.0",
    "webpack-cli": "^4.6.0",
    "webpack-dev-server": "^3.11.2"
  },
  "description": ""
}

```