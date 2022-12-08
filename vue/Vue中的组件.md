## 定义vue组件

什么是组件:  
组件的出现,就是为了拆分vue实例的代码的,能够让我们以不同的组件,来划分不同的功能模块,将来我们需要什么样的功能,调用对应的组件即可  
组件化和模块化的不同:  
模块化是从代码逻辑的角度进行划分的:方便代码分层开发,保证每一个功能模块的职能单一  
组件化是从ui界面的角度进行划分的:前段的组件化,方便ui组件的重用  

---

### 全局组件定义的三种方式:

1.使用`Vue.extend`配合`Vue.component`方法:

```javascript
var login = Vue.extend({
    template: '<h1>登录</h1>'
});
Vue.component('login', login);
```

2.直接使用`Vue.component`方法

```javascript
Vue.component('register', {
    template: '<h1>注册</h1>'
});
```

3.将模板字符串,定义到script标签中:

```html

<script id="tmpl" type="x-template">
    <div><a href="#">登录</a> | <a href="#">注册</a></div>
</script>
```

同时需要使用`Vue.component`来定义组件

```javascript
Vue.component('account', {
    template: '#tmpl'
});
```

---

> 注意:组件中的DOM结构,有且只能有唯一的根元素(rootElement)来进行包裹

### 组件中展示数据和响应事件

1.在组件中,`data`需要被定义为一个方法,例如:


























