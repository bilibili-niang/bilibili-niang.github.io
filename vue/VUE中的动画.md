#### Vue中的动画

为什么要有动画:动画能够提高用户体验,帮助用户更好的理解页面中的功能

#### 使用过渡类名

- 1.HTML结构:

```html
<div id="app">
    <input type="button" value="动起来" @click="myAnimation">
    <!--使用translation 将需要过渡的动画元素包裹起来-->
    <transition name="fade">
        <div v-show="isshow">动画哦</div>
    </transition>
</div>
```  

* 2.VM实例:

```javascript
//创建Vue实例,得到ViewModel
var vm = new Vue({
    el: '#app',
    data: {
        isshow: false
    },
    methods: {
        myAnimation() {
            this.show = !this.show();
        }
    }
});
```


























