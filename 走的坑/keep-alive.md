vue中的keep-alive

- 作用: 缓存组件
- 优势:提升性能
- 是vue的内置组件

只要用到keep-alive就会再多两个生命周期: activated` 和 `deactivated

如果使用了keep-alive的组件在created中有执行语句,那么只会在第一次进入时会执行;如果后续还想每一次进入都执行,需要使用activated生命周期函数

使用:

如下面,是为所有的组件添加keep-alive

```vue
<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
```

但是这样可能在请求不同接口数据时,数据并不会去请求,而是使用之前的旧数据





