// let input = document.querySelector('input');
// let image = document.querySelector('img');
// let display = document.querySelector('.display');
// let followersDisplay = document.querySelector('.followersDisplay');
// function displayUI(arg, followers) {
//   console.log(arg, followers);
//   let mainAvatar = document.createElement('img');
//   mainAvatar.src = arg.avatar_url;
//   display.append(mainAvatar);

//   for (let i = 0; i <= 4; i++) {
//     let followersAvatar = document.createElement('img');
//     followersAvatar.src = followers[i].avatar_url;
//     followersDisplay.append(followersAvatar);
//   }
// }

// function handleChange(event) {
//   event.preventDefault();
//   if (event.keyCode === 13) {
//     let xhr = new XMLHttpRequest();
//     let url = `https://api.github.com/users/${event.target.value}`;
//     xhr.open('GET', url);
//     xhr.onload = function () {
//       let userData = JSON.parse(xhr.response);
//       followersData(userData);
//     };
//     xhr.send();
//     event.target.value = '';
//   }
// }
// input.addEventListener('keyup', handleChange);

// function followersData(arg) {
//   let xhr = new XMLHttpRequest();
//   let url = arg.followers_url;
//   console.log(arg.followers_url);
//   xhr.open('GET', url);
//   xhr.onload = function () {
//     let followers = JSON.parse(xhr.response);
//     console.log(followers);
//     displayUI(arg, followers);
//   };
//   xhr.send();
// }

let input = document.querySelector('input');
function handleChange(event) {
  if (event.keyCode === 13) {
    let xhr = new XMLHttpRequest();
    let url = `https://api.github.com/users/${event.target.value}`;
    xhr.open('GET', url);
    xhr.onload = function () {
      let userData = JSON.parse(xhr.response);
      console.log(userData);

      followersData(userData);
    };
    xhr.send();
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
    console.log(followers);
    // followingData(followers);
    createUI(follower, followers);
  };
  xhr.send();
}

function followingData(following) {
  let xhr = new XMLHttpRequest();
  let url = following.following_url;
  xhr.open('GET', url);
  xhr.onload = function () {
    let follow = JSON.parse(xhr.response);
    console.log(follow);
    createUI2(follow);
  };
  xhr.send();
}

let mainImage = document.querySelector('.mainImage');
let followersImages = document.querySelector('.followersImages');
let followingImage = document.querySelector('.followingImages');

function createUI(mainImg, followersImg) {
  let mainAvatar = document.createElement('img');
  mainAvatar.src = mainImg.avatar_url;
  mainImage.append(mainAvatar);

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
    catimage.src = catData.url;
    console.log(catData);
  };
  xhr.send();
}

button.addEventListener('click', catHandle);
