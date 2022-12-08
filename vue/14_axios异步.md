> 使用:

```html
<div id="app">
    <textarea name="" id="" cols="30" rows="10" v-text="data"></textarea>
    <button @click="getList">run</button>
    <button class="jquery">jquery触发</button>
</div>
<script src="lib/vue.js"></script>
<script src="lib/axios.js"></script>
<script src="http://www.icestone.work/public/cdnjs/jquery.min.js"></script>
<script>
    const vm = new Vue({
        el: '#app',
        data: {
            data: {}
        },
        methods: {
            getList: async function () {
                //不使用结构赋值
                this.data = await axios.get('http://www.icestone.work/getIndexList');
            }
        }
    })
    $('.jquery').click(async function () {
        const {data} = await axios.get('http://www.icestone.work/getIndexList');
        console.log(data)
    })
</script>
```

> 注意:

如果调用某个方法的返回值是Promise实例,则前面可以添加await  
await只能在被async修饰的方法中  
可以使用解构赋值直接获取data数据
