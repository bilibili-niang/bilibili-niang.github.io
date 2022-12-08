import thenfs from 'then-fs'

//基本使用:
async function getAllFile () {
	const r1 = await thenfs.readFile('./text/1.txt', 'utf8')
	console.log(r1)
}

getAllFile()