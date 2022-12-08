import thenfs from 'then-fs'

/*thenfs.readFile('./text/1.txt', 'utf8').then((r1) => {
	console.log(r1)
})

thenfs.readFile('./text/2.txt', 'utf8').then((r2) => {
	console.log(r2)
})

thenfs.readFile('./text/3.txt', 'utf8').then((r3) => {
	console.log(r3)
})*/

//链式调用：
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

