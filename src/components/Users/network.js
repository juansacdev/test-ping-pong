const {
	renderForm,
	savePointsOfUser,
} = require('./controller')
const { Router } = require('express')
const router = Router()

router.get('/', renderForm)
router.post('/save-points-user', savePointsOfUser)

module.exports = router
