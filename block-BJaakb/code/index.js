// function fetch(url) {
//   return new Promise((resolve, reject) => {
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', url);
//     xhr.onload = function () {
//       setTimeout(() => {
//         resolve(JSON.parse(xhr.response));
//         // resolve('Me');
//       }, 5000);
//     };
//     xhr.onerror = function () {
//       setTimeout(() => {
//         reject('something went wrong');
//       }, 3000);
//     };
//     xhr.send();
//   });
// }
// fetch(`https://api.github.com/users`);

let allImages = document.querySelector('.allImages');
let input = document.querySelector('input');

function handleImage(event) {
  if (event.keyCode === 13) {
    allImages.innerHTML = '';
    function fetch(url) {
      let xhr = new XMLHttpRequest();
      // let url = `https://api.unsplash.com/search/photos/?query=${event.target.value}&client_id=PyPksXyG8aBNAVNpEk7cCM8uycMuuzBllmRX39o7E_M`;
      return new Promise((resolve, reject) => {
        xhr.open('GET', url);
        xhr.onload = function () {
          // let userData = JSON.parse(xhr.response);
          setTimeout(() => {
            resolve(JSON.parse(xhr.response));
            console.log('Successfully fetch Data');
          }, 3000);
        };

        xhr.onerror = function () {
          setTimeout(() => {
            reject('Something Went Wrong');
          }, 3000);
        };

        xhr.send();
        input.value = '';
      });
    }

    fetch(
      `https://api.unsplash.com/search/photos/?query=${event.target.value}&client_id=PyPksXyG8aBNAVNpEk7cCM8uycMuuzBllmRX39o7E_M`
    )
      .then((data) => {
        for (let i = 0; i < data.results.length; i++) {
          allImages.innerHTML += `<img src="${data.results[i].urls.small}"/>`;
        }
      })
      .catch((error) => {
        error('Check Your Internet Connection');
      });
  }
}
input.addEventListener('keyup', handleImage);
