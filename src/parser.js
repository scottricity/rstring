const { ArgumentParser } = require("argparse");

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

for (const [key, helpString] of Object.entries(helpStrings)) {
  parser.add_argument(`-${key[0]}`, {
    action: "store_true",
    dest: key,
    help: `include ${helpString}`,
  });
}

module.exports = parser;
