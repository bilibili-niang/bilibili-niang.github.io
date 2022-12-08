## 父组件向子组件传值:

1.组件实例定义方式:注意,一定要使用`props`属性来定义父组件传递过来的数据

```html

<script>
    var vm = nw
    Vue({
        el: '#app',
        data: {},
        methods: {
            msg: '这是父组件中的消息'
        },
        component: {
            son: {
                template: '<h1>这是子组件----{{finfo}}</h1>'
                props: ['finfo']
            }
        }
    });
</script>
```

2.使用`v-bind`或简化指令,将数据传递到子组件中:

```html

<div id="app">
    <son :finfo="mag"></son>
</div>
```

## 子组件向父组件传值:

1.原理: 父组件将方法引用,传递到子组件内部,子组件在内部调用父组件传递过来的方法,同时要把方法送给父组件的数据,在调用的时候当参数传递进去;  
2.父组件将方法的引用传递给子组件,其中,`gteMsg`是父组件中`methods`中定义的方法名称,`func`是子组件调用传递过来方法的时候的方法名称
```html
<son @func="getMsg"></son>
```


















