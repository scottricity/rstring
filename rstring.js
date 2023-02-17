const { ArgumentParser } = require("argparse")

const array = (size, val) => Array(size).fill(val)
const choose = (choices) => choices.at(choices.length * Math.random())

const parser = new ArgumentParser({ prog: "rstring", description: "Generate a random string." })

parser.add_argument("size", { type: parseInt, nargs: "?", help: "number of characters to output; defaults to 12-30 chars" })
parser.add_argument("-u", { action: "store_true", dest: "upper", help: "include uppercase" })
parser.add_argument("-l", { action: "store_true", dest: "lower", help: "include lowercase" })
parser.add_argument("-n", { action: "store_true", dest: "numeric", help: "include numbers" })
parser.add_argument("-s", { action: "store_true", dest: "special", help: "include special characters" })

const args = parser.parse_args()

let { size } = args
if (size !== size) { // NaN check
	console.error("'size' argument is not a number")
	return
}

// size defaults to a random number between 12-30
size ??= Math.floor(19 * Math.random()) + 12

const strings = {
	lower: "abcdefghijklmnopqrstuvwxyz",
	upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	numeric: "1234567890",
	special: "!@#$%^&*(){}`~/;."
}

for ([k, v] of Object.entries(strings))
	strings[k] = v.split("")

const keys = Object.keys(strings)

const includedKeys = keys.some(k => args[k]) ? keys.filter(k => args[k]) : keys

const pool = includedKeys.flatMap(k => strings[k])

const result = array(size).map(() => choose(pool))
console.log(result.join(""))