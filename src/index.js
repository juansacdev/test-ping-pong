const express = require('express')
const Handlebars = require('handlebars')
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')
const hbs = require('express-handlebars')
const path = require('path')
const router = require('./routes')
const { port, dev } = require('./config')


// Settings
const app = express()
require('./database')

app.engine('hbs', hbs({
	handlebars: allowInsecurePrototypeAccess(Handlebars),
	defaultLayout: 'index',
	extname: '.hbs'
}))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')


// Middlewares
if (dev) {
	const morgan = require('morgan')
	app.use(morgan('dev'))
}
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))


// Routes
router(app)


// Init
app.listen(port, dev ? console.log(`I'm alive on: http://localhost:${port}`) : undefined)
