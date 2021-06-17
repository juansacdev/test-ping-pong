function setPointDif(scoreOne, scoreTwo) {
	if (typeof scoreOne === 'string' || typeof scoreTwo === 'string') {
		return false
	} else if (scoreOne < 0 || scoreTwo < 0 ) {
		return false
	} else if (scoreOne > scoreTwo) {
		return scoreOne - scoreTwo
	} else if (scoreOne < scoreTwo) {
		return scoreTwo - scoreOne
	} else if (scoreOne === scoreTwo) {
		return 0
	}
}

module.exports = setPointDif