- Create four promises that resolve after 1, 2, 3 and 4 seconds with a random value. Using `Promise.all` log the value of each promise that it resolved with.

```js
let one = Promise.resolve(1);
let two = Promise.resolve(2);
let three = Promise.resolve(3);
let four = Promise.resolve(4);
let five = Promise.resolve(5);

let all = Promise.all([one, two, three, four, five])
  .then((res) => console.log(res))
  .catch((error) => console.log(error));
```

- Create a list of 5 Github usernames in an array and using `Promise.all` get access to the data of each user from GitHub API. Log the number of followers of each user.

```js
let usernames = [
  'getify',
  'gaearon',
  'AArnott',
  'subtleGradent',
  'piranha',
  'sophiebits',
];

let usernameData = Promise.all(
  usernames.map((user) =>
    fetch(`https://api.github.com/users/${user}`).then((res) => res.json())
  )
).then((users) => console.log(users));
```

- Use `Promise.race` to see which API resolves faster from the given list of URLs. Log the object you get from the promise that is resolved faster.

  - https://random.dog/woof.json
  - https://aws.random.cat/meow

- Use `Promise.allSettled` to log the value of each promise from the given list of promises. And also check if `Promise.all` works with `one`, `two` and `three` or not

```js
const one = new Promise((resolve, reject) =>
  setTimeout(() => resolve('Arya'), 1000)
);
const two = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error('Whoops!')), 2000)
);
const three = new Promise((resolve, reject) =>
  setTimeout(() => resolve('John'), 3000)
);'

// output
// Arya
// error Whoops!
// John
```

- What will be the output of the following code snippet? How much time will it take for the promise to resolve?

```js
Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('Arya'), 1000);
  }),
  'Sam',
  { name: 'John' },
]).then(console.log);

// output

// after one sec
['Arya', 'Sam', { name: 'John' }];
```
