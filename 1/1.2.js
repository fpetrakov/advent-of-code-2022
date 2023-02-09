const fs = require('node:fs')
const path = require('node:path')

const result = fs
	.readFileSync(path.resolve(__dirname, '1.txt'))
	.toString()
	.split('\n\n')
	.map(line => line.split('\n').map(Number))
	.map(nums => nums.reduce((a, b) => a + b))
	.sort((a, b) => b - a)
	.slice(0, 3)
	.reduce((a, b) => a + b)

console.log(result)
