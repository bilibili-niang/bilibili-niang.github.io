---
title: 微信小程序_4,WXSS模板样式

author: icestone
tags:
- 前端
- 微信小程序
- 微信小程序
- css
- 前端

categories:  
  - WXSS(WeiXin Style Sheets)是一套样式语言,用于美化WXML的组件样式,类似于网页开发中的cssWXSS具有CSS大部分特性,同时WXSS还对CSS进行了扩充以及修改,以适应微信小程序的开发,与CSS相比,WXSS扩展的特性有:rpx的实现原理非常简单,鉴于不同设备屏幕的大小不同,为了实现屏幕的自动适配,rpx把所有的设备的屏幕,在宽度上等分为750份(即:当前屏幕的总宽度为750rpx)小程序在不同蛇摆上运行的时候,会自动把rpx的样式单位换算成对应的像素单位来渲染,从而实现屏幕适配  

created: Sun Jun 19 2022 00:00:00 GMT+0800 (中国标准时间)
---
> 1.什么是WXSS:

WXSS(WeiXin Style Sheets)是一套样式语言,用于美化WXML的组件样式,类似于网页开发中的css

> 2.WXSS和CSS的关系:

WXSS具有CSS大部分特性,同时WXSS还对CSS进行了扩充以及修改,以适应微信小程序的开发,与CSS相比,WXSS扩展的特性有:

*   rpx尺寸单位
*   @import样式导入  
    ![在这里插入图片描述](https://img-blog.csdnimg.cn/c93b8ce0ec5d4f4bac3ebe405922cce6.png)

> rpx的实现原理:

rpx的实现原理非常简单,鉴于不同设备屏幕的大小不同,为了实现屏幕的自动适配,rpx把所有的设备的屏幕,在宽度上等分为750份(即:当前屏幕的总宽度为750rpx)

*   在较小的设备上,1rpx所代表的宽度较小
*   在较大的设备上,1rpx所代表的宽度较大

小程序在不同蛇摆上运行的时候,会自动把rpx的样式单位换算成对应的像素单位来渲染,从而实现屏幕适配

＞rpx和px之间的单位换算:

在iphone6上,屏幕的宽度为375px,共有750个物理像素,等分为750px,则:  
750rpx=375px=750物理像素

1rpx=0.5px=1物理像素

设备

rpx换算px(屏幕宽度750)

px换算rpx(750/屏幕宽度)

iphone5

1rpx=0.42px

1px=2rpx

iphone6

1rpx=0.5px

1px=2rpx

iphone6Plus

1rpx=0.552px

1px=1.81rpx

官方建议开发微信小程序时,设计师可以用iphone6作为视觉稿的标准

> @import的语法格式:

@import后面跟需要导入的外联样式表的相对路径,用;表示语句结束,示例如下:

test.wxss:

    text{
      color: rebeccapurple;
    }
    

导入:

    /* pages/usekey/usekey.wxss */
    @import './text.wxss';
    

运行:  
![在这里插入图片描述](https://img-blog.csdnimg.cn/6df261e87c934e5ab7275ce91e75b4e0.png)  
确实变色了

> 全局样式:

定义在app.wxss中的样式为全局样式,作用于每一个页面:  
在app.wxss中添加:

    text{
      font-family: serif;
      font-weight: bolder;
    }
    

运行:  
![在这里插入图片描述](https://img-blog.csdnimg.cn/9229fcea4bc1432e81528db69f5dc301.png)

> 局部样式:

在页面的.wxss文件中定义的样式为局部样式,只作用于当前页面

注意:

*   当局部样式和全局样式冲突时,根据就近原则,局部样式会覆盖全局样式
*   当局部样式的权重大于或等于全局样式的权重时,才会覆盖全局的样式