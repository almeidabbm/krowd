const { workerData } = require("node:worker_threads");
const { iterations, scriptPath } = workerData;

for (let i = 0; i < iterations; i++) {
  try {
    delete require.cache[require.resolve(scriptPath)];
    const result = require(scriptPath);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
