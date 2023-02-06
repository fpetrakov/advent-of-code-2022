const fs = require('node:fs')
const path = require('node:path')

let result = 0

fs.readFileSync(path.resolve(__dirname, '1.txt'))
	.toString()
	.split('\n')
	.reduce((acc, el) => {
		if (el === '') {
			result = Math.max(result, acc)
			return 0
		}

		return (acc += +el)
	}, 0)

console.log(result)
