const parser = require("./parser");

const array = (size, val) => Array(size).fill(val);
const choose = (choices) => choices.at(choices.length * Math.random());

const args = parser.parse_args();

if (Number.isNaN(args.size)) {
  console.error("'size' argument is not a number");
  return;
}

// size defaults to a random number between 12-30
const size = args.size ?? Math.floor(19 * Math.random()) + 12;

const subPools = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numeric: "1234567890",
  special: "!@#$%^&\\*(){}`~/;.",
};

const keys = Object.keys(subPools);

const includedKeys = keys.some((k) => args[k])
  ? keys.filter((k) => args[k])
  : keys;

const pool = includedKeys.map((k) => subPools[k]).join("");

const result = array(size).map(() => choose(pool));
console.log(result.join(""));
