const { ArgumentParser } = require("argparse")

const array = (size, val) => Array(size).fill(val)
const choose = (choices) => choices.at(choices.length * Math.random())

const parser = new ArgumentParser({ description: "Generate a random string." })

parser.add_argument("size", { type: parseInt, nargs: "?" })
parser.add_argument("-u", { action: "store_true", dest: "upper" })
parser.add_argument("-l", { action: "store_true", dest: "lower" })
parser.add_argument("-n", { action: "store_true", dest: "numeric" })
parser.add_argument("-s", { action: "store_true", dest: "special" })

const args = parser.parse_args()

let { size } = args
if (size !== size) { // NaN check
	console.error("'size' argument is not a number")
	return
}

// size defaults to a random number between 12-30
size ??= Math.floor(19 * Math.random()) + 12

const strings = {
	"lower": "abcdefghijklmnopqrstuvwxyz",
	"upper": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	"numeric": "1234567890",
	"special": "!@#$%^&*(){}`~/;."
}

for ([k, v] of Object.entries(strings))
	strings[k] = v.split("")

const keys = Object.keys(strings)

const includedKeys = keys.some(k => args[k]) ? keys.filter(k => args[k]) : keys

const pool = includedKeys.map(k => strings[k]).reduce((a, b) => a.concat(b))

const result = array(size).map(() => choose(pool))
console.log(result.join(""))