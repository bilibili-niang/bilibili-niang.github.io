---
title: 微信小程序_21,使用npm包,api promise化

author: icestone
tags:
- 微信小程序
- 微信小程序
- npm
- 前端

categories:  
  - 在小程序入口文件中(app.js),只需调用一次promisifyAll()方法,即可实现异步api的promise化。注意,小程序是无法直接读取node_modules目录下的包文件的,所以需要构建,构建npm会把引入的包copy到。目录下,在你新引入包2时,最好将原来的。  

created: Sun Sep 11 2022 00:00:00 GMT+0800 (中国标准时间)
---
### 基于回调函数的异步api的缺点:

默认情况下,小程序官方提供的异步api都是基于回调函数实现的,例如,网络请求的API需要按照如下的方式调用:

        wx.request({
          url: 'url',
          data:{},
          success:()=>{},//请求成功的回调
          fail:()=>{},//请求失败的回调函数
          complete:()=>{}//请求完成的回调函数
        })
    

#### 实现api promise化:

在小程序中,实现api promise化主要依赖于miniprograme-api-promise这个第三方包,它的安装和使用步骤如下:

    npm install --save miniprogram-api-promise@1.0.4
    

> 注意,小程序是无法直接读取node\_modules目录下的包文件的,所以需要构建,构建npm会把引入的包copy到`miniprogram_npm`目录下,在你新引入包2时,最好将原来的`miniprogram_npm`给删除:

![在这里插入图片描述](https://img-blog.csdnimg.cn/2355dc3eea7c4772aee2781336d66144.png)  
在小程序入口文件中(app.js),只需调用一次promisifyAll()方法,即可实现异步api的promise化

    import {promisifyAll} from 'miniprogram-api-promise'
    //定义一个空对象
    const wxp=wx.p={}
    // promise all wx's api
    //对象是引用数据类型,所以指向的是同一个对象
    promisifyAll(wx,wxp)
    

##### 调用promise化之后的异步API

      async getinfo () {
        const {
          data: res
        } = await wx.p.request({
          method:'GET',
          url: 'https://www.escook.cn/api/get',
          data: {
            name: 'zs',
            age: 30
          }
        })
        console.log(res);
      },