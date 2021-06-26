let url = `https://www.anapioficeandfire.com/api/books`;
let unOrderList = document.querySelector('ul');
let showCharactorsBox = document.querySelector('.box');
let allboxes = document.querySelector('.boxes');
fetch(url)
  .then((res) => res.json())
  .then((books) => {
    console.log(books);
    createUI(books);
  })
  .catch((error) => error);

function createUI(data) {
  data.forEach((element) => {
    let list = document.createElement('li');
    list.classList.add('list');

    let name = document.createElement('h2');
    name.classList.add('name');
    name.innerHTML = element.name;

    let author = document.createElement('h3');
    author.classList.add('author');
    author.innerHTML = element.authors;

    let numberOfPages = document.createElement('p');
    numberOfPages.classList.add('numberOfPages');
    numberOfPages.innerHTML = `Number of Pages : ${element.numberOfPages}`;

    let publisher = document.createElement('p');
    publisher.classList.add('publisher');
    publisher.innerHTML = `Publisher : ${element.publisher}`;

    let country = document.createElement('p');
    country.classList.add('country');
    country.innerHTML = `Country : ${element.country}`;

    let released = document.createElement('p');
    released.classList.add('released');
    released.innerHTML = `Release Date : ${element.released}`;

    let showCharectors = document.createElement('button');
    showCharectors.classList.add('showCharactors');
    showCharectors.innerHTML = 'Show Charactors';
    let url = 'https://www.anapioficeandfire.com/api/characters';
    showCharectors.addEventListener('click', fetchingData);

    function fetchingData() {
      fetch(url)
        .then((res) => res.json())
        .then((char) => {
          //   console.log(char);
          displayUI(char);
        });
    }
    unOrderList.append(list);
    list.append(
      name,
      author,
      publisher,
      country,
      released,
      numberOfPages,
      showCharectors
    );
  });
}

function displayUI(charData) {
  charData.forEach((elem) => {
    // console.log(elem.books);
    let charDiv = document.createElement('li');
    charDiv.classList.add('charDiv');

    let cross = document.createElement('p');
    cross.innerHTML = '❌';
    cross.classList.add('cross');
    cross.style.cursor = 'pointer';
    cross.addEventListener('click', () => {
      showCharactorsBox.innerHTML = '';
    });

    let CharName = document.createElement('p');
    CharName.classList.add('charName');
    CharName.innerHTML = elem.name;

    let charGender = document.createElement('p');
    charGender.classList.add('charGender');
    charGender.innerHTML = elem.gender;

    let charAlias = document.createElement('p');
    charAlias.classList.add('charAlias');
    charAlias.innerHTML = elem.aliases;

    let charSeries = document.createElement('p');
    charSeries.classList.add('charSeries');
    charSeries.innerHTML = elem.tvSeries;

    console.log(CharName, charGender, charAlias, charSeries);
    showCharactorsBox.append(charDiv);
    showCharactorsBox.append(cross);
    // allboxes.prepend(cross);

    charDiv.append(CharName, charGender, charAlias, charSeries);
  });
}
