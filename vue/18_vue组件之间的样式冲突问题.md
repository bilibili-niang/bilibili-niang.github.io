> ### 组件之间的样式冲突问题:

默认情况下,写在.vue组件中的样式会全局生效,因此很容易造成多个组件之间的样式冲突问题

导致组件之间样式冲突的根本原因是:

* 单页面程序中,所有组件的DOM结构,都是基于唯一的index.html亚眠进行呈现的,
* 每个组件中的样式,都会影响整个index.html页面中的DOM元素

> ### 解决(原理):

为每个元素添加自定义属性,并在添加样式时,使用属性选择器:

关于自定义属性`data-v-002`,这里注意,v不能写在前面,写在前面会被认为指令  
`right.vue`:

```html

<template>
    <div data-v-002>
        <h1 data-v-002>Left</h1>
        <h3 data-v-002>h3标题</h3>
        <MyCount :init="9" data-v-002></MyCount>
    </div>
</template>

<script>
    export default {
        name: "Left",
    }
</script>

<style scoped lang="less">
    h1 {
        display: flex;
        width: 50%;
        font-size: 3rem;
    }

    div {
        background: orange;
        width: 50%;
    }

    h3[data-v-002] {
        color: #a97878;
        font-size: 30px;
    }
</style>

```

`left.vue`:

```html

<template>
    <div data-v-002>
        <h1 data-v-002>Left</h1>
        <h3 data-v-002>h3标题</h3>
        <MyCount :init="9" data-v-002></MyCount>
    </div>
</template>

<script>
    export default {
        name: "Left",
    }
</script>

<style scoped lang="less">
    h1 {
        display: flex;
        width: 50%;
        font-size: 3rem;
    }

    div {
        background: orange;
        width: 50%;
    }

    h3[data-v-002] {
        color: #a97878;
        font-size: 30px;
    }
</style>
```

---

* 注意,其实vue已经帮我们解决了样式冲突的问题.按照上面的方法,它会自动帮我们加上自定义属性,

只需要在组件的style标签中加上`scoped`,只有加上这个,vue才会自动帮我们处理

```html
<style scoped>
</style>
```

