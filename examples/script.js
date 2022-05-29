function task() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("2");
    }, 2000);
  });
}

module.exports = task();
