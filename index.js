const path = require("path");
const { Worker, isMainThread } = require("node:worker_threads");

function runWorkers(scriptPath, workers = 1, iterations = 1) {
  if (isMainThread) {
    for (let i = 0; i < workers; i++) {
      new Worker(__filename);
    }
  } else {
    for (let i = 0; i < iterations; i++) {
      try {
        delete require.cache[require.resolve(scriptPath)];
        require(scriptPath);
      } catch (error) {
        console.log(error);
      }
    }
  }
}

runWorkers(path.join(__dirname, "./something.js"), 2, 10);
