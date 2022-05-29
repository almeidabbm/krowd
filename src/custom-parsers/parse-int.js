const { InvalidArgumentError } = require("commander");

function parseInt(value) {
  const int = Number(value);

  if (isNaN(int)) {
    throw new InvalidArgumentError("Not a number");
  }

  return int;
}

module.exports = parseInt;
