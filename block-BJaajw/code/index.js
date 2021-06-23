// let source = document.getElementById('source');
// function fetch(url) {
//   return new Promise((resolve, reject) => {
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', url);
//     // let newsData = JSON.parse(xhr.response);
//     xhr.onload = function () {
//       let newsData = resolve(JSON.parse(xhr.response));
//     };
//     xhr.onerror = function () {
//       reject('error');
//     };
//     xhr.send();
//   })
//     .then((newsData) => {
//       createUI(newsData);
//       console.log(newsData);
//     })
//     .catch((error) => console.log(error));
// }
// source.addEventListener('change', fetch);
// fetch(`https://api.spaceflightnewsapi.net/v3/articles?_limit=30`);

// let UnorderdList = document.querySelector('ul');
// function createUI(data, event) {
//   data.forEach((element, event) => {
//     let list = document.createElement('li');
//     list.classList.add('list');

//     let articleImage = document.createElement('img');
//     articleImage.classList.add('articleImage');
//     articleImage.src = element.imageUrl;

//     let titleNews = document.createElement('h2');
//     titleNews.classList.add('titleNews');
//     titleNews.innerHTML = element.title;

//     let news = document.createElement('p');
//     news.innerHTML = element.newsSite;
//     news.style.marginTop = '20px';

//     list.append(articleImage, titleNews, news);
//     UnorderdList.append(list);
//     console.log(element.newsSite);
//   });
// }

let url = `https://api.spaceflightnewsapi.net/v3/articles?_limit=30`;
let UnorderdList = document.querySelector('ul');
let allNews = [];
let isLoding = false;

function handleSpinner() {
    if (isLoding) {
        UnorderdList.innerHTML = `<div class = "donut"> </div>`
    }
}

function init() {
    isLoding = true;
    handleSpinner();
    fetch(url)
        .then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error(`Response is not OK!`)
            }   
    })
  .then((news) => {
    createUI(news);
    allNews = news;
    let allSites = Array.from(
      new Set(news.map((eachNews) => eachNews.newsSite))
    );
    console.log(allSites);
  }).catch((error) => {
      UnorderdList.innerHTML = error
  }).finally(navigator.onLine)
}
init();

function createUI(data) {
  UnorderdList.innerHTML = '';
  data.forEach((element) => {
    let list = document.createElement('li');
    list.classList.add('list');

    let articleImage = document.createElement('img');
    articleImage.classList.add('articleImage');
    articleImage.src = element.imageUrl;

    let dataDiv = document.createElement('div');
    dataDiv.classList.add('dataDiv');

    let NDTV = document.createElement('p');
    NDTV.innerHTML = element.newsSite;
    NDTV.classList.add('ndtv');

    let titleNews = document.createElement('h2');
    titleNews.classList.add('titleNews');
    titleNews.innerHTML = element.title;

    let readMore = document.createElement('button');
    readMore.classList.add('readMore');
    readMore.innerHTML = 'Read More';

    UnorderdList.append(list);
    list.append(articleImage, dataDiv);
    dataDiv.append(NDTV, titleNews, readMore);
  });
}

let source = document.getElementById('source');
source.addEventListener('change', (event) => {
  console.log(event.target.value);
  let fileterNews = allNews.filter(
    (news) => news.newsSite === event.target.value
  );
  if (event.target.value == '') {
    fileterNews = allNews;
  }

  createUI(fileterNews);
  console.log(fileterNews);
});

