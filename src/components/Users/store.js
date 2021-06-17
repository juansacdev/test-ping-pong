const User = require('../../database/models/user')

const getAllUsers = () => User.find()

const saveUser = async (userData) => {
	try {
		const userCreated = new User(userData)
		await userCreated.save()
		return userCreated
	} catch (error) {
		console.error(error)
	}
}

const savePoints = async (playerData) => {

	try {
		const { playerId } = playerData
		const userUpdated = await User.findByIdAndUpdate(playerId,
			{
				$set: {
					wins: playerData.score,
				},
			},
			{ new: true }
		)

		await userUpdated?.save()
	} catch (error) {
		console.log(error)
	}
}

module.exports = {
	saveUser,
	getAllUsers,
	savePoints,
}
