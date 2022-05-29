const { Worker, isMainThread } = require("node:worker_threads");
const path = require("path");

function runWorkers(scriptPath, workers = 1, iterations = 1) {
  if (isMainThread) {
    for (let i = 0; i < workers; i++) {
      new Worker(path.join(__dirname, "worker.js"), {
        workerData: { iterations, scriptPath },
      });
    }
  }
}

module.exports = runWorkers;
