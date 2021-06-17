const Game = require('../../database/models/game')

const getAllGames = () => {
	try {
		return new Promise((resolve, reject) => {
			Game.find()
				.populate('players')
				.populate('winner')
				.exec((error, data) => {
					if (error) {
						return reject(error)
					}
					resolve(data)
				})
		})
	} catch (e) {
		console.log(e)
	}
}

const saveGameData= async (gameData) => {
	try {
		const gameCreated = new Game(gameData)
		await gameCreated.save()
	} catch (error) {
		console.error(error)
	}
}

module.exports = {
	saveGameData,
	getAllGames,
}
