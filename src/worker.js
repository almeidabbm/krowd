const { workerData } = require("node:worker_threads");
const { iterations, scriptPath } = workerData;

for (let i = 0; i < iterations; i++) {
  try {
    console.log(scriptPath);
    delete require.cache[require.resolve(scriptPath)];
    require(scriptPath);
  } catch (error) {
    console.log(error);
  }
}
