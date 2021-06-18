const {
	saveUser,
} = require('../Users/store')

const {
	saveGameData,
	getAllGames,
} = require('./store')

const newGame = async (req, res) => {
	const { namePlayerOne, namePlayerTwo } = req.body

	if (!namePlayerOne || !namePlayerTwo) {
		res.redirect('/')
		return
	}

	const userOneData = {
		name: namePlayerOne,
		numberPlayer: 1,
	}

	const userTwoData = {
		name: namePlayerTwo,
		numberPlayer: 2
	}

	const playerOne = await saveUser(userOneData)
	const playerTwo = await saveUser(userTwoData)

	const data = [playerOne, playerTwo]

	res.render('game',  { data })
}

const saveGame = async (req, res) => {
	const data = req.body
	await saveGameData(data)
	res.status(201).send('OK')
}

const dashboard = async (_req, res) => {
	const games = await getAllGames()
	res.render('dashboard', { games })
}


module.exports = {
	newGame,
	saveGame,
	dashboard,
}