function task() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Hello World");
    }, 2000);
  });
}

module.exports = task();
