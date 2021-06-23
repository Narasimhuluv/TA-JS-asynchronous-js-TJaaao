let source = document.getElementById('source');
function fetch(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    // let newsData = JSON.parse(xhr.response);
    xhr.onload = function () {
      let newsData = resolve(JSON.parse(xhr.response));
    };
    xhr.onerror = function () {
      reject('error');
    };
    xhr.send();
  })
    .then((newsData) => {
      createUI(newsData);
      console.log(newsData);
    })
    .catch((error) => console.log(error));
}
source.addEventListener('change', fetch);
fetch(`https://api.spaceflightnewsapi.net/v3/articles?_limit=30`);

let UnorderdList = document.querySelector('ul');
function createUI(data, event) {
  data.forEach((element, event) => {
    let list = document.createElement('li');
    list.classList.add('list');

    let articleImage = document.createElement('img');
    articleImage.classList.add('articleImage');
    articleImage.src = element.imageUrl;

    let titleNews = document.createElement('h2');
    titleNews.classList.add('titleNews');
    titleNews.innerHTML = element.title;

    news = document.createElement('p');
    news.innerHTML = element.newsSite;
    news.style.marginTop = '20px';

    list.append(articleImage, titleNews, news);
    UnorderdList.append(list);
    console.log(element.newsSite);
  });
}

// function fetch(url) {
//   let xhr = new XMLHttpRequest();
//   xhr.open('GET', url);
//   xhr.onload = function () {
//     let dataNews = JSON.parse(xhr.response);
//     console.log(dataNews);
//   };
//   xhr.send();
// }
// fetch(`https://api.spaceflightnewsapi.net/v3/articles?_limit=30`);
