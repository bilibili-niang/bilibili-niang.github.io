> vue中的组件开发

vue是一个支持组件化开发的前端框架  
vue中规定:组件的后缀是`.vue`,之前接触到的App.vue文件本质上是一个vue的组件

> vue组件的三个组成部分
* template -> 组件的模板结构
* script -> 组件的javascript行为
* style -> 组件的样式

> 关于vue组件中的data:

* 注意:.vue组件中的data不能像之前一样,不能指向对象
* 注意:组件中的data必须是一个函数
* 这个return出去的`{}`可以定义数据

```html
<script>
//默认导出
export default {
  name: "test",
  //data数据源
  data: function () {
    return {
      username:'admin',
    }
  }
}
</script>
```

> 使用组件的三个步骤:

* 1.使用import语法导入组件  

在index.js中:  
```js
import Left from '../components/Left'
```

* 2.使用components节点注册组件
```js
export default{
    components:{
        Left
    }
}
```

* 3.以标签形式使用刚才注册的组件

```html
<div class="box">
    <Left></Left>
</div>
```

如:
```html
<template>
  <div id="app">
    <h1>
      vueApp---{{ username }}
    </h1>
    <input type="text" value="" v-model="username">
    <button @click="changeName">
      修改用户名
    </button>
    <a href="/test">test</a>
    <hr>
    <Left></Left>
    <Right></Right>
  </div>
</template>

<script>
import Left from './components/Left'
import Right from './components/Right'
export default {
  name: 'App',
  data: function () {
    //这个return出去的{}可以定义数据
    return {
      username: 'admin',
    }
  },
  methods: {
    changeName() {
      this.username = 'wahaha';
    }
  },
  watch: {},
  computed: {},
  filters: {},
  components:{
    Left,
    Right
  }
}
</script>
```

> 通过components注册的是私有子组件

例如:  
在组件A的components节点下,注册了组件F,则组件F只能在组件A中,不能被用在组件C中

> 注册全局组件:

在vue项目的main.js入口文件中,通过`Vue.component()`方法,可以注册全局组件,如:

```js
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Count from './components/Count'
Vue.config.productionTip = false
/* eslint-disable no-new */
//创建vue的实例对象:
new Vue({
el: '#app',
router,
components: {App},
template: '<App/>'
})
Vue.component('MyCount',Count);
```

这里,导入:
```js
import Count from './components/Count'
```
注册:  
第一个参数是字符串格式,表示组件的"注册名称"在后面使用的时候,就使用第一个参数作为标签,如:`<MyCount></MyCount`  
第二个参数是需要被全局注册的那个组件
```js
Vue.component('MyCount',Count);
```





