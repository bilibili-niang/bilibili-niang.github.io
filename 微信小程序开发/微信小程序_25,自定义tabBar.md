---
title: 微信小程序_25,自定义tabBar

author: icestone
tags:
- 微信小程序
- 微信小程序
- 小程序

categories:  
  - 添加徽标之后,徽标其实是溢出tabBar的,所以此时需要修改icon和底部文字的距离,而这里是需要修改margin-bottom。对于有的item需要渲染info,有的则不需要,可以在data节点中定义info,并在渲染时使用三元表达式来判断。要注意的是,给的模板代码中,可能有一些初始化数据,或是绑定的方法,这些东西也是要cv过来的。是当前tab的index,通过点击不同的tab,传入不同的index,再通过。而此时,先要完成切换,监听它的点击方法即可,点击事件中,执行。  

created: Wed Sep 21 2022 00:00:00 GMT+0800 (中国标准时间)
---
案例效果;  
![在这里插入图片描述](https://img-blog.csdnimg.cn/fcda11780abd4adc96d86ec2a5535223.png)

> 在此案例中,用到的主要知识点如下:

*   自定义组件
*   Vant组件库
*   Mobx数据共享
*   组件样式隔离
*   组件数据监听器
*   组件的behaviors
*   Vant样式覆盖

> 实现步骤

自定义tabBar分为3打步骤,分别是:

1.配置信息  
2.添加tabBar代码文件  
3.编写tabBar代码

更详细的,请查看[开发者文档](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html)

> 自定义tabBar配置信息:

1.在 app.json 中的 tabBar 项指定 custom 字段，同时其余 tabBar 相关配置也补充完整。  
app.json文件中配置`"custom":"true"`

      "tabBar": {
        "custom": true,
    }
    

所有 tab 页的 json 里需声明 usingComponents 项，也可以在 app.json 全局开启。

    "tabBar": {
        "custom": true,
        "color": "#000000",
        "selectedColor": "#000000",
        "backgroundColor": "#000000",
        "usingComponents": {},
        
        "list": [{
          "pagePath": "pages/index/index",
          "text": "index",
          "iconPath": "/images/index.png",
          "selectedIconPath": "/images/indexSelected.png"
        }]
      },
    

此时自定义数组中的list数据不能删

然后在项目的根目录下创建`custom-tab-bar`文件夹:  
![在这里插入图片描述](https://img-blog.csdnimg.cn/08def617f2e14b14b95153b7473c0cf0.png)  
然后在该文件夹右键,新建组件,输入index即可创建组件:  
![在这里插入图片描述](https://img-blog.csdnimg.cn/2ab0464effbe4ba0a05804c0ab3aeb20.png)  
然后就可以看到tabbar区域的内容就是这里刚自定义的组件:  
![在这里插入图片描述](https://img-blog.csdnimg.cn/9467fd5932d241dbb9b9c03dea427785.png)

这里tabbar建议使用vant组件,[vant官网](https://vant-contrib.gitee.io/vant/#/zh-CN/tabbar)

使用vant第一步,注册组件,我这里使用的是1.3版本的vant,  
在app.json中注册(后面两行是新添加的):

      "usingComponents": {
        "vantButton": "@vant/weapp/button/index",
        "my-numbers": "/components/numbers/numbers",
        "van-tabbar": "@vant/weapp/tabbar/index",
        "van-tabbar-item": "@vant/weapp/tabbar-item/index"
      },
    

然后按照文档cv对应的tabbar代码即可

要注意的是,给的模板代码中,可能有一些初始化数据,或是绑定的方法,这些东西也是要cv过来的

例如我cv的wxml代码:

    <view>
      <van-tabbar active="{{ active }}" bind:change="onChange">
        <van-tabbar-item icon="home-o">标签</van-tabbar-item>
        <van-tabbar-item icon="search">标签</van-tabbar-item>
        <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
        <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
      </van-tabbar>
    </view>
    

下面的active,onChange就是cv过来的

    // custom-tab-bar/index.js
    Component({
      /**
       * 组件的属性列表
       */
      properties: {
      },
      /**
       * 组件的初始数据
       */
      data: {
        active:0
      },
      /**
       * 组件的方法列表
       */
      methods: {
        onChange(event) {
          // event.detail 的值为当前选中项的索引
          this.setData({ active: event.detail });
        },
      }
    })
    

> 根据自己的需求(上面领导的需求)写出想要的效果:

样式:

![在这里插入图片描述](https://img-blog.csdnimg.cn/de78b0c62c9045f79e7f001d9011134e.png)  
例如想要在未选中时,显示自定义图标,选中时,显示自定义的图标

那么此时还是看官方文档,

文档曰:  
**自定义图标  
可以通过 slot 自定义图标，其中 icon slot 代表未选中状态下的图标，icon-active slot 代表选中状态下的图标(下面代码是文档示例代码)**

    <van-tabbar active="{{ active }}" bind:change="onChange">
      <van-tabbar-item info="3">
        <image
          slot="icon"
          src="{{ icon.normal }}"
          mode="aspectFit"
          style="width: 30px; height: 18px;"
        />
        <image
          slot="icon-active"
          src="{{ icon.active }}"
          mode="aspectFit"
          style="width: 30px; height: 18px;"
        />
        自定义
      </van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
    

所以,这里如果要自定义的话,可以:

    <view>
      <van-tabbar active="{{ active }}" bind:change="onChange">
      <van-tabbar-item info="3">
        <image slot="icon" src="/images/index.png" mode="aspectFit" style="width: 30px; height: 18px;" />
        <image slot="icon-active" src="/images/indexSelected.png" mode="aspectFit" style="width: 30px; height: 18px;" />
        首页
      </van-tabbar-item>
    
        <van-tabbar-item icon="home-o">标签</van-tabbar-item>
        <van-tabbar-item icon="search">标签</van-tabbar-item>
        <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
        <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
      </van-tabbar>
    </view>
    

![在这里插入图片描述](https://img-blog.csdnimg.cn/03286b04e5744cc9a40615e886a94384.png)  
tabbar区域第一个就是刚刚添加的自定义样式  
那么此时就可以将tabBar中的list添加到data中,然后在页面上使用遍历来渲染出对应的tabBar:

js:

    // custom-tab-bar/index.js
    Component({
      /**
       * 组件的属性列表
       */
      properties: {
    
      },
    
      /**
       * 组件的初始数据
       */
      data: {
        active:0,
        "list": [
          {
          "pagePath": "pages/index/index",
          "text": "index",
          "iconPath": "/images/index.png",
          "selectedIconPath": "/images/indexSelected.png"
        }, {
          "pagePath": "pages/person/person",
          "text": "person",
          "iconPath": "/images/person.png",
          "selectedIconPath": "/images/personSelected.png"
        }, {
          "pagePath": "pages/mynumber/mynumber",
          "text": "numberDemo",
          "iconPath": "/images/number.png",
          "selectedIconPath": "/images/numberSelected.png"
        }]
      },
    
      /**
       * 组件的方法列表
       */
      methods: {
        onChange(event) {
          // event.detail 的值为当前选中项的索引
          this.setData({ active: event.detail });
        },
      }
    })
    

wxml:

    <view>
      <van-tabbar active="{{ active }}" bind:change="onChange">
    
      <van-tabbar-item wx:for="{{list}}" wx:key="index">
        <image slot="icon" src="{{item.iconPath}}" mode="aspectFit" style="width: 30px; height: 18px;" />
        <image slot="icon-active" src="{{item.selectedIconPath}}" mode="aspectFit" style="width: 30px; height: 18px;" />
        {{item.text}}
      </van-tabbar-item>
      </van-tabbar>
    </view>
    

效果:  
![在这里插入图片描述](https://img-blog.csdnimg.cn/a17d93a7f44e42e3948db373ece6fa02.png)  
这里在wxml中可以直接修改icon尺寸的

> 如何渲染徽标以及美化徽标的样式:

在 `<van-tabbar-item wx:for="{{list}}" wx:key="index" >`标签内添加`info="2"`即可:  
![在这里插入图片描述](https://img-blog.csdnimg.cn/9f696618a8b04af99b187515b396c0cc.png)  
美化:

添加徽标之后,徽标其实是溢出tabBar的,所以此时需要修改icon和底部文字的距离,而这里是需要修改margin-bottom

这里需要使用样式覆盖,将需要的样式类名写在css文件中,在js中开启vant的样式覆盖,否则自定义样式不会生效:

      options:{
        "styleIsolation": "shared"
      },
    

![在这里插入图片描述](https://img-blog.csdnimg.cn/3b8c4d87b83f40958b57ca8d09fc1e27.png)  
这里我修改的样式:

    .van-tabbar-item__icon{
      --tabbar-item-margin-bottom:0;
    }
    

> 按需为tabBar的item项设置徽标数值

对于有的item需要渲染info,有的则不需要,可以在data节点中定义info,并在渲染时使用三元表达式来判断`{{item.info? item.info : ''}}`:  
wxml:

    <view>
      <van-tabbar active="{{ active }}" bind:change="onChange">
      <van-tabbar-item wx:for="{{list}}" wx:key="index" info="{{item.info? item.info : ''}}">
        <image slot="icon" src="{{item.iconPath}}" mode="aspectFit" style="width: 40px; height: 20px;" />
        <image slot="icon-active" src="{{item.selectedIconPath}}" mode="aspectFit" style="width: 40px; height: 20px;" />
        {{item.text}}
      </van-tabbar-item>
      </van-tabbar>
    </view>
    

js:

    // custom-tab-bar/index.js
    Component({
      /**
       * 组件的初始数据
       */
      data: {
        active:0,
        "list": [
          {
          "pagePath": "pages/index/index",
          "text": "首页",
          "iconPath": "/images/index.png",
          "selectedIconPath": "/images/indexSelected.png",
          "info":2
        }, {
          "pagePath": "pages/person/person",
          "text": "个人",
          "iconPath": "/images/person.png",
          "selectedIconPath": "/images/personSelected.png"
        }, {
          "pagePath": "pages/mynumber/mynumber",
          "text": "nums",
          "iconPath": "/images/number.png",
          "selectedIconPath": "/images/numberSelected.png"
        }]
      }
    })
    

但是将徽标数字写为固定值显然是不合适的,那么此时就可以引用到store中的数据,  
关于tabbar的绑定store数据

> tabBarr绑定stroe.js:

1.导入,在tabBar的js文件中导入:

    import {storeBindingsBehavior} from 'mobx-miniprogram-bindings'
    import {store} from '../store/store'
    

2.tabBar的js文件中添加配置:

    
    Component({
      behaviors:[storeBindingsBehavior],
    })
    

3.定义对象:  
下面的`storeBindings`就是需要配置的对象

    Component({
      behaviors:[storeBindingsBehavior],
      storeBindings:{
        store,
        fields:{
          sum:'sum'
        },
        actions:[
        ]
      },
      options:{
        "styleIsolation": "shared"
      },
      /**
       * 组件的属性列表
       */
      properties: {
    
      },
      /**
       * 组件的初始数据
       */
      data: {
        active:0,
        "list": [
          {
          "pagePath": "pages/index/index",
          "text": "首页",
          "iconPath": "/images/index.png",
          "selectedIconPath": "/images/indexSelected.png",
          "info":2
        }, {
          "pagePath": "pages/person/person",
          "text": "个人",
          "iconPath": "/images/person.png",
          "selectedIconPath": "/images/personSelected.png"
        }, {
          "pagePath": "pages/mynumber/mynumber",
          "text": "nums",
          "iconPath": "/images/number.png",
          "selectedIconPath": "/images/numberSelected.png"
        }]
      },
    
      /**
       * 组件的方法列表
       */
      methods: {
        onChange(event) {
          // event.detail 的值为当前选中项的索引
          this.setData({ active: event.detail });
        },
      }
    })
    

而这里可以使用数据监听器,来监听sum的变化,变化之后立即更改info的值  
与`storeBindings`节点平级添加监听器:

      observers: {
        'sum': function (val) {
          // console.log(val);
          this.setData({
            'list[1].info': val
          })
        }
      },
    

这里`list[1].info`就是对应item的徽标数值  
![在这里插入图片描述](https://img-blog.csdnimg.cn/76fdaff606594ebeaab3d4fb47708d63.png)

> 点击之后切换不同的页面;

根据上面的步骤,点击不同的tab是不会切换的  
而此时,先要完成切换,监听它的点击方法即可,点击事件中,执行`wx.switchTab`,切换到对应的page,例如:

    // custom-tab-bar/index.js
    import {
      storeBindingsBehavior
    } from 'mobx-miniprogram-bindings'
    import {
      store
    } from '../store/store'
    Component({
      behaviors: [storeBindingsBehavior],
      storeBindings: {
        store,
        fields: {
          sum: 'sum'
        },
        actions: []
      },
      observers: {
        'sum': function (val) {
          // console.log(val);
          this.setData({
            'list[1].info': val
          })
        }
      },
      options: {
        "styleIsolation": "shared"
      },
      /**
       * 组件的属性列表
       */
      properties: {
      },
      /**
       * 组件的初始数据
       */
      data: {
        active: 0,
        "list": [{
          "pagePath": "/pages/index/index",
          "text": "首页",
          "iconPath": "/images/index.png",
          "selectedIconPath": "/images/indexSelected.png",
          "info": 2
        }, {
          "pagePath": "/pages/person/person",
          "text": "个人",
          "iconPath": "/images/person.png",
          "selectedIconPath": "/images/personSelected.png"
        }, {
          "pagePath": "/pages/mynumber/mynumber",
          "text": "nums",
          "iconPath": "/images/number.png",
          "selectedIconPath": "/images/numberSelected.png"
        }]
      },
      /**
       * 组件的方法列表
       */
      methods: {
        onChange(event) {
          // event.detail 的值为当前选中项的索引
          this.setData({
            active: event.detail
          });
          wx.switchTab({
            url: this.data.list[event.detail].pagePath,
          });
        },
      }
    })
    

上面的`onChange`就是监听事件,里面的`event.detail`是当前tab的index,通过点击不同的tab,传入不同的index,再通过`wx.switchTab`切换不同的page

**注意:这里的`this.data.list[event.detail].pagePath`改路径必须以`/`开头,具体可以参考`list`中的数组**

> 而此时你点击可能会发现点击时,页面是切换了但是激活的tabBar不对

可以将TabBar的active变量定义在store中:

store.js:

    // 在这个js文件中专门用来创建store实例对象
    import {
      action,
      observable
    } from 'mobx-miniprogram'
    export const store = observable({
      // 数据字段：
      num1: 123,
      num2: 321,
      step: 2,
      sum: 0,
      activeTabBarIndex: 0,
      // 计算属性,必须加标识符:get(表示当前值是只读的,不能获取当前值):
      get sum() {
        return this.num1 + this.num2
      },
      // actions函数,用来修改stroe中的数据
      updateNum1: action(function (step) {
        this.num1 += step
      }),
      updateNum2: action(function (step) {
        this.num2 += step
      }),
      updateActiveTabBarIndex: action(function (index) {
        this.activeTabBarIndex = index
      }),
    })
    

这里定义了`activeTabBarIndex`作为当前激活的index,并有`updateActiveTabBarIndex`为index更新

tabBar的js:

    // custom-tab-bar/index.js
    import {
      storeBindingsBehavior
    } from 'mobx-miniprogram-bindings'
    import {
      store
    } from '../store/store'
    Component({
      behaviors: [storeBindingsBehavior],
      storeBindings: {
        store,
        fields: {
          sum: 'sum',
          active: 'activeTabBarIndex'
        },
        actions: {
          updateActive: 'updateActiveTabBarIndex'
        }
      },
      observers: {
        'sum': function (val) {
          // console.log(val);
          this.setData({
            'list[1].info': val
          })
        }
      },
      options: {
        "styleIsolation": "shared"
      },
      /**
       * 组件的属性列表
       */
      properties: {
      },
      /**
       * 组件的初始数据
       */
      data: {
        "list": [{
          "pagePath": "/pages/index/index",
          "text": "首页",
          "iconPath": "/images/index.png",
          "selectedIconPath": "/images/indexSelected.png",
          "info": 2
        }, {
          "pagePath": "/pages/person/person",
          "text": "个人",
          "iconPath": "/images/person.png",
          "selectedIconPath": "/images/personSelected.png"
        }, {
          "pagePath": "/pages/mynumber/mynumber",
          "text": "nums",
          "iconPath": "/images/number.png",
          "selectedIconPath": "/images/numberSelected.png"
        }]
      },
      /**
       * 组件的方法列表
       */
      methods: {
        onChange(event) {
          // event.detail 的值为当前选中项的索引
          // this.setData({active: event.detail});
          wx.switchTab({
            url: this.data.list[event.detail].pagePath,
          });
          this.updateActive(event.detail)
        },
      }
    })
    

这里引入store中的`activeTabBarIndex`和`updateActiveTabBarIndex`,在监听tabBar中item的点击时,更新index

tabBar的wxml:

    <view>
      <van-tabbar active="{{active}}" bind:change="onChange">
      <van-tabbar-item wx:for="{{list}}" wx:key="index" info="{{item.info? item.info : ''}}">
        <image slot="icon" src="{{item.iconPath}}" mode="aspectFit" style="width: 40px; height: 20px;" />
        <image slot="icon-active" src="{{item.selectedIconPath}}" mode="aspectFit" style="width: 40px; height: 20px;" />
        {{item.text}}
      </van-tabbar-item>
      </van-tabbar>
    </view>
    

> 更改激活样式的文字颜色：

在`van-tabbar`中修改`active-color="#07c160"`:

    <view>
      <van-tabbar active="{{active}}" bind:change="onChange" active-color="#07c160">
        <van-tabbar-item wx:for="{{list}}" wx:key="index" info="{{item.info? item.info : ''}}">
          <image slot="icon" src="{{item.iconPath}}" mode="aspectFit" style="width: 40px; height: 20px;" />
          <image slot="icon-active" src="{{item.selectedIconPath}}" mode="aspectFit" style="width: 40px; height: 20px;" />
          {{item.text}}
        </van-tabbar-item>
      </van-tabbar>
    </view>