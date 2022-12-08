import thenfs from 'then-fs'

/*const promises = [
	thenfs.readFile('./text/1.txt', 'utf8'),
	thenfs.readFile('./text/2.txt', 'utf8'),
	thenfs.readFile('./text/3.txt', 'utf8'),
]

//这里res的顺序就是promise传入对象中的顺序
Promise.all(promises).then((res) => {
	console.log(res)
})*/

// console.log(promises)


//Promise.race()
const promises = [
	thenfs.readFile('./text/1.txt', 'utf8'),
	thenfs.readFile('./text/2.txt', 'utf8'),
	thenfs.readFile('./text/3.txt', 'utf8'),
]
Promise.race(promises).then((res) => {
	console.log(res)
})