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

	await Promise.all([
		savePoints(playerOne),
		savePoints(playerTwo),
	])

	res.status(202).send('OK')
}


module.exports = {
	renderForm,
	savePointsOfUser,
}