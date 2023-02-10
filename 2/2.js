const fs = require('node:fs')
const path = require('node:path')

const getTotalScore = ([opponent, player]) => {
	const shapeScore = { X: 1, Y: 2, Z: 3 }
	const outcomeScore = {
		A: { X: 3, Y: 6, Z: 0 },
		B: { X: 0, Y: 3, Z: 6 },
		C: { X: 6, Y: 0, Z: 3 },
	}

	return shapeScore[player] + outcomeScore[opponent][player]
}

const result = fs
	.readFileSync(path.resolve(__dirname, '2.txt'))
	.toString()
	.split('\n')
	.map(round => round.split(' '))
	.map(getTotalScore)
	.reduce((a, b) => a + b)

console.log(result)
