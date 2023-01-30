---
title: 微信小程序_12,WXS脚本

author: icestone
tags:
- 微信小程序
- 微信小程序
- javascript
- 前端

categories:  
  - WXS(WeiXin Script)是小程序独有的一套脚本语言,结合WXML,可以构建出页面的结构wxml中我们无法调用在页面的.js中定义的函数,但是wxml中可以调用wxs中定义的函数,因此,小程序中wxs的典型应用场景就是过滤器虽然wxs的语法类似于javascript,但是wxs和javascript是完全不同的两种语言1.wxs有自己的数据类型2.wxs不支持ES5及以上的语法形式3.wxs遵循CommonJS规范wxs代码可以编写在wxml文件中的标签内,就像javascript代码可以编写在h  

created: Fri Jul 08 2022 00:00:00 GMT+0800 (中国标准时间)
---
> 什么是WXS:

WXS(WeiXin Script)是小程序独有的一套脚本语言,结合WXML,可以构建出页面的结构

wxml中我们无法调用在页面的.js中定义的函数,但是wxml中可以调用wxs中定义的函数,因此,小程序中wxs的典型应用场景就是过滤器

> wxs和javascript的关系

虽然wxs的语法类似于javascript,但是wxs和javascript是完全不同的两种语言

1.wxs有自己的数据类型

*   number数值类型,string字符串类型,boolean布尔类型,object对象类型
*   function函数类型,array数组类型,date日期类型,regexp正则

2.wxs不支持ES5及以上的语法形式

*   不支持:let,const,解构赋值,展开运算符,箭头函数,对象属性简写,etc…
*   支持:var定义变量,普通function函数等类似于ES5的语法

3.wxs遵循CommonJS规范

*   module对象
*   require()函数
*   module.exports对象

> 基础语法:

wxs代码可以编写在wxml文件中的标签内,就像javascript代码可以编写在html文件中的

例如:

    <wxs module="lifeCycle">
      module.exports.toUpper = function (str) {
        return str.toUpperCase()
      }
    </wxs>
    

上面是一个将字符串转为大写的方法

> 定义外联的wxs脚本:

wxs代码还可以编写在以.wxs为后缀名的文件内,就像javascript代码可以编写在以.js为后缀名的文件中一样,示例代码如下:

在untils下新建一个`tools.wxs`,并在其中添加:

    function toLower(str) {
      return str.toLowerCase()
    }
    
    module.exports = {
      // 它不支持对象属性的简写
      toLower: toLowers
    }
    
    

> 如何使用外联的wxs脚本:

在wxml中如果要引入外联的wxs脚本,必须为标签添加module和src属性,其中:

*   module是用来指定模块的名称
*   src用来指定要引入的脚本的路径,且必须是相对路径  
    示例代码如下:

    {{m2.toLower("TEST STRING")}}
    
    <!--应用外联的tools.wxs脚本,并命名为m2-->
    <wxs module="m2" src="../../utils/tools.wxs"></wxs>
    

> 不能作为组件的事件回调

wxs典型的应用场景就是"过滤器",经常配合Mustache语法进行使用,例如:

    <view>{{m2.toLower("TEST STRING")}}</view>
    

但是,在wxs中定义的函数不能作为组件的事件回调函数,例如,下面的用法是错误的:

    <button bindtap="m2.toLower">按钮</button>
    

> 隔离性:

隔离性指的是wcs的运行环境和其他javascript代码是隔离的,体现在如下两方面:

1.wxs不能调用js中定义的函数  
2.wxs不能调用小程序提供的api

> 性能好

*   在ios设备上,小程序内的wxs会比javascript代码快2~20倍
*   在android设备上,二者的运行效率无差异