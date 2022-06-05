const { workerData, parentPort } = require("node:worker_threads");
const { iterations, scriptPath } = workerData;

async function performTask() {
  let result;
  let error;
  delete require.cache[require.resolve(scriptPath)];
  const t1 = performance.now();

  try {
    result = await require(scriptPath);
  } catch (err) {
    error = err;
  }

  const t2 = performance.now();
  const elapsedTime = (t2 - t1) / 1000;
  parentPort.postMessage({ elapsedTime, result, error });
}

for (let i = 0; i < iterations; i++) {
  try {
    performTask();
  } catch (error) {
    console.error(error);
  }
}
