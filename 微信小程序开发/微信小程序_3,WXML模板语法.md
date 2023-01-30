---
title: 微信小程序_3,WXML模板语法

author: icestone
tags:
- 微信小程序
- 前端
- 微信小程序
- 小程序

categories:  
  - 事件是渲染层到逻辑层的通讯方式,通过事件可以将用户在渲染层产生的行为,反馈到逻辑层进行业务的处理当事件出回调触发的时候,会受到一个事件对象event,它的详细属性如下表所示:在开发中,用的比较多的是:,target是触发该事件的源头组件,而currentTarget则是当前事件所绑定的组件,举例如下:点击内部的按钮,点击事件以冒泡的方式向外扩散,也会触发外层view的tap事件处理函数在小程序中,不存在HTML中的onclick鼠标点击事件,而是通过tap事件来响应用户的触摸行为1.通过bindtap  

created: Thu Jun 16 2022 00:00:00 GMT+0800 (中国标准时间)
---
> 事件绑定:

事件是渲染层到逻辑层的通讯方式,通过事件可以将用户在渲染层产生的行为,反馈到逻辑层进行业务的处理

![在这里插入图片描述](https://img-blog.csdnimg.cn/eb2dcc8c586c48cc9e6fa6d6c4562a99.png)

> 小程序中常用的事件:

类型

绑定方式

事件描述

tap

bindtap或bind:tap

手指触摸后马上离开,类似于HTML中的click事件

input

bindinput或bind:input

文本框的输入事件

change

bindchange或bind:change

状态改变时触发

> 事件对象的属性列表:

当事件出回调触发的时候,会受到一个事件对象event,它的详细属性如下表所示:

属性

类型

说明

type

String

事件类型

timeStamp

Integer

页面打开到触发事件所经过的毫秒数

currentTarget

Object

当前组件的一些属性值集合

detail

Object

额外的信息

touches

Array

触摸事件,当前停留在屏幕中的触摸点信息的数组

changedTouches

Array

触摸事件,当前变化的触摸点信息的数组

在开发中,用的比较多的是:`target`,`detail`

> target和currentTarget的区别:

target是触发该事件的源头组件,而currentTarget则是当前事件所绑定的组件,举例如下:  
![在这里插入图片描述](https://img-blog.csdnimg.cn/872dda2b1e84430f915d2efdcd7266ef.png)  
点击内部的按钮,点击事件以冒泡的方式向外扩散,也会触发外层view的tap事件处理函数

*   e.target指向的是触发事件的源头组件,因此,e.target是内部的组件按钮
*   ecurrentTarget指向的是当前正在触发事件的那个组件,因此,e.currentTarget是当前的view组件

> bindtap语法格式:

在小程序中,不存在HTML中的onclick鼠标点击事件,而是通过tap事件来响应用户的触摸行为  
1.通过bindtap,可以为组件绑定tap触摸事件,语法如下:  
WXML:

    <view>
      <button type="primary" bindtap="btnTapHandler">
        按钮
      </button>
    </view>
    

.js:

    Page({
      btnTapHandler(e) {
        console.log(e);
      },
      })
    

> 在事件处理函数中为data中的数据赋值:

通过调用`this.setData(dataObject)`方法,可以给页面data中的数据重新赋值,实例如下:

WXML:

      <button type="primary" bindtap="changeCount">count+1</button>
    

.js:

      changeCount() {
        this.setData({
          count: this.data.count + 1
        })
      },
    

> 事件传参:

小程序中的事件传参比较特殊,不能在绑定事件的同时为事件处理函数传递参数,例如,下面的代码将不能正常工作:  
WXML:

    <view>
      下面的代码不能正常工作:
      <button type="primary" bindtap="btnHandler(123)">
        事件传参
      </button>
    </view>
    

.js:

      btnHandler(str) {
        console.log('btn click' + str);
      },
    

运行并点击,调试器这里会报错:  
![在这里插入图片描述](https://img-blog.csdnimg.cn/4c8059318c4740088128ee612b5226e9.png)  
因为小程序会把bindtap的属性值,统一当做事件名称来处理,相当于要调用一个名称为`btnHandler(123)`的事件处理函数

可以为组件提供`data-*`自定义属性传参,其中`*`代表的是参数的名称,实例代码如下:  
WXML:

    <button type="primary" bindtap="btnHandler" data-info="{{2}}">
        事件传参
      </button>
    

.js:

      btnHandler(str) {
        console.log(str);
      },
    

运行并点击:  
![在这里插入图片描述](https://img-blog.csdnimg.cn/5711c2f926c5462fa9b117213cd57f11.png)  
最终:

*   info会被解析为参数的名字
*   数值2会被解析为参数的值

> bindinput语法格式:

在小程序里面,通过input事件来响应文本框的输入内容,语法格式如下:

1.通过bindinput,可以为文本框绑定输入事件:  
WXML:

      <text>
        获取文本框数据:
      </text>
      <input bindinput="inputHandler"></input>
    

.js:

      inputHandler(e) {
        console.log(e.detail.value);
      },
    

运行:  
![在这里插入图片描述](https://img-blog.csdnimg.cn/897f0df02c7d4f768b2cd976a63a74de.png)

> 实现文本框和data之间的数据同步:

实现步骤:  
1.定义数据  
2.渲染结构  
3.美化样式  
4.绑定input事件处理函数

WXML:

      {{msg}}
      <text>
        文本框输入并复制给data
      </text>
      <input value="{{msg}}" bindinput="iptHandler"></input>
    

.js:

      iptHandler(e) {
        this.setData({
          msg: e.detail.value
        })
      },
      data: {
        msg: "test msg"
      },
    

#### 条件渲染:

> wx:if

在小程序中,使用`wx:if="{{condition}}"`来判断是否需要渲染该代码块:

    <text wx:if="{{flag}}">测试flag为true,显示该区域</text>
    

也可以使用`wx:elif`和`wx:else`来添加else判断:  
WXML:

    <view>
      <text wx:for="{{array}}">
        索引是:{{index}},当前项是:{{item}}
      </text>
    </view>
    

.js:

      data: {
        array:['asdasd','as2s','asdasdsa3','4sdfsdfad','5asdsad',6,7]
      },
    

运行:  
![在这里插入图片描述](https://img-blog.csdnimg.cn/f55e33af8a004e8aa24b25ca2ee409f3.png)

默认情况下,当前循环项的索引用index表示,当前循环项用item表示

> 手动指定索引和当前项的变量名:

*   使用wx:for-index可以指定当前项的索引的变量名
*   使用wx:for-item可以指定当前项的变量名  
    示例代码如下:  
    WXML:

      <text>
        指定索引和当前项的变量名:
        <text wx:for="{{array}}" wx:for-index="inde" wx:for-item="it">
          当前的索引是:{{inde}},
          当前的项是:{{it}}
        </text>
      </text>
    

.js:

      data: {
        array:['asdasd','as2s','asdasdsa3','4sdfsdfad','5asdsad',6,7]
      },
    

运行:

![在这里插入图片描述](https://img-blog.csdnimg.cn/1c656288204e4950b3a823836f8b7ed5.png)

> wx:key的使用:

类似于Vue列表渲染中的key,小程序在实现列表渲染时,也建议为渲染出来的列表项指定唯一key值,从而提高渲染的效率,示例代码如下:  
WXML:

    <text wx:for="{{list}}" wx:key="id">
        <text user-select="text">
          当前的index是:{{index}},
          filename:{{item.filename}},
          email:{{item.userEmail}},
          email:{{item.description}},
          key:{{item.id}}
        </text>
      </text>
    

.js:

     data: {
        list: [
          {
              "id": 1,
              "userEmail": "2714351312@qq.com",
              "filename": "测试文章名称",
              "fileData": "这里是测试文章数据",
              "states": null,
              "postTime": null,
              "description": "des",
              "praise": null,
              "view": null,
              "tag1": null,
              "tag2": null,
              "tag3": null,
              "createdAt": "2022-06-12T03:10:33.000Z",
              "updatedAt": "2022-06-12T03:10:33.000Z"
          },
          {
              "id": 2,
              "userEmail": "2714351312@qq.com",
              "filename": "测试文章名称",
              "fileData": "这里是测试文章数据",
              "states": null,
              "postTime": null,
              "description": "测试文章des",
              "praise": null,
              "view": null,
              "tag1": null,
              "tag2": null,
              "tag3": null,
              "createdAt": "2022-06-12T03:10:34.000Z",
              "updatedAt": "2022-06-12T03:10:34.000Z"
          },
          {
              "id": 3,
              "userEmail": "2714351312@qq.com",
              "filename": "测试文章名称",
              "fileData": "这里是测试文章数据",
              "states": null,
              "postTime": null,
              "description": null,
              "praise": null,
              "view": null,
              "tag1": null,
              "tag2": null,
              "tag3": null,
              "createdAt": "2022-06-12T03:10:34.000Z",
              "updatedAt": "2022-06-12T03:10:34.000Z"
          },
          {
              "id": 4,
              "userEmail": "2714351312@qq.com",
              "filename": "测试文章名称",
              "fileData": "这里是测试文章数据",
              "states": null,
              "postTime": null,
              "description": null,
              "praise": null,
              "view": null,
              "tag1": null,
              "tag2": null,
              "tag3": null,
              "createdAt": "2022-06-12T03:10:35.000Z",
              "updatedAt": "2022-06-12T03:10:35.000Z"
          },
          {
              "id": 5,
              "userEmail": "2714351312@qq.com",
              "filename": "测试文章名称",
              "fileData": "这里是测试文章数据",
              "states": null,
              "postTime": null,
              "description": null,
              "praise": null,
              "view": null,
              "tag1": null,
              "tag2": null,
              "tag3": null,
              "createdAt": "2022-06-12T03:10:35.000Z",
              "updatedAt": "2022-06-12T03:10:35.000Z"
          },
          {
              "id": 6,
              "userEmail": "2714351312@qq.com",
              "filename": "测试文章名称",
              "fileData": "这里是测试文章数据",
              "states": null,
              "postTime": null,
              "description": null,
              "praise": null,
              "view": null,
              "tag1": null,
              "tag2": null,
              "tag3": null,
              "createdAt": "2022-06-12T03:10:36.000Z",
              "updatedAt": "2022-06-12T03:10:36.000Z"
          },
          {
              "id": 7,
              "userEmail": "2714351312@qq.com",
              "filename": "测试文章名称",
              "fileData": "这里是测试文章数据",
              "states": null,
              "postTime": null,
              "description": null,
              "praise": null,
              "view": null,
              "tag1": null,
              "tag2": null,
              "tag3": null,
              "createdAt": "2022-06-12T03:10:36.000Z",
              "updatedAt": "2022-06-12T03:10:36.000Z"
          },
          {
              "id": 8,
              "userEmail": "2714351312@qq.com",
              "filename": "测试文章名称",
              "fileData": "这里是测试文章数据",
              "states": null,
              "postTime": null,
              "description": " ",
              "praise": null,
              "view": null,
              "tag1": " ",
              "tag2": " ",
              "tag3": " ",
              "createdAt": "2022-06-12T07:29:31.000Z",
              "updatedAt": "2022-06-12T07:29:31.000Z"
          }
      ]
      },
    

这里的data是从数据库随便整的,无所谓

运行:  
![在这里插入图片描述](https://img-blog.csdnimg.cn/cde27f3ed55b45c1b93a4ada4d916305.png)  
注意这里如果不给一个key值,它会在控制台提示:

![在这里插入图片描述](https://img-blog.csdnimg.cn/ef6c10b1c2e94db397c56a72852ac52a.png)