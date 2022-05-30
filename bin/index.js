#! /usr/bin/env node

const { program } = require("commander");
const path = require("path");
const { parseInt } = require("../src/custom-parsers");
const runWorkers = require("../src/krowd");
const pkg = require("../package.json");

program
  .version(pkg.version)
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
  path.join(process.cwd(), opts.file),
  Number(opts.workers),
  Number(opts.iterations)
).then((result) => {
  console.log(result.map((wr) => wr.value));
});
