> 方法封装要求:

* 1.方法名称要定义为:`getFile`
* 2.方法接受一个形参`fpath`,表示要读取的文件的路径
* 3.方法的返回值为Promise实例对象


> 获取`.then()`的两个实参:

通过.then()指定的成功和失败的回调函数,可以在function的形参中进行接受,示例代码如下:

* 调用resolve和reject回调函数:

Promise异步操作的结果,可以调用resolve或reject回调函数进行处理,实例代码如下:



> getFile方法的基本定义:

```js
import fs from 'fs'

function getFile (filePath) {
	return new Promise(function (resolve, reject) {
		fs.readFile(filePath, 'utf8', (err, data) => {
			if (err) return reject(err) //如果读取失败,则调用失败的回调函数
			resolve(data) //如果读取成功,则调用成功的回调函数
		})
	})
}

//下面的getFile的.then()和.catch(),对应的是上面改方法的定义中的resolve,reject,不同的状态调用不同的回调函数
getFile('./text/1.txt')
	.then((res) => {
		console.log(res)
	})
	.catch((err) => {
		console.log(err)
	})

```


