const { ArgumentParser } = require("argparse");

const array = (size, val) => Array(size).fill(val);
const choose = (choices) => choices.at(choices.length * Math.random());

const pools = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numeric: "1234567890",
  special: "!@#$%^&*(){}`~/;.",
};

const helpStrings = {
  lower: "lowercase",
  upper: "uppercase",
  numeric: "numbers",
  special: "special characters",
};

const parser = new ArgumentParser({
  prog: "rstring",
  description: "Generate a random string.",
});

parser.add_argument("size", {
  type: parseInt,
  nargs: "?",
  help: "number of characters to output; defaults to 12-30 chars",
});

for (let [key, helpName] of Object.entries(helpStrings)) {
  parser.add_argument(`-${key[0]}`, {
    action: "store_true",
    dest: key,
    help: `include ${helpName}`,
  });
}

const args = parser.parse_args();

let { size } = args;

// NaN check
if (size !== size) {
  console.error("'size' argument is not a number");
  return;
}

// size defaults to a random number between 12-30
size ??= Math.floor(19 * Math.random()) + 12;

for ([k, v] of Object.entries(pools)) pools[k] = v.split("");

const keys = Object.keys(pools);

const includedKeys = keys.some((k) => args[k])
  ? keys.filter((k) => args[k])
  : keys;

const pool = includedKeys.flatMap((k) => pools[k]);

const result = array(size).map(() => choose(pool));
console.log(result.join(""));
