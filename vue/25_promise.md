> promise的概念：

* `Promise`是一个构造函数
  * 我们可以创建promise的实例: const p=new Promise()
  * new出来的promise实例对象,代表一个异步操作

* `Promise.protottype`上包含一个.then()方法
  * 每一次new Promise()构造函数得到的实例对象
  * 都可以通过原型链的方式访问到.then()方法,例如p.then()

* .then()方法用来预先指定成功和失败的回调函数
  * p.then(成功的回调函数,失败的回调函数)
  * p.thne(result=>{},error=>{})
  * 调用.then()方法时,成功的回调函数是必选的,失败的回调函数是可选的




