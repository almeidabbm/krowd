const { program } = require("commander");
const path = require("path");
const runWorkers = require("./src/run-workers");

program.requiredOption("-f, --file <filepath>");

program.parse();

const opts = program.opts();

console.log(opts);

runWorkers(path.join(__dirname, opts.file));
