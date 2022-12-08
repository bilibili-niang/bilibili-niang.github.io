> 什么是async,await?

async/await是es8引入的新语法,用来简化Promise异步操作,在async/await出现之前,开发者之前只能通过链式.then()方法处理Promise异步操作,示例代码如下:
```js
console.log('promise保证读取顺序：')
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

> async/await基本使用:

```js
import thenfs from 'then-fs'

async function getAllFile () {
	const r1 = await thenfs.readFile('./text/1.txt', 'utf8')
	console.log(r1)
}
getAllFile()
```

> 注意事项:

* 1.如果在function中使用了await,则function必须被async修饰
* 2.在async方法中,第一个await之前的代码会同步执行,await之后的代码会异步执行
