// c5L7SqJ1km1d5FGEB3BUdScmkCzCs6hGWNDgr_ZWDxM;
// https://api.unsplash.com/photos/random
// https://api.unsplash.com/photos/random/?client_id=c5L7SqJ1km1d5FGEB3BUdScmkCzCs6hGWNDgr_ZWDxM;

// function unsplash() {
//   let xhr = new XMLHttpRequest();
//   let url = `https://api.unsplash.com/photos/?client_id=c5L7SqJ1km1d5FGEB3BUdScmkCzCs6hGWNDgr_ZWDxM`;
//   xhr.open('GET', url);
//   xhr.onload = function () {
//     let unsplashData = JSON.parse(xhr.response);
//     for (let i = 0; i < unsplashData.length; i++) {
//       let image = document.createElement('img');
//       image.src = unsplashData[i].urls.small;
//       console.log(unsplashData[i]);
//       allImages.append(image);
//     }
//   };
//   xhr.send();
// }
// unsplash();
// let input = document.querySelector('input');
// function unsplash(event) {
//   if (event.keyCode === 13) {
//     let xhr = new XMLHttpRequest();
//     let url = `https://api.unsplash.com/photos/?query=${event.target.value}&client_id=c5L7SqJ1km1d5FGEB3BUdScmkCzCs6hGWNDgr_ZWDxM`;
//     xhr.open('GET', url);
//     xhr.onload = function () {
//       let unsplashData = JSON.parse(xhr.response);
//       console.log(unsplashData);
//       for (let i = 0; i < unsplashData.length; i++) {
//         let image = document.createElement('img');
//         image.src = unsplashData[i].urls.small;
//         console.log(unsplashData[i]);
//         allImages.append(image);
//         // display.innerHTML += `<img src="${unsplashData.results[i].urls.small}" alt="${userData.results[i].alt_description}"/>`;
//       }
//     };
//     xhr.send();
//   }
// }
// input.addEventListener('keyup', unsplash);
let allImages = document.querySelector('.allImages');
let input = document.querySelector('input');

function handleImage(event) {
  if (event.keyCode === 13) {
    allImages.innerHTML = '';
    let xhr = new XMLHttpRequest();
    let url = `https://api.unsplash.com/search/photos/?query=${event.target.value}&client_id=PyPksXyG8aBNAVNpEk7cCM8uycMuuzBllmRX39o7E_M`;
    xhr.open('GET', url);
    xhr.onload = function () {
      let userData = JSON.parse(xhr.response);

      for (let i = 0; i < userData.results.length; i++) {
        allImages.innerHTML += `<img src="${userData.results[i].urls.small}"/>`;
      }
    };
    xhr.send();
    input.value = '';
  }
}

input.addEventListener('keyup', handleImage);
