let input = document.querySelector('input');
function handleChange(event) {
  followersData.innerHTML = '';
  if (event.keyCode === 13) {
    let xhr = new XMLHttpRequest();
    let url = `https://api.github.com/users/${event.target.value}`;
    xhr.open('GET', url);
    xhr.onload = function () {
      let userData = JSON.parse(xhr.response);
      // console.log(userData);

      followersData(userData);
    };
    xhr.send();
    event.target.value = '';
  }
}
input.addEventListener('keyup', handleChange);

function followersData(follower) {
  let xhr = new XMLHttpRequest();
  let url = follower.followers_url;
  //   let url = `https://api.github.com/users/nnnkit/followers`;
  console.log(url);
  xhr.open('GET', url);
  xhr.onload = function () {
    let followers = JSON.parse(xhr.response);
    // console.log(followers);
    // followingData(followers);
    createUI(follower, followers);
  };
  xhr.send();
}

// function followingData(following) {
//   let xhr = new XMLHttpRequest();
//   let url = following.following_url;
//   xhr.open('GET', url);
//   xhr.onload = function () {
//     let follow = JSON.parse(xhr.response);
//     console.log(follow);
//     createUI2(follow);
//   };
//   xhr.send();
// }

function followingData() {
  let xhr = new XMLHttpRequest();
  let url = ` https://api.github.com/users/${username}/following`;
  console.log(url);
  xhr.open('GET', url);
  xhr.onload = function () {
    let following = JSON.parse(xhr.response);
    console.log(following);
    createUI2(following);
  };

  xhr.onerror = function () {
    let errro = JSON.parse(xhr.response);
    console.log(errro);
  };
  xhr.send();
}

let mainImage = document.querySelector('.mainImage');
let followersImages = document.querySelector('.followersImages');
let followingImage = document.querySelector('.followingImages');

function createUI(mainImg, followersImg) {
  let mainAvatar = document.createElement('img');
  mainAvatar.src = mainImg.avatar_url;
  let name = document.createElement('h2');
  name.innerHTML = mainImg.name;

  let Login = document.createElement('p');
  Login.innerHTML = mainImg.login;
  mainImage.append(mainAvatar, name, Login);

  for (let i = 0; i <= 4; i++) {
    let followerImage = document.createElement('img');
    followerImage.src = followersImg[i].avatar_url;
    followersImages.append(followerImage);
  }
}

function createUI2(following) {
  for (let i = 0; i <= 4; i++) {
    let followingImage = document.createElement('img');
    followingImage.src = following[i].avatar_url;
    followingImage.append(followingImage);
  }
}

// -------------------------------------------------------------

let button = document.querySelector('.btn');

function catHandle() {
  let catimage = document.querySelector('.img');
  let xhr = new XMLHttpRequest();
  let url = `https://api.thecatapi.com/v1/images/search?limit=1&size=full`;
  xhr.open('GET', url);
  xhr.onload = function () {
    let catData = JSON.parse(xhr.response);
    catimage.src = catData[0].url;
    console.log(catData);
  };
  xhr.send();
}

button.addEventListener('click', catHandle);

// let button = document.querySelector('.btn');
// let catimage = document.querySelector('.img');

// function handleClick() {
//   fetch(
//     `https://api.thecatapi.com/v1/images/search?limit=1&size=full`,
//     function (catInfo) {
//       catimage.src = catInfo[0].url;
//     }
//   );
// }
// button.addEventListener('click', handleClick);
