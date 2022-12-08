* proxy:代理
>Proxy 用于修改某些操作的默认行为,等同于在语言层面做出修改，所以属于一种“元编程”(meta programming),即对编程语言进行编程<br>
>Proxy 可以理解成,在目标对象之前架设一层“拦截”,外界对该对象的访问,都必须先通过这层拦截,因此提供了一种机制,可以对外界的访问进行过滤和改写.Proxy 这个词的原意是代理,用在这里表示由它来“代理”某些操作,可以译为“代理器”

>主要是扩展 / 增强 对象的一些功能

>比如说 Vue中的 Vue.key.Codes.enter=65

---

>proxy作用:<br>
>Vue中的拦截,上报,扩展功能,统计,增强功能等的

>proxy是设计模式的一中,代理模式
---

>语法:
>new Proxy(target,handler);<br>
>let obj = new Proxy(被代理的对象,对对立对象的操作)
>* 注意:被代理的对象可以是null<br>
>hander是一个json:
>```html
><script >
>    {
>    set(){},//设置的时候干的事
>    get(){},// 获取对象属性
>    deleteProperty(){},//删除
>    has(){},//判断有没有
>    apply(){}//调用函数的处理
>    // 等等
>    }
></script>
>```

>如:利用proxy创建元素:
>```html
><script >
>    const DOM = new Proxy({}, {
>        get(target, property) {
>            // property 就是 DOM.xx 里面的xxx
>            // console.log(target, property);
>            // ...:扩展剩余参数
>            return function (attr = {}, ...children) {
>                // console.log(attr, children);
>                const el = document.createElement(property);
>                for (let key of Object.keys(attr)) {
>                    // 为el添加属性
>                    el.setAttribute(key, attr[key]);
>                }
>                //再添加子元素
>                for (let child of children) {
>                    if (typeof child == 'string') {
>                        child = document.createTextNode(child);
>                    }
>                    el.appendChild(child);
>                }
>                return el;
>            }
>        }
>    });
>    let oDiv = DOM.div({id: 'div1', class: 'aaa'}, '我是div', '呵呵呵');
>    console.log(oDiv);
></script>
>```
>
>利用proxy创建元素及其子元素:
>```html
><script >
>    const DOM = new Proxy({}, {
>        get(target, property) {
>            // property 就是 DOM.xx 里面的xxx
>            // console.log(target, property);
>            // ...:扩展剩余参数
>            return function (attr = {}, ...children) {
>                // console.log(attr, children);
>                const el = document.createElement(property);
>                for (let key of Object.keys(attr)) {
>                    // 为el添加属性
>                    el.setAttribute(key, attr[key]);
>                }
>                //再添加子元素
>                for (let child of children) {
>                    if (typeof child == 'string') {
>                        child = document.createTextNode(child);
>                    }
>                    el.appendChild(child);
>                }
>                return el;
>            }
>        }
>    });
>    //只要用DOM创建元素就调用了代理
>    let oDiv = DOM.div({id: 'div1', class: 'aaa'}, '我是div', '呵呵呵');
>    console.log(oDiv);
></script>
>```



---
>使用set进行拦截 和
>实现一个,访问对象身上的属性,默认不存在的时候返回undefined,希望如果不存在,返回错误(警告)信息,如:
>```html
><script >
>    { // 使用set进行拦截
>        let obj = new Proxy({}, {
>            set(target, prop, value) {
>                console.log(target, prop, value);
>            }
>        });
>        obj.a = 132;
>        console.log("split---");
>    }
>    // 设置一个年龄保证为整数,大于18,不能超过200
>    let obj = new Proxy({}, {
>        set(target, prop, value) {
>            if (prop == 'age') {
>                if (!Number.isInteger(value)) {
>                    throw new TypeError(`年龄必须为整数`);
>                }
>                if (value > 200) {
>                    throw new RangeError(`年龄超标了,必须小于200岁`);
>                }
>            }
>            target[prop] = value;
>        }
>    });
>    obj.a = 123;
>    obj.name = 'kirin';
>    console.log(obj);
>    // 报错
>    // obj.age = 13.5;
>    obj.age = 13;
>
>    /*
>    deleteProperty():删除,拦截
>    has():检测有没有
>    * */
></script>
>```
---

>利用proxy删除与判断:
>```html
><script >
>    let json = {
>        a: 1,
>        b: 2
>    };
>    let newJson = new Proxy(json, {
>        deleteProperty(target, property) {
>            console.log(`你要删除${property}属性`);
>            //TODO
>            delete target[property];
>        },
>        has(target, property) {
>            console.log(`你判断是否存在,调用has方法了`);
>            //TODO
>            return property in target;
>        }
>    });
>    console.log('a' in newJson);
>    delete newJson.a;
>    console.log(newJson);
></script>
>```


---

>apply():拦截方法
>```html
><script >
>    function fn() {
>        return `我是函数`;
>    }
>
>    let newFn = new Proxy(fn, {
>        apply(target, thisArg, argArray) {
>            return `函数吗?`
>        }
>    });
>    console.log(newFn());
></script>
>```

---
>Reflect.apply(调用的函数,this指向,参数数组);
>利用apply进行拦截方法:
>```html
><script >
>    function sum(a, b) {
>        return a + b;
>    }
>
>    let newSum = new Proxy(sum, {
>        apply(target, context, args) {
>            // context:指向
>            // console.log(target, context, args);
>            // console.log(...arguments)
>            // Reflect:反射
>            return Reflect.apply(...arguments)**2;
>        }
>    })
>    console.log(newSum(2, 3));
></script>
>```
>还有:
>```html
><script >
>    // console.log(Math.ceil(5.4));
>
>    // let rel = Reflect.apply(Math.ceil, null, [9.8]);
>    // console.log(rel);
>
>    function show(...args) {
>        console.log(this)
>        console.log(args);
>    }
>
>    // show(1,2,3,4);
>    // show.call('abc', 1, 2, 3, 4);
>    // show.apply('abc', [1, 2, 3, 4]);
>    Reflect.apply(show, 'aaaa', [1, 2, 3, 4]);
></script>
>```
---
>Reflect:反射
>```html
><script >
>    // 之前的检测方法
>    console.log('assign' in Object);
>    // 以后的检测方法可能一直是:
>    console.log(Reflect.has(Object, 'assign'));
></script>
>```
>还有:
>```html
><script >
>    let json = {a: 1, b: 2};
>    /*delete json.a;//删除
>    console.log(json);*/
>    Reflect.deleteProperty(json, 'a');//删除
>    console.log(json);
></script>
>```
---

Object.xxxx 语言内部的方法

Object.defineProperty<br>
放到Reflect对象身上<br>
通过Reflect对象身上直接拿到语言内部东西




