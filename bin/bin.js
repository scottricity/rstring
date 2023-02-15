let strings = {
	lower: "abcdefghijklmnopqrstuvwxyz",
	upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	numeric: "1234567890",
	special: "!@#$%^&*(){}`~/;.",
	all: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*(){}`~/;."
}

class Pool {
	constructor(){
		this.pool = []
	}

	/**
	 * 
	 * @param {string} obj 
	 */
	add (obj){
		this.pool.push(obj)
		return this
	}

	random (len) {
		let returner = [];
		function randomSection(array){
			return array[Math.floor(Math.random() * array.filter(e => typeof e !== "undefined").length)]
		}

		function randomElement(array) {
			return array[Math.floor(Math.random() * array.length)]
		}

		for (let i = 0; i < len; i++) {
			returner.push(randomElement(randomSection(this.pool)))
		}
		return returner.join("")
	}
}

let d = new Pool()
let options = process.argv

function op(s){
	return Object.values(options).includes(s)
}

function clamp(x,min,max) {
	if (x < min) x = min
	if (x > max) x = max
	return x
}
let leng = clamp(Math.round(Math.random() * 100), 12, 30)
if (options.length == 2) return console.log(d.add(strings.all).random(clamp(Math.round(Math.random() * 100), 12, 30)))
if (parseInt(options[2])){
	let cLen = parseInt(options[2])
	if (cLen < 5 || cLen > 250) return console.error("String length must be between 5 and 250");
	leng = cLen
}
if (op('-u')) d.add(strings.upper)
if (op('-l')) d.add(strings.lower)
if (op('-n')) d.add(strings.numeric)
if (op('-s')) d.add(strings.special)
console.log(d.random(leng))
