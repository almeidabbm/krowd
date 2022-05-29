const { program } = require("commander");
const path = require("path");
const { parseInt } = require("./src/custom-parsers");
const runWorkers = require("./src/run-workers");

program
  .requiredOption("-f, --file <string>", "Path of the script to run")
  .option("-w, --workers <number>", "Number of workers to run", parseInt)
  .option(
    "-i, --iterations <number>",
    "Number of iteration to be run by each worker",
    parseInt
  );

program.parse();

const opts = program.opts();

runWorkers(
  path.join(__dirname, opts.file),
  Number(opts.workers),
  Number(opts.iterations)
);
