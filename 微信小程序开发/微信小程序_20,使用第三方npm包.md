---
title: 微信小程序_20,使用第三方npm包

author: icestone
tags:
- 微信小程序
- 微信小程序
- npm
- 前端

categories:  
  - Vant Weapp是有赞前端团队开源的一套小程序UI组件库,助理开发者快速搭建小程序应用,他所使用的是MIT开源协议,对商业使用比较友好。在有package.json的目录中安装,如果没有package.json,那么初始化一下(为元素定义css变量时,需要为元素的根节点定义,而page就是小程序的根节点。总结:虽然npm上的包千千万,但是能供小程序使用的包却’为数不多’1.不支持依赖于node.js内置库的包。把小程序配置中的style给去除。各个元素的变量官方提供的有变量名。  

created: Fri Sep 09 2022 00:00:00 GMT+0800 (中国标准时间)
---
> 小程序对npm的支持和限制:

目前下程序中已经支持使用npm安装第三方包,从而提高小程序的开发效率,但是,小程序中使用npm包有如下三个限制:

1.不支持依赖于node.js内置库的包  
2.不支持依赖于浏览器内置对象的包  
3.不支持依赖于c++插件的包

总结:虽然npm上的包千千万,但是能供小程序使用的包却’为数不多’

> 什么是Vant Weapp

Vant Weapp是有赞前端团队开源的一套小程序UI组件库,助理开发者快速搭建小程序应用,他所使用的是MIT开源协议,对商业使用比较友好

> 安装Vant组件库:

在小程序项目中,安装Vant组件库主要分为如下3步:  
1.通过npm安装(建议制定版本@1.3.3)  
2.构建npm包  
3.修改app.json

在有package.json的目录中安装,如果没有package.json,那么初始化一下(`npm init -y`)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/b01a4bb017fa4d728a339b78b204e788.png)

    npm i @vant/weapp@1.3.3 -S --production
    

![在这里插入图片描述](https://img-blog.csdnimg.cn/3c34e3bb39ae4130ba61148bd7c6e995.png)

2.构建npm:

在微信开发者工具->工具->构建npm

![在这里插入图片描述](https://img-blog.csdnimg.cn/7ab9841ca8b3404c93edf2c3159e3e9b.png)

3.关闭小程序默认样式:

把小程序配置中的style给去除

![在这里插入图片描述](https://img-blog.csdnimg.cn/60fc23012fb44522ade74253116a4d22.png)

> 使用Vant组件库:

安装完Vant之后,可以在app.json的usingComponents节点引入需要的组件,即可在wxml中直接使用组件,示例代码如下:  
app.json中引入组件:

      "usingComponents": {
        "vantButton":"@vant/weapp/button/index"
      }
    

页面中使用:

    <!--页面的.wxml结构-->
    <vantButton type="primary">这是一个按钮</vantButton>
    

![在这里插入图片描述](https://img-blog.csdnimg.cn/f5d4874b393a46478d0ec58d37fb436d.png)

> 定制全局主题样式:

Vant Weapp使用css变量来实现定制主题,关于css变量的基本使用,请参考MDN文档:  
如下面两个按钮,第二个太红了,想要修改它的颜色:

    <vantButton round  type="primary">这是一个按钮</vantButton>
    <vantButton round  type="danger">这是一个按钮</vantButton>
    

![在这里插入图片描述](https://img-blog.csdnimg.cn/5570539844c04a238dcea95ca538f9be.png)  
那么就需要修改样式:

在app.wxss中,写入css变量,即可对全局生效,需要写在wxss中的page节点下:

    page {
      /* 定制警告按钮的背景颜色和边框颜色 */
      --button-danger-background-color: rgb(240, 128, 128);
      --button-danger-border-color: rgb(0, 0, 0);
    }
    

![在这里插入图片描述](https://img-blog.csdnimg.cn/654ac17091864c22bda3ff379879eb27.png)  
**为什么要使用page节点:**  
为元素定义css变量时,需要为元素的根节点定义,而page就是小程序的根节点

**为什么定义的变量名是这个:**  
各个元素的变量官方提供的有变量名