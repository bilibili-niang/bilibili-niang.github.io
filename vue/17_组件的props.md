> ### 组件的props

props是组件的自定义属性,在封装通用组件的时候,合理地使用props可以极大地提高组件的复用性

* 被引用的组件:

在被引用的组件中,使用`props`定义一个数组来表示要自定义初始值的数据
```html
<template>
  <div>
    <h1>Count组件</h1>
    <hr>
    <h1>count的值是:{{ init }}</h1>
    <button @click="countAdd">init++</button>
    <!--或者count自加代码写行内:-->
    <button @click="init+=1">行内,init+1</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  data: function () {
    return {
      n1: 0,
      n2: 0,
      result: 0,
      opt: '+',
      count: 0
    }
  }, methods: {
    calc() {
      //注意:这是投机取巧的方式,正式开发中尽量少用
      const codeStr = 'parseInt(this.n1) ' + this.opt + ' parseInt(this.n2)'
      this.result = eval(codeStr);
    },
    countAdd() {
      this.init++;
    }
  },
  //props是自定义属性,允许使用者在使用时自定义初始值
  props: ['init'],
}
</script>
```
引用它的组件:  
在引用的组件中,使用`<MyCount init="6"></MyCount>`的时候,传入自定义组件的初始值
```html
<template>
  <div>
    <h1>Right</h1>
    <MyCount init="6"></MyCount>
  </div>
</template>
<script>
export default {
  name: "Right"
}
</script>
<style scoped lang="less">
h1 {
  display: flex;
  width: 50%;
  font-size: 3rem;
}
div {
  background: gray;
  width: 50%;
}
</style>
```

* 注意,上面的方式中,传入的是字符串,并不是数字
* 如果要传入数字,那么就应该在引用组件的时候,给它绑定一个初始值:

```html
    <MyCount :init="6"></MyCount>
```

> ### props是只读的

`props`中的数据可以直接在模板结构中被使用  
不建议直接修改props的值,  
如果修改了,它会报错:

```html
vue.esm.js?efeb:628  
       [Vue warn]: Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "init"
found in

---> <Count> at src/components/Count.vue
       <Left> at src/components/Left.vue
         <App> at src/App.vue
           <Root>
```

* 所以,需要在应用的组件中传入一个初始值,在被引用组件中将初始值赋值给将要使用的值即可:

```html
<template>
  <div>
    <h1>Count组件</h1>
    <hr>
    <h1>count的值是:{{ count }}</h1>
    <button @click="countAdd">count++</button>
    <!--或者count自加代码写行内:-->
    <!--
    这种方式是不推荐的,
    因为不建议直接修改props的值,
    如果修改了,它会报错
    -->
    <button @click="count+=1">行内,init+1</button>
  </div>
</template>
<script>
export default {
  name: "Count",
  data: function () {
    return {
      count: this.init
    }
  }, methods: {
    countAdd() {
      this.count++;
    }
  },
  //props是自定义属性,允许使用者在使用时自定义初始值
  //自定义属性的名字,是封装者自定义的(只要名称合法即可)
  //props中的数据,可以直接在模板结构中被使用
  props: ['init'],
}
</script>
```

> ### props的default属性

* 使用数组形式的props不方便定义其中属性的默认值,因此我们可以使用对象格式,来传入对应元素的初始值  
```js
     props: ['init'],
```


在调用组件的时候,如果传入一个初始值的话,就需要用到组件props的初始值:  

* 在生命自定义属性时,可以通过default来定义属性的默认值,示例代码如下:
```js
  props:{
    init:{
      //用default来定义属性的初始值
      default:0
    }
    //  自定义属性A:{/* 配置选项 */}
  }
```

> ### props的type类型:

如图,限制属性的类型:
```js
  props: {
    init: {
      //用default来定义属性的初始值
      default: 0,
      //init的类型必须是number
      type:Number
    }
  }
```

那么,此时在调用的时候,传入字符串:

```html
    <MyCount init="9"></MyCount>
```

它会报错:
```shell
vue.esm.js?efeb:628 
       [Vue warn]: Invalid prop: type check failed for prop "init". Expected Number with value 9, got String with value "9".
found in
---> <Count> at src/components/Count.vue
       <Left> at src/components/Left.vue
         <App> at src/App.vue
           <Root>
```

传入数字:
```html
    <MyCount :init="6"></MyCount>
```

---

> ### `props`的`required`必须项:
值为true/false,代表使用该组件时是否必须传值

```js
  props: {
    init: {
      //用default来定义属性的初始值
      default: 0,
      //init的类型必须是number
      type:Number,
      //必填项校验
      required:true
    }
    //  自定义属性A:{/* 配置选项 */}
  }
```

下面是两个组件引用了`Count`组件:
```html
<MyCount></MyCount>
```
```html
<MyCount :init="6"></MyCount>
```
那么此时没有传值的第一个组件就会报错:

```shell
[Vue warn]: Missing required prop: "init"
found in
---> <Count> at src/components/Count.vue
       <Left> at src/components/Left.vue
         <App> at src/App.vue
           <Root>
```
---









