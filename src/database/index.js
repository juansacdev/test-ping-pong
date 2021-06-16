const { dbUri } = require('../config')
const { connect } = require('mongoose')

;(async () => {
	try {
		const db = await connect(dbUri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
			useCreateIndex: true,
		})
		console.log(`Database: '${db.connection.name}' has been connected successfully!`)

	} catch (error) {
		console.error(error)
	}
})()
