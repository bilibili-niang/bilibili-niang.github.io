import db from '../db/index.js'

//导出getAllUser
export async function getAllUser (req, res) {
	const [rows] = await db.query('select id,username,nickname from ev_user')
	res.send({
		status: 0,
		message: 'success',
		data: rows
	})
	
	/*res.status(200).json({
		status: 0,
		message: 'success',
		data: rows
	})*/
}

// console.log(getAllUser())

/*getAllUser()
	.then(
		()=>{
			console.log('then')
		},()=>{
			console.log('catch')
		}
	)*/
/*	.catch(() => {
	console.log('error already done')
})*/
