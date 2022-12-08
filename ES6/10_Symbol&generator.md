ES6新增数据类型:<br>
Symbol 使用情况一般

用 typeof 检测出来的类型是: symbol

>注意:
>>1.Symbol不能new出来
>>2.Symbol()返回的是一个唯一的值<br>
>>>使用可以做一个key,定义一些唯一或者私有的一些东西
>>3.symbol 是一个单独的数据类型,就叫symbol,属于基本数据类型
>>4.如果symbol作为key,用 for in 循环,出不来

>Symbol的定义和使用
```html
<script >
    let syml = Symbol('aaa');
    console.log(syml);
    console.log(typeof syml);
</script>
```

>Symbol可用于json中:
```html
<script >
    let symbol = Symbol('kirin');
    let json = {
        a: 'apple',
        b: 'banana',
        [symbol]: 'aaa'
    };
    console.log(json['a']);
    console.log(json[symbol]);
    console.log("split---");

    for (let item in json) {
        console.log(item);
    }
</script>
```

---

箭头函数: 
```html
<script >
    ()=>{
            }
</script>
```

generator 函数:生成器

是为了解决异步深度嵌套的问题

generator函数语法:
```html
<script >
function * show() {
  //只能配合generator函数来使用
        yield 
}
//如:
function* gen() {
        yield 'welcome';
        yield 'to';
        yield 'school';+
    }
</script>
```
* 调用:
>```html
><script >
>    function* gen() {
>        yield 'welcome';
>        yield 'to';
>        return 'school';-
>    }
>
>    let g1 = gen();
>    console.log(g1.next()); // {value: "welcome", done: false} value:值 , done:后面是否为空
>    console.log(g1.next());
>    console.log(g1.next());// 此时返回的是最后一个,done:true
></script>
>```
>上述调用为手动调用

* for...of...自动便利generator,但是不会遍历到generator,如:
>```html
><script >
>    function* gen() {
>        yield 'welcome';
>        yield 'to';
>        return 'school';
>    }
>
>    let g1 = gen();
>    for (let val of g1) {
>        // 此时不会输出return的东西
>        console.log(val);
>    }
></script>
>```
还可以使用解构赋值(它解构并不会解构return的东西),如:
```html
<script >
    function* gen() {
        yield 'welcome';
        yield 'to';
        return 'school';
    }

    let [a, b] = gen();
    console.log(a, b);
</script>
```
或者配合解构:
```html
<script >
    function* gen() {
        yield 'welcome';
        yield 'to';
        yield '51.cnm';
        return 'school';
    }

    let [a, ...b] = gen();
    console.log(a, b);
</script>
```
或者使用扩展运算符:
```html
<script >
    function* gen() {
        yield 'welcome';
        yield 'to';
        yield '51.cnm';
        return 'school';
    }
    console.log(...gen());
</script>
```
也可以配合Array.from()来使用:
```html
<script >
    function* gen() {
        yield 'welcome';
        yield 'to';
        yield '51.cnm';
        return 'school';
    }

    console.log(Array.from(gen()));
</script>
```


---

异步:不连续,上一个操作没有执行完,下一个操作照样开始<br>
同步:连续执行,上一个操作没有执行完,下一个没法开始<br>
>关于异步的解决方案:<br>
>>回调函数<br>
>事件监听<br>
>发布/订阅<br>
>Promise对象<br>


---

```html
<script >
    async function fn() {
      let result=await xxx; //表示后面结果需要等待
    }
</script>
```

补充:async特点:<br>
    1.await只能放到async函数<br>
    2.相比generator语义化更强了<br>
    3.await后面可以是promise对象,也可以是数字,字符串等等<br>
    4.async返回的是promise对象<br>
    5.只要await语句后面promise状态变成一个reject时,整个async函数就会中断执行,如:<br>
>```html
><script >
>    async function fn() {
>      throw new Error('Error出错了');
>    }
>    fn().then(res=>{
>    
>    console.log(res)},err=>{
>    
>    console.log(err);})
></script>
>```
>async函数中解决抛错:影响后续代码:使用try{}catch(){}
>推荐在任何有await的地方,都用try,catch












































