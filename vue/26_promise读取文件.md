> 基于then-fs读取文件内容:

由于nodejs官方提供的fs模块仅支持以回调函数的方式读取文件,不支持promise的回调方式,因此,需要先运行如下命令,安装then-fs这个第三方包,从而支持我们基于promise的方式读取文件内容:

```shell
npm i then-fs
```

> then-fs的基本使用:

调用then-fs提供的readFile()方法,可以异步地读取文件的内容,它的返回值是Promise的实例对象,因此可以调用.then()方法为每一个Promise异步操作指定成功和失败之后的回调函数,示例代码如下:

```js
import thenfs from 'then-fs'

thenfs.readFile('./text/1.txt', 'utf8').then((r1) => {
	console.log(r1)
})
thenfs.readFile('./text/2.txt', 'utf8').then((r2) => {
	console.log(r2)
})
thenfs.readFile('./text/3.txt', 'utf8').then((r3) => {
	console.log(r3)
})
```

> .then()方法的特性：

如果上一个.then()方法中返回了一个新的Promise实例对象，则可以通过下一个.then()继续进行处理，通过.then()方法的链式调用，就解决了回调地狱的问题

```js
import thenfs from 'then-fs'

thenfs.readFile('./text/1.txt', 'utf8')
	.then((r1) => {
		console.log(r1)
		return thenfs.readFile('./text/2.txt', 'utf8')
	})
	.then((r2) => {
		console.log(r2)
		return thenfs.readFile('./text/3.txt', 'utf8')
	})
	.then((r3) => {
		console.log(r3)
	})

```


> 通过.catch捕获错误：

在promise的链式调用中如果发生了错误，可以使用Promise.prototype.catch方法进行捕获和处理

```js
thenfs.readFile('./text/11.txt', 'utf8')
	.then((r1) => {
		console.log(r1)
		return thenfs.readFile('./text/2.txt', 'utf8')
	})
	.then((r2) => {
		console.log(r2)
		return thenfs.readFile('./text/3.txt', 'utf8')
	})
	.then((r3) => {
		console.log(r3)
	})
	.catch((err) => {
		console.log(err)
	})
```
run:
```shell
"C:\Program Files\nodejs\node.exe" G:\MarkDownNote\vue\example_code\4_then-fs读取.js
promise保证读取顺序：
[Error: ENOENT: no such file or directory, open 'G:\MarkDownNote\vue\example_code\text\11.txt'] {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path: 'G:\\MarkDownNote\\vue\\example_code\\text\\11.txt'
}

进程已结束,退出代码0
```
注意上面是报错后就不再继续往后执行

* 如果不希望前面的错误导致后续的.then()无法正常执行，则可以将.catch的调用提前，实例代码如下：

```js
thenfs.readFile('./text/11.txt', 'utf8')
.catch((err) => {
console.log(err)
})
.then((r1) => {
console.log(r1)
return thenfs.readFile('./text/2.txt', 'utf8')
})
.then((r2) => {
console.log(r2)
return thenfs.readFile('./text/3.txt', 'utf8')
})
.then((r3) => {
console.log(r3)
})
```

run:
```shell
"C:\Program Files\nodejs\node.exe" G:\MarkDownNote\vue\example_code\4_then-fs读取.js
promise保证读取顺序：
[Error: ENOENT: no such file or directory, open 'G:\MarkDownNote\vue\example_code\text\11.txt'] {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path: 'G:\\MarkDownNote\\vue\\example_code\\text\\11.txt'
}
undefined
2.txt的内容
3.txt的内容

进程已结束,退出代码0
```

> promise.all()

Promise.all()方法会发起并行的promise异步操作，等所有的异步操作全部结束，才会执行下一步的.then()操作(等待机制)，实例代码：

```js
import thenfs from 'then-fs'

const promises = [
	thenfs.readFile('./text/1.txt', 'utf8'),
	thenfs.readFile('./text/2.txt', 'utf8'),
	thenfs.readFile('./text/3.txt', 'utf8'),
]

//这里res的顺序就是promise传入对象中的顺序
Promise.all(promises).then((res) => {
	console.log(res)
})
```

> promise.race()

Promise.race()方法会发起并行的Promise异步操作,只要任何一个异步操作完成,就立即执行下一步的.then()操作(赛跑机制),示例代码如下:

它只会输出返回最快的一个promise
```js
//Promise.race()
const promises = [
	thenfs.readFile('./text/1.txt', 'utf8'),
	thenfs.readFile('./text/2.txt', 'utf8'),
	thenfs.readFile('./text/3.txt', 'utf8'),
]
Promise.race(promises).then((res) => {
	console.log(res)
})
```


