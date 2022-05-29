const { Worker, isMainThread } = require("node:worker_threads");

function runWorkers(scriptPath, workers = 1, iterations = 1) {
  if (isMainThread) {
    for (let i = 0; i < workers; i++) {
      new Worker("./worker.js", { workerData: { iterations, scriptPath } });
    }
  }
}

module.exports = runWorkers;
