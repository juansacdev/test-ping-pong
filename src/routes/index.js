const user = require('../components/Users/network')
const game = require('../components/Game/network')

const routes = server => {
	server.use('/', user)
	server.use('/', game)
}

module.exports = routes