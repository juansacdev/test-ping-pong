const {
	savePoints,
} = require('./store')

const renderForm = (_req, res) => {
	res.render('form')
}

const savePointsOfUser = async (req, res) => {
	const data = req.body
	const playerOne = data[0]
	const playerTwo = data[1]

	await savePoints(playerOne)
	await savePoints(playerTwo)
	res.send('')
}


module.exports = {
	renderForm,
	savePointsOfUser,
}