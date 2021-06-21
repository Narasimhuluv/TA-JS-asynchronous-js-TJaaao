function fetch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise Resolved');
    }, 1000);
  }).then((value) => value);
}

function fetch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise Resolved');
    }, 1000);
    setTimeout(() => {
      reject('Rejected Promise');
    }, 1000);
  })
    .then((value) => value)
    .catch((error) => error);
}

function fetch() {
  return new Promise((resolve, reject) => {
    resolve('Promise Resolved');
    reject('Rejected Promise');
  })
    .then((value) => value)
    .catch((error) => error)
    .finally((final) => 'Promise Settled');
}

function wait(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise Resolved');
    }, time);
  })
    .then((value) => value)
    .catch((error) => error('Promise Rejected'));
}
wait(2000);

function fetch() {
  return new Promise((resolve, reject) => {
    resolve(21);
  })
    .then((value) => console.log(value + 10))
    .then((value) => console.log(value + 100))
    .catch((value) => {
      if (value > 100) {
        console.log('Error Message');
      }
    });
}
fetch();

function fetch() {
  return new Promise((resolve, reject) => {
    resolve(['A']);
  })
    .then((value) => {
      concat(value + 'B');
    })
    .then(() => {
      return { 0: 'A', 1: 'B' };
    })
    .then((value) => console.log(value));
}
fetch();

let first = new Promise((resolve) => {
  resolve(2);
}).then((value) => value);

function fetch() {
  return new Promise((resolve, reject) => {
    resolve('John');
  })
    .then(() => resolve('Arya'))
    .then(() =>
      setTimeout(() => {
        resolve('Bran');
      }, 2000)
    )
    .then((value) => console.log(value));
}
