const express = require('express')
const { port, dev } = require('./config')


// Init
const app = express()
require('./database')


// Middlewares
if (dev) {
	const morgan = require('morgan')
	app.use(morgan('dev'))
}
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// Server
app.listen(port, dev ? console.log(`I'm alive on: http://localhost:${port}`) : undefined)
