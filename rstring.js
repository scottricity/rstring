const parser = require("./parser")

const array = (size, val) => Array(size).fill(val);
const choose = (choices) => choices.at(choices.length * Math.random());

const args = parser.parse_args();

let { size } = args;

// NaN check
if (size !== size) {
  console.error("'size' argument is not a number");
  return;
}

// size defaults to a random number between 12-30
size ??= Math.floor(19 * Math.random()) + 12;

const pools = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numeric: "1234567890",
  special: "!@#$%^&*(){}`~/;.",
};

for ([k, v] of Object.entries(pools)) pools[k] = v.split("");

const keys = Object.keys(pools);

const includedKeys = keys.some((k) => args[k])
  ? keys.filter((k) => args[k])
  : keys;

const pool = includedKeys.flatMap((k) => pools[k]);

const result = array(size).map(() => choose(pool));
console.log(result.join(""));
