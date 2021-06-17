const btns = document.querySelectorAll('.add-win-to-player')
const namePlayerOneLabel = document.querySelector('.name-player-1')
const namePlayerTwoLabel = document.querySelector('.name-player-2')
const scorePlayerOneLabel = document.getElementById('wins-player-1')
const scorePlayerTwoLabel = document.getElementById('wins-player-2')
const currentWinner = document.getElementById('current-winner')
const btnSaveGame = document.getElementById('saveGame')
const winDif = document.getElementById('win-dif')
let scorePlayerOneNumber
let scorePlayerTwoNumber
let dif
let winnerLabel
let winnerId

btns.forEach(btn => btn.addEventListener('click', (e) => {
	const btnId = e.target.dataset.id
	const scorePlayerOneId = scorePlayerOneLabel.dataset.id

	scorePlayerOneNumber = parseInt(scorePlayerOneLabel.innerText)
	scorePlayerTwoNumber = parseInt(scorePlayerTwoLabel.innerText)

	if (scorePlayerOneId === btnId) {
		scorePlayerOneLabel.innerText = ++scorePlayerOneNumber
	} else {
		scorePlayerTwoLabel.innerText = ++scorePlayerTwoNumber
	}

	setWinner(scorePlayerOneNumber, scorePlayerTwoNumber)
	setPointsDif(scorePlayerOneNumber, scorePlayerTwoNumber)
}))

btnSaveGame?.addEventListener('click', async () => {
	const playersId = []

	document.querySelectorAll('div.info-players').forEach(item => playersId.push(item.dataset.id))

	const dataToSaveGame = {
		players: playersId,
		winner: winnerId,
		point_diference: dif ?? 0
	}

	const dataToSavePlayers = [{
		playerId: playersId[0],
		score: scorePlayerOneNumber ?? 0,
	},{
		playerId: playersId[1],
		score: scorePlayerTwoNumber ?? 0,
	}]

	await fetch('http://localhost:3000/save-game', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(dataToSaveGame)
	})

	await fetch('http://localhost:3000/save-points-user', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(dataToSavePlayers)
	})

})

const setPointsDif = (scorePlayerOne, scorePlayerTwo) => {
	if (scorePlayerOne > scorePlayerTwo) {
		dif = scorePlayerOne - scorePlayerTwo
	} else if (scorePlayerOne < scorePlayerTwo) {
		dif = scorePlayerTwo - scorePlayerOne
	} else {
		dif = 0
	}

	winDif.innerText = dif
}

const setWinner = (scorePlayerOne, scorePlayerTwo) => {
	if (scorePlayerOne > scorePlayerTwo) {
		winnerLabel = namePlayerOneLabel.innerText
		winnerId = namePlayerOneLabel.dataset.id
	} else if (scorePlayerOne < scorePlayerTwo) {
		winnerLabel = namePlayerTwoLabel.innerText
		winnerId = namePlayerTwoLabel.dataset.id
	} else {
		winnerLabel = '¡Empate!'
		winnerId = null
	}

	currentWinner.innerText = winnerLabel
}