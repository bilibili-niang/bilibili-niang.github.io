#### 1. NVM(nodejs版本管理工具):

常用命令:

* 查看当前node的版本

> node -v

* 查看已安装的所有node的版本

> nvm list

* 更改当前项目使用的node版本(暂时的,并非更改默认版本):

> nvm use ***

* 更改node的默认版本:

> nvm alias default ***

---

#### 2.NPM:node package manager:

* 使用npm全局安装包:

> npm install *** -g  
> npm install *** --global

* npm安装,后面的`--save`意思是安装后将配置保存在当前项目中

> npm i gulp --dev--save

* 默认情况下,windows中node的包安装在:

> C:\Users\你的用户名\AppData\Roaming\npm\node_modules

* `-S`:`--save`,将包默认配置在生产环境(线上使用)中(package.json的`dependencies`)

> npm i underscore -S

* 安装package.json中的包

> npm install

* 查看当前项目需要的包

> npm list

* 筛选查看包的依赖/安装文件:

> npm list grep ***

例如:
> npm list grep gulp

在linux下是:
> npm list | grep gulp

* 只装生产环境(`dependencies`)下面的包:

> npm i --production

* 查看所有版本:

> npm view jquery versions

或者:

> npm info jquery

* 查看当前版本:

> npm view jquery version

* 安装指定版本:

> npm i jquery@2.2.4 -S

* 安装指定版本的最高版本:  
  例如安装jquery 1 中的最高版本.这里1后面什么都不写,默认就是最高版本:

> npm i jquery@1 -S

* 查看当前包那些是过期的:

> npm outdated

如果没有输出,那么说明没有老版本

* 更新包:

> npm update

* 清理缓存:

> npm cache clean --force

* 查看项目中的所有安装包(当然你也可以从package.json中查看):  
> npm list -g --dept 0






---

#### 3. node package versions:

例如有一个版本号:`12.4.6`

其中有:`major(主版本号)`:13,`minor(次版本号)`:4,`patch(补丁号)`:6

###### npm版本符号:

```json
{
  "name": "MYSELF",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "gulp -v"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1",
    "jquery": "^3.6.0",
    "underscore": "^1.13.1"
  },
  "devDependencies": {
    "gulp": "^4.0.2"
  }
}
```  

在上面的文件中,`"jquery": "^3.6.0",`中3前面的 `^` 表示只锁定主版本号,后面取最新的版本.

`"jquery": "^3.6.0",`如果改为:`"jquery": "^3.7.0",`(当前主版本为3的最新版本为:3.6.0,如果次版本号大于6,  
那么安装jquery的时候,会报错),如果次版本号小于6,可以安装;如果你配置的次版本号不存在,且小于最大次版本号,  
那么安装时会自动安装次版本号最新的版本

`"jquery": "~3.6.0",`前面使用的是 ~ 号,表示锁定主版本号和次版本号,如果使用更新,只会更新patch的版本号

`"jquery": "3.6.0",`三个版本号全锁定

`"jquery": "*",`使用最新版本


---

#### 4. NRM(npm registry manager):

查看当前源:
> npm config get registry

切换源(这里切换的是淘宝的源):
> npm config set registry https://registry.npm.taobao.org  

###### NRM管理源:  
> NRM(npm registry manager)是镜像源管理工具,有时候国外资源太慢

---

#### 5.NPX(npm package extention)  
npm从5.2版本开始,增加了npx命令,他有很多用处,本文介绍该命令的主要使用场景.Node自带npm模块,所以可以直接使用npx命令,万一不能使用,就要手动安装一下  
> $ npm i -D mocha

一般来说,调用Mocha,只能在项目脚本和package.json的scripts字段中,如果想要命令行下调用,必须像下面这样:  

> #项目的根目录下执行:  
> node-modules/.bin/mocha --version

npx就是想解决这个问题,让项目内部安装的模块用起来方便,只要像下面这样调用就行了

查看npx版本: 
> npm -v































