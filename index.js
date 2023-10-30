const express = require('express')
const cors = require('cors')
const userRouter = require('./routes/user')
const todoListRouter = require('./routes/todo')

const PORT = process.env.PORT || 80

const app = express()

app.use(
	cors({
		origin: '*',
		credentials: true
	})
)
app.use(express.json());
app.use('/api', userRouter)
app.use('/api', todoListRouter)

app.listen(PORT, () => console.log('server start'))