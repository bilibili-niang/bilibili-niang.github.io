> Promise:
>>解决异步回调问题<br>
>传统方式使用的话:大部分用回调函数,事件
>
---

* 使用时可以:
```html
<script >
    let a = 10;
    // 返回Promise对象
    let Promis = new Promise(function (resolve, reject) {
        //resolve 成功的时候调用
        // reject 失败的时候调用
        if (a == 10) {
            resolve('成功');
        } else {
            reject('失败');
        }
    });
</script>
```
* 其中上面的Promis可以接受resolve / reject来进行下一步操作
```html
<script >
//    Promis.then(res=>{
//
//    },err=>{
//
//    })
    // 如:
    Promis.then(res=>{
        console.log(res);
    },err=>{
        console.log(err);
    })
</script>
```
* 使用catch来接收报错:
```html
<script >
    let a = 10;
    // 返回Promise对象
    let Promis = new Promise(function (resolve, reject) {
        //resolve 成功的时候调用
        // reject 失败的时候调用
        if (a == 10) {
            resolve('成功');
        } else {
            reject('失败');
        }
    });

    // reject,发生错误的别名
    Promis.catch(err => {
        console.log(err);
    })
</script>
```
* 处理Promise的resolve / reject时,也可以实用 . 连接:
```html
<script >
    let a = 10;
    // 返回Promise对象
    let Promis = new Promise(function (resolve, reject) {
        //resolve 成功的时候调用
        // reject 失败的时候调用
        if (a == 10) {
            resolve('成功');
        } else {
            reject('失败');
        }
    });

    //此处可以直接使用　．连接
    Promis.then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    })
</script>
```
>也可以使用then() 来接收resolve / reject 的结果
>```html
><script >
>    new Promise().then(res=>{
>   
>    },err=>{
>   
>    })
></script>
>```

* 
```html
<script >
    let a = 10;
    // 返回Promise对象
    let Promis = new Promise(function (resolve, reject) {
        //resolve 成功的时候调用
        // reject 失败的时候调用
        if (a == 10) {
            resolve('成功');
        } else {
            reject('失败');
        }
    });
     Promise.resolve('aa'): // 将现有东西转成一个promise对象,resolve状态,成功状态
     // 等价于:
     new Promise(resolve => {
         resolve('aaa')
     });
     // 或者:
     Promise.reject('aaa'): // 将现有东西转成一个promise对象,reject状态,失败状态
     // 等价于:
     new Promise(reject => {
         reject('aaa')
     });
</script>
```
* promise可以传递状态 resolve / reject:
```html
<script >
    p1 = new Promise(resolve => {
        resolve('aaa')
    });
    p1.then(res => {
        console.log(res);
    })
</script>
```

* Promise.all():
>把promise打包,打包完还是一个promise对象<br>
>若是其中传入的一个promise对象的状态与其他promise状态不符,会导致报错(必须确保里面所有promise对象都是resolve状态才靠谱)<br>
>如:
```html
<script >
    let p1 = Promise.resolve('aaa');
    let p2 = Promise.resolve('bbb');
    let p3 = Promise.resolve('ccc');
    Promise.all([p1, p2, p3]).then(res => {
        // console.log(res);
        let [res1, res2, res3] = res;
        console.log(res1, res2, res3);
    })
</script>
```
* Promise.race():
>只要用一个成功就返回,如:
```html
<script >
    let p1 = Promise.resolve('aaa');
    let p2 = Promise.reject('bbb');
    let p3 = Promise.resolve('ccc');
    Promise.race([p1, p2, p3]).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    })
</script>
```
* demo_练习:
```html
<script >
    // 用户登录成功 / 失败 练习
    let status = 1;
    let userLogin = (resolve, reject) => {
        setTimeout(() => {
            if (status == 1) {
                resolve({data: '登陆成功', msg: 'asfasfas', token: 'asfyuiofdgb'});
            } else {
                reject('失败了');
            }
        }, 2000)
    };

    let getUserInfo = (resolve, reject) => {
        setTimeout(() => {
            if (status == 1) {
                resolve({data: '获取用户成功', msg: 'asfasfas', token: 'asfyuiofdgb'});
            } else {
                reject('失败了');
            }
        }, 1000)
    };
    new Promise(userLogin).then(res => {
        console.log('用户登录成功');
        return new Promise(getUserInfo);
    }).then(res => {
        console.log('获取用户信息成功');
        console.log(res);
    })
</script>
```


































