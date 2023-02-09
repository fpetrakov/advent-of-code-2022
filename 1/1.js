const fs = require('node:fs')
const path = require('node:path')

const sums = fs
	.readFileSync(path.resolve(__dirname, '1.txt'))
	.toString()
	.split('\n\n')
	.map(line => line.split('\n').map(Number))
	.map(nums => nums.reduce((a, b) => a + b))

const result = Math.max(...sums)

console.log(result)
