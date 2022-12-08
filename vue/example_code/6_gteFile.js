import fs from 'fs'

function getFile (filePath) {
	return new Promise(function (resolve, reject) {
		fs.readFile(filePath, 'utf8', (err, data) => {
			if (err) return reject(err) //如果读取失败,则调用失败的回调函数
			resolve(data) //如果读取成功,则调用成功的回调函数
		})
	})
}

//下面的getFile的.then()中接受了两个方法,对应的是上面改方法的定义中的resolve,reject,不同的状态调用不同的回调函数
getFile('./text/1.txt')
	.then((res) => {
		console.log(res)
	})
	.catch((err) => {
		console.log(err)
	})


