import thenfs from 'then-fs'

console.log('A')

thenfs.readFile('./text/1.txt', 'utf8', function (err, doc) {
	console.log('B')
})

setTimeout(() =>{
	console.log('C')
}, 0)
console.log('D')

//输出ADCB