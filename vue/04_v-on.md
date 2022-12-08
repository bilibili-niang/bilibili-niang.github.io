> 事件绑定指令:

vue提供了`v-on`事件绑定指令,用来辅助程序员为DOM元素绑定事件监听,语法格式如下:
```html
<div id="app">
    <p>count的值:{{count}}</p>
    <button v-on:click="countAdd">点击,count+1</button>
    <hr>
    <label>
        <input type="text" placeholder="请输入test文字" v-on:focus="focusFun" v-on:blur="blurFun">
        {{msg}}
    </label>
</div>
<script src="lib/vue.js"></script>
<script>
    const vm = new Vue({
        el: '#app',
        data: {
            count: 0,
            msg: '此时没有信息'
        },
        methods: {
            countAdd() {
                this.count++;
            },
            focusFun() {
                this.msg = 'focus'
            },
            blurFun() {
                this.msg = '此时没有focus'
            }
        }
    })
</script>
```
* 注意这里的`v-on`可以简写为:`@`
