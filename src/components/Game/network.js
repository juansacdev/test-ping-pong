const {
	newGame,
	saveGame,
	dashboard,
} = require('./controller')
const { Router } = require('express')
const router = Router()

router.post('/new-game', newGame)
router.post('/save-game', saveGame)
router.get('/dashboard', dashboard)

module.exports = router
