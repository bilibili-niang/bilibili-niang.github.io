#### 1.创建vue脚手架第一个项目
```shell
vue init webpack 项目名
```

#### 2.创建第一个项目

```html
hello                   ->项目名
    -build              ->用来使用webpack打包使用build依赖
    -config             ->用来做整个项目配置目录
    -node_modules       ->用来管理项目中使用的依赖
    -src                ->用来书写vue的源代码[重点]
        +assets         ->用来存放静态资源[重点]
         components     ->用来书写vue组件[重点]
         router         ->用来配置项目中路由[重点]
         App.vue        ->项目中更组件[重点]
         main.js        ->项目中主入口[重点]
    -static             ->其它静态
         -.babelrc      ->将es6语法转为es5运行
         -.editorconfig ->项目编辑配置
         -.gitignore    ->git版本控制忽略文件
         -.postcssrc.js ->源码相关js
         -index.html    ->项目主页
         -package-lock.json  ->类似于pom.xml依赖管理,jquery等,不建议手动修改
         -package.json  ->对package.json加锁
         -README.md     ->项目说明文件
```

#### 3.如何运行:在项目的根目录中执行
```shell
npm start 运行前端系统
```

#### 4.如何访问项目:
```shell
http://localhost:8081
```

#### 5.Vue Cli中项目开发方式
注意:一切皆组件  一个组件中 js代码 html代码 css样式
    
1.VueCli开发方式是在项目中开发一个一个组件对应一个业务模块,日后可以将多个组件组合到一起,形成一个前端系统
2.任何在使用vue Cli进行开发时不在书写HTML,编写的是一个个组件(组件后缀是.vue结尾的文件),日后打包时vue cli会将组件编译成运行的html文件

### 如何开发cue脚手架:

`注意:在VueCli中一切皆组件`

> 在脚手架中使用axios:
安装axios
```shell
npm i axios
```
配置:
main.js中引入:
```shell
import axios from "axios";
```
接着更改内部的$http为axios(在main.js中修改)
```shell
Vue.prototype.$http=axios;
```
使用axios:
在需要发送异步请求的位置,
```shell
this.$http.get('url').then((res)=>{
})
```



