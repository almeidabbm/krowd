const { Worker, isMainThread } = require("node:worker_threads");
const path = require("path");

function runWorkers(scriptPath, workers = 1, iterations = 1) {
  if (isMainThread) {
    const workerPromises = [];
    for (let i = 0; i < workers; i++) {
      workerPromises.push(
        new Promise((res, rej) => {
          const workerResults = [];
          const worker = new Worker(path.join(__dirname, "worker.js"), {
            workerData: { iterations, scriptPath },
          });

          worker.on("message", (result) => {
            workerResults.push(result);
          });

          worker.on("exit", () => {
            res(workerResults);
          });
        })
      );
    }

    return Promise.allSettled(workerPromises);
  }
}

module.exports = runWorkers;
