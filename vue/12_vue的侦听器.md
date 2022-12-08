> 什么是侦听器:  

watch侦听器允许开发者监视数据的变化,从而针对数据的变化做特定的操作  
* 侦听器的本质上是一个函数,要监视哪个数据的变化,就把数据名作为方法名即可
语法格式如下:
```html
<div id="app">
    <input type="text" v-model:value="username">
    <div v-text="username"></div>
</div>
<script src="lib/vue.js"></script>
<script>
    const vm = new Vue({
        el: '#app',
        data: {
            username: 'zs'
        },
        methods: {},
        watch: {
            /*username() {
                console.log("old值:  " + this.username)
            },*/
            username(newval, oldval) {
                console.log("old值:  " + oldval + "  ,新的值:  " + newval)
            }
        }
    })
</script>
```

侦听器有两个形参,第一个是改变后的值,第二个是原来旧的值:
```html
username(newval, oldval) {
    console.log("old值:  " + oldval + "  ,新的值:  " + newval)
}
```

> 应用场景:  

在用户输入的时候,立刻向接口发出查询请求,

* 注意,上面的侦听器不会进入页面时立即触发  

---

> 侦听器的格式:

1.方法格式的侦听器
  * 缺点1:无法在刚进入页面的时候,自动触发  
  * 缺点2:无法侦听对象身上的属性的变化

2.对象格式的侦听器:
  * 好处1:可以通过`immediate`选项,让侦听器自动触发
  * 好处2:可以通过deep选项,侦听器深度监听对象中每个属性的变化

> 对象格式的侦听器:

```html
<div id="app">
    testmag:
    <input type="text" v-model:value="testmag">
</div>
<script src="lib/vue.js"></script>
<script>
    const vm = new Vue({
        el: '#app',
        data: {
            username: 'zs',
            testmag: {}
        },
        methods: {},
        watch: {
            //定义对象格式的侦听器:
            testmag: {
                //侦听器的处理函数
                // handler:function () {}
                //上面可以简写为:
                handler(newval, oldval) {
                    console.log('testmsg被触发!')
                    console.log(newval, oldval)
                },
                //immediate接收的是一个布尔值,true or false,表示是否进入页面就立即执行
                immediate: true
            }
        }
    })
</script>
```

要注意,这里的`immediate`,它是控制该侦听器是否在进入页面时执行一次,该默认值是false

> 侦听器的`deep`

如果要侦听一个对象的子属性:  
需要使用对象格式的侦听器,并开启`deep`选项,`deep`默认是false  
并且方法格式的侦听器默认是无法侦听对象身上的属性变化

```html
<div id="app">
    <input type="text" v-model="info.username">
    <input type="text" v-model="info.address.city">
</div>
<script src="lib/vue.js"></script>
<script>
    const vm = new Vue({
        el: '#app',
        data: {
            info: {
                    username: 'admin',
                    address: {
                    city: '北京'
                }
            }
        },
        methods: {},
        watch: {
            //下面是方法格式的侦听器
            //此时侦听对象里面属性的变化,它是不会被侦听到的
            /*info(newVal) {
                console.log(newVal)
            }*/

            //对象格式的侦听器
            //这样写虽然可以监听对象属性的变化,但是每次拿到变化值都要.出来,比较麻烦
           info: {
                handler(newValue) {
                    console.log(newValue)
                },
                //开启深度监听,它的默认值是false
                deep: true
            }
        }
    })
</script>
```

* 但是此时输出变化后的`newValue`是需要再"."出来,还可以使用下面的方式具体侦听对象身上的某个属性:  
  用"'"把要具体监听的属性给包裹  
```html
<div id="app">
    <input type="text" v-model="info.username">
    <input type="text" v-model="info.address.city">
</div>
<script src="lib/vue.js"></script>
<script>
    const vm = new Vue({
        el: '#app',
        data: {
            info: {
                    username: 'admin',
                    address: {
                    city: '北京'
                }
            }
        },
        methods: {},
        watch: {
            //如果要要侦听的是对象的子属性的变化,
            //可以像下面的写法一样,用"'"把要具体监听的属性给包裹
            'info.username'(newValue){
                console.log(newValue)
            }

        }
    })
</script>
```


