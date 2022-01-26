const moviesContainer = document.getElementById("movies");
const searchBar = document.getElementById("search");

let items = [
  {
    "title": "Jaws",
    "img": "./img/jaws.jpg"
  },
  {
    "title": "Black Panther - MARVEL",
    "img": "./img/blackPanther.jpg"
  },
  {
    "title": "Grimsby",
    "img": "./img/grimsby.jpg"
  },
  {
    "title": "The Joker",
    "img": "./img/theJoker.jpg"
  },
  {
    "title": "Tenet",
    "img": "./img/tenet.jpg"
  },
  {
    "title": "Shrek",
    "img": "./img/shrek.png"
  },
  {
    "title": "Back To The Future",
    "img": "./img/backToTheFuture.jpg"
  },
  {
    "title": "Harry Potter - and the sorcerers stone",
    "img": "./img/harryPotterStone.png"
  },
  {
    "title": "THE HUNGER GAMES MOCKING JAY PART 1",
    "img": "./img/hungerGamesMockingJay.jpeg"
  },
  {
    "title": "Robin Hood",
    "img": "./img/robinHood.jpeg"
  },
  {
    "title": "Nobody",
    "img": "./img/noody.jpg"
  },
  {
    "title": "Once Upon A Time In Hollywood",
    "img": "./img/onceUponATimeInHollyWood.jpeg"
  },
  {
    "title": "Black Widow - MARVEL",
    "img": "./img/blackWidow.jpeg"
  },
  {
    "title": "Thor - the dark world - MARVEL",
    "img": "./img/thorTheDarkWorld.jpg"
  },
  {
    "title": "Blade Runner",
    "img": "./img/bladeRunner.jpg"
  },
  {
    "title": "Iron Man - MARVEL",
    "img": "./img/ironman.jpg"
  },
  {
    "title": "Spider Man HomeComing - MARVEL",
    "img": "./img/spiderManHomeComing.jpg"
  },
  {
    "title": "Scream",
    "img": "./img/scream.jpg"
  },
  {
    "title": "Spider Man No Way Home - MARVEL",
    "img": "./img/spiderManNoWayHome.jpg"
  },
  {
    "title": "the batman",
    "img": "./img/theBatman.jpg"
  },
  {
    "title": "don't look up",
    "img": "./img/dontLookUp.jpg"
  },
  {
    "title": "ghostbusters afterlife",
    "img": "./img/ghostBustersAfterlife.jpg"
  },
  {
    "title": "eternals - MARVEL",
    "img": "./img/eternalsMarvel.jpg"
  },
  {
    "title": "after life",
    "img": "./img/afterLife.jpg"
  },
  {
    "title": "the witcher",
    "img": "./img/theWitcher.jpg"
  },
  {
    "title": "the king's man",
    "img": "./img/theKingsMan.jpg"
  }
];

const populatePageWithMovies = (max=-1) => {
  max === -1 ? max = items.length : undefined;

  let divs = "";

  for (let i = 0; i < max; i++) {
    const item = items[i];

    divs += `
    <div class="movies_item">
      <div class="title">
        ${item.title}
      </div>
      <div class="img-div">
        <img src="${item.img}">
      </div>
    </div>
    `
  }

  moviesContainer.innerHTML = divs;
}

populatePageWithMovies();

const runOnSearch = (searchTerm) => {
  const results = items.filter(item => item.title.toLowerCase().includes(searchTerm));

  return results.length === 0 ? moviesContainer.innerHTML = "No Results Found" : populatePageWithCustomArray(results);
}

searchBar.addEventListener("input", (e) => {
  e.preventDefault();

  runOnSearch(searchBar.value)
})

const populatePageWithCustomArray = (array) => {
  let divs = "";

  for (let item of array) {
    divs += `
    <div class="movies_item">
      <div class="title">
        ${item.title}
      </div>
      <div class="img-div">
        <img src="${item.img}">
      </div>
    </div>
    `
  }

  moviesContainer.innerHTML = divs;
}