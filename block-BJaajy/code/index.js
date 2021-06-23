let one = Promise.resolve(1);
let two = Promise.resolve(2);
let three = Promise.resolve(3);
let four = Promise.resolve(4);
let five = Promise.resolve(5);

let all = Promise.all([one, two, three, four, five])
  .then((res) => console.log(res))
  .catch((error) => console.log(error));

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
