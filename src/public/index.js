const btns = document.querySelectorAll('.add-win-to-player')
const namePlayerOneLabel = document.querySelector('.name-player-1')
const namePlayerTwoLabel = document.querySelector('.name-player-2')
const scorePlayerOneLabel = document.getElementById('wins-player-1')
const scorePlayerTwoLabel = document.getElementById('wins-player-2')
const currentWinner = document.getElementById('current-winner')
const btnSaveGame = document.getElementById('saveGame')
const winDif = document.getElementById('win-dif')
const labelMsg = document.querySelector('.card-body')
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
	}, {
		playerId: playersId[1],
		score: scorePlayerTwoNumber ?? 0,
	}]

	const responseSaveGame = await fetch('https://arvolution-test.herokuapp.com/save-game', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(dataToSaveGame)
	})

	const responseSaveDataUsers = await fetch('https://arvolution-test.herokuapp.com/save-points-user', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(dataToSavePlayers)
	})

	if (responseSaveGame.ok && responseSaveDataUsers.ok) {
		labelMsg.innerHTML = `
			<div class="alert alert-dismissible alert-success">
				<strong>Well done!</strong> You have successfully saved the data.</br>
				Now you can go to  <a href="/dashboard" class="alert-link">dashboard</a> or you can create a <a href="/" class="alert-link">new game</a>
			</div>
		`
		btns.forEach(btn => {
			btn.setAttribute('disabled', true)
			btn.classList.replace('btn-outline-success', 'btn-secondary')
		})
		btnSaveGame.setAttribute('disabled', true)
		btnSaveGame.classList.replace('btn-success', 'btn-secondary')
	} else {
		labelMsg.innerHTML = `
			<div class="alert alert-dismissible alert-danger">
				<strong>Ooops!</strong> something was wrong.Try submitting again.
			</div>
		`
	}
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