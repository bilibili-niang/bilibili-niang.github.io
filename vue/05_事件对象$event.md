> 在执行方法时可以传参:
```html
<div id="app">
    <p>count的值是:{{count}}</p>
    <!--如果count为偶数,则按钮背景变为红色,否则取消背景色-->
    <button @click="add(1)">+1</button>
</div>

<script src="http://icestone.work/public/cdnjs/vue.js"></script>
<script>
    const vm = new Vue({
        el: '#app',
        data: {
            count: 0,
        },
        methods: {
            add(n) {
                this.count += n;
            }
        }
    })
</script>
```
---
> 如果不传参的话,`add()`默认情况下是`接收事件对象e`:  
> 在下面的案例中`count`单数与偶数,`button`的背景颜色发生改变  
> 要注意这里`e.target`的使用
```html
<div id="app">
    <p>count的值是:{{count}}</p>
    <!--如果count为偶数,则按钮背景变为红色,否则取消背景色-->
    <button @click="add">+1</button>
</div>
<script src="http://icestone.work/public/cdnjs/vue.js"></script>
<script>
    const vm = new Vue({
        el: '#app',
        data: {
            count: 0,
        },
        methods: {
            //如果在不传参的情况下,它默认接收事件对象e,它是鼠标事件
            //e.target可以获取触发的对象
            add(e) {
                this.count += 1;
                console.log(e)
                if (this.count % 2 === 0) {
                    e.target.style.backgroundColor = 'red';
                } else {
                    e.target.style.backgroundColor = 'purple';
                }
            }
        }
    })
</script>
```

---

> 如果你此时想传参并使用事件对象`$event`:  
> 可以使用`$event`,即原生的DOM事件对象  
> 要注意这里`add2(1,$event)`中`$event`是形参,在`methods`中它使用的是`add2(n, e)`来接收

```html
<div id="app">
    <p>count的值是:{{count}}</p>
    <!--如果count为偶数,则按钮背景变为红色,否则取消背景色-->
    <button @click="add">+1</button>
    <hr>
    <button @click="add2(1,$event)">+1</button>
    <p> count2的值是: {{count2}}</p>


</div>
<script src="http://icestone.work/public/cdnjs/vue.js"></script>
<script>
    const vm = new Vue({
        el: '#app',
        data: {
            count: 0,
            count2: 0
        },
        methods: {
            //如果在不传参的情况下,它默认接收事件对象e,它是鼠标事件
            //e.target可以获取触发的对象
            add(e) {
                this.count += 1;
                console.log(e)
                if (this.count % 2 === 0) {
                    e.target.style.backgroundColor = 'red';
                } else {
                    e.target.style.backgroundColor = 'purple';
                }
            },
            add2(n, e) {
                this.count2 += n;
                if (this.count2 % 2 === 0) {
                    e.target.style.backgroundColor = 'black';
                } else {
                    e.target.style.backgroundColor = 'gray';
                }

            }
        }
    })
</script>
```

* 注意,在开发中$event不常用
