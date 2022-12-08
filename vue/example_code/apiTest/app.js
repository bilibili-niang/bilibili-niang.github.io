import express from 'express'
import userRouter from './router/user_router.js'

const app = express()


app.use('/api',userRouter)

app.listen(80, () => {
	const d = new Date()
	console.log('server is running at 127.0.0.1:80 | start time is ' + d.getHours() + ' : ' + d.getMinutes())
})

