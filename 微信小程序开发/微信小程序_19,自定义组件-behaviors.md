---
title: 微信小程序_19,自定义组件-behaviors

author: icestone
tags:
- 前端
- 微信小程序
- 微信小程序
- 小程序
- javascript

categories:  
  - 比如在组件的data节点定义一个username为ls,在behavior的data中也定义一个username为ls,那么此时它会优先使用组件中的data。每个behaviors可以包含一组属性,数据,生命周期函数和方法,组件引用它时,它的属性,数据和方法会被合并到组件中。behaviors是小程序中,用于实现组件间代码共享的特性,类似于vue的mixins。每个组件可以引用多个behavior,behavior也可以引用其他的behavior。behaviors挂载时,传入的是数组。...  

created: Wed Jul 20 2022 00:00:00 GMT+0800 (中国标准时间)
---
> 什么是behaviors:

behaviors是小程序中,用于实现组件间代码共享的特性,类似于vue的mixins

![在这里插入图片描述](https://img-blog.csdnimg.cn/35bdecb9cf6a4b20a7c27d1056474dcc.png)

> behaviors的工作方式

每个behaviors可以包含一组属性,数据,生命周期函数和方法,组件引用它时,它的属性,数据和方法会被合并到组件中

每个组件可以引用多个behavior,behavior也可以引用其他的behavior

> 创建behavior:

调用behavior(Object object)方法即可一个共享的behavior实例对象,供所有的组件使用:  
在下面创建对应文件夹和js文件:  
![在这里插入图片描述](https://img-blog.csdnimg.cn/735e87e67b734b128589822034867395.png)

    module.exports = Behavior({
      // 私有数据节点
      data: {},
      // 属性节点
      properties: {},
      // 事件处理函数和自定义方法节点
      methods: {}
    })
    

> 导入并使用behaviors:

在组件中,使用require()方法导入需要的behavior,挂载后即可访问behavior中的数据或方法,示例代码如下:

    // components/myTest1/myTest1.js
    const myBehavior = require('../../behaviors/myBehavior1')
    
    Component({
      behaviors: [myBehavior],
    })
    

behaviors挂载时,传入的是数组

> 使用：

例如这里在behavior中定义了一个data:

    module.exports = Behavior({
      // 私有数据节点
      data: {
        username: 'zs'
      },
      // 属性节点
      properties: {},
      // 事件处理函数和自定义方法节点
      methods: {}
    })
    

在引用了该behavior的组件的wxml中可以直接使用:

    <text>
      behaviors共享数据:{{username}}
    </text>
    

> behavior中所有可用节点:

可用的节点

类型

是否必填

描述

properties

Object Map

否

通组件的属性

data

Object

否

同组件的数据

methods

Object

否

同自定义组件的方法

behaviors

String Array

否

引入其它的behavior

created

Function

否

生命周期函数

attached

Function

否

生命周期函数

ready

Function

否

生命周期函数

moved

Function

否

生命周期函数

detached

Function

否

生命周期函数

其中最常用的有:`properties`,`data`,`methods`,`behaviors`

> behaviors中同名字段的覆盖和组合规则:

组件和它引用的behavior中可以包含同名的字段,此时可以参考如下3种同名时的处理规则:

1.同名的数据字段(data)  
2.同名的属性(properties)或方法(methods)  
3.同名的生命周期函数

关于详细的覆盖和组合规则,查看微信官方文档

比如在组件的data节点定义一个username为ls,在behavior的data中也定义一个username为ls,那么此时它会优先使用组件中的data