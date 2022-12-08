import thenfs from 'then-fs'

thenfs.readFile('./text/1.txt', 'utf8').then(r1 => {
		console.log(r1)
	}, err1 => {
		console.log(err1)
	}
)

thenfs.readFile('./text/2.txt', 'utf8').then(r1 => {
		console.log(r1)
	}, err1 => {
		console.log(err1)
	}
)

thenfs.readFile('./text/3.txt', 'utf8').then(r1 => {
		console.log(r1)
	}, err1 => {
		console.log(err1)
	}
)
//注意上述代码无法保证读取顺序，因为他们是异步的，需要做进一步改正：

