# krowd

`krowd` is a CLI built in NodeJS with the purpose of making our lives easier when there is a need for running a quick load test or to compare the time it takes to run similar scripts.
It is a fairly simple project and currently only supports running NodeJS scripts.

## Installation

### Install krowd as a CLI

```bash
npm i -g krowd
```

### Install krowd as a part of your project

```bash
npm i krowd
```

## Usage

### CLI

The `krowd` CLI accepts 3 options:

- `-f, --file` - path to the file relative to where you are calling the command
- `-w, --workers` - number of workers that will be running
- `-i, --iterations` - number of iterations which worker will run

To display the help for `krowd` run

```bash
krowd -h
```

To run a script:

```bash
krowd -f myScript.js -w 2 -i 5
```

### Using krowd in your project

`krowd` exposes a function that will return a promise.

When the promise resolves it will contain the result of all workers and iterations.

```javascript
const krowd = require("krowd");

krowd("myScript.js", 2, 5).then((result) => {
  console.log(result);
});
```

When `krowd` runs your script, each iteration of each worker will have a result.

That result is an object which contains the `elapsedTime` in seconds of that iteration and `result` which will be what the script exports in the end.

### Example script

```javascript
function task() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Hello World");
    }, 2000);
  });
}

module.exports = task();
```

### Example result

```javascript
[
  [
    { elapsedTime: 2.0033339180001057, result: "Hello World" },
    { elapsedTime: 2.002644423999824, result: "Hello World" },
  ],
];
```
