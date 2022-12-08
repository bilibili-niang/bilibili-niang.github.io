
[该笔记部分参考](https://www.jianshu.com/p/4efa7675834c)

>>set数据结构: 本身是一种构造函数,用于生成Set数据结构
```html
<script >
    new Set([iterable])
</script>
```

>Set属性中有size

>Set对立面的元素进行比较时,使用的算法叫做"Same-value-zero equality"，类似于精确相等运算符"==="，主要的区别是NaN等于自身,而精确相等运算符认为NaN不等于自身
>>类似于数组,但是里面不能有重复值,如:
>```html
><script >
>    let arr = ['a', 'b', 'c', 'd', 'a'];
>    console.log(arr);
>    console.log("split---");
>    // set数据结构不能重复
>    let setArr = new Set(['a', 'b', 'c', 'a', 'b']);
>    console.log(setArr);
></script>
>```

>set创建:
>```html
>script
>    let setArr = new Set();
>```

>set()可以使用 add() delete() has() 有size属性
>add()方法可以连续使用(使用add方法是添加元素后创建set并返回一个新的,delete()不可以) 如:
>```html
><script >
>    let setArr = new Set(['a', 'b']);
>    // add()其实是添加完成之后将其返回,可以连续使用add()
>    setArr.add('sdf')
>    setArr.add('sdghkn')
>    console.log(setArr);
>    console.log("split---");
>    setArr.delete('a')
>    console.log(setArr);
>    console.log("split---");
>    console.log(setArr.has('a'));
>    console.log(setArr.has('b'));
>    console.log("split---");
>    // size 个数
>    console.log(setArr.size);
>    console.log("split===");
>    console.log(setArr);
>    setArr.delete('sdf');
>    console.log(setArr);
></script>
>```

>数组利用Set去除重复数组:
>```html
><script >
>    let arr = [1, 2, 3, 4, 3, 4, 1, 5]
>    console.log([...new Set(arr)])      // [1, 2, 3, 4, 5]
></script>
>```

>清除set中的所有元素:
>```html
><script >
>    let setArr = new Set();
>    setArr.add('a')
>    setArr.add('b')
>    setArr.add('c')
>    console.log(setArr);
>    console.log('split---');
>    // 清除所有set中的数组
>    setArr.clear();
>    console.log(setArr);
></script>
>```

---
* Set结构可以利用 Array.from 或者 扩展运算符 转化为数组

>set中添加数组会有key,value属性,可以分别使用或者一起使用,如:
>```html
><script >
>    let setArr = new Set(['a', 'b', 'c', 'd']);
>    // 不加keys后者value的话,默认返回的是value
>    for (let item of setArr.keys()) {
>        console.log(item);
>    }
>    console.log('split---');
>    for (let item of setArr.values()) {
>        console.log(item);
>    }
>    console.log('split---');
>    for (let item of setArr.entries()) {
>        console.log(item);
>    }
>    console.log('split---');
>    for (let [key, value] of setArr.entries()) {
>        console.log(key, value);
>    }
>    console.log('split------');
>
>    setArr.forEach((k, v) => {
>        console.log(k, v);
>    })
></script>
>```

>set的应用:可以使用...将其转为数组再进行map filter操作:
>```html
><script >
>    let arr = [1, 2, 3, 4, 6, 6, 5, 5, 98, 54, 45, 4, 4, 4, 4, 4,];
>    // let set = new Set(arr);
>    //去重，然后利用 ... 进行转为数组
>    let newArray = [...new Set(arr)]
>    console.log(newArray);
>    /*
>    使用 [] 将set数据结构变为数组
>    可以使用 map filter来进行循环
>    * */
></script>
>```
>set使用filter进行逻辑处理的例子:
>```html
><script >
>    let set = new Set([1, 2, 3, 6, 9, 10]);
>    // let set2 = new Set();
>    // for (let value of set.values()) {
>    //     set2.add(value * 2)
>    // }
>    // set = new Set([...set].map(val => val * 2));
>    set = new Set([...set].filter(val => val % 2 === 0));
>    console.log(set);
></script>
>```

>如果要重复在set中添加元素可以(此时仅仅是添加的对象不同):
>```html
><script >
>    let set = new Set();
>    let json = {
>        a: 1, b: 2
>    };
>    let json2 = {
>        a: 1, b: 2
>    };
>    set.add(json);
>    set.add(json2);
>
>    // console.log(set);
>    set.forEach(item => {
>        // console.log(item);
>        console.log(item.a);
>    })
></script>
>```

* 遍历:
>keys()： 返回一个包含集合中所有键的迭代器<br>
>values()：返回一个包含集合中所有值的迭代器<br>
>entries(): 返回一个包含Set对象中所有元素<br>
>forEach(callback, thisArg): 用于对集合成员执行callbackFn操作，如果提供了thisArg参数，回调中的this会是这个参数，回调中的this会是这个参数，没有返回值<br>
 

>Set()和WeakSet()

*两者区别:
>WeakSet 只能储存对象引用，不能存放值，而 Set 对象都可以<br>
>WeakSet 对象中储存的对象值都是被弱引用的，则这个对象将会被垃圾回收掉（不考虑该对象还存放于 WeakSet 中），所以 WeakSet 对象里有多少个成员元素，取决于垃圾回收机制有没有运行，运行前后成员个数可能不一致，遍历结束之后，有的成员可能被垃圾回收了，WeakSet 对象是无法被遍历的（ES6 规定 WeakSet 不可遍历），也没有办法拿到它包含的所有元素<br>
>* 属性：<br>
>constructor: 构造函数，任何一个具有 Iterable 接口的对象，都可以作为参数<br>
>* 方法：<br>
>add(value): 在 WeakSet 对象中添加一个元素value<br>
>has(value): 判断WeakSet 对象中是否包含value<br>
>delete(value): 删除元素value<br>

>WeakSet()创建:
>```html
><script >
>    let ws = new WeakSet()
></script>
>```



