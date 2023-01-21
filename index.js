//https://www.omdbapi.com/?s=${searchterm}&page=1&apikey=8be51894
const searchBox = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const searchList = document.getElementById("search-list");
const resultGrid = document.getElementById("result-grid");

// searchBox.addEventListener("click", fi);
async function loadMovie(searchTerm) {
  const link = `https://www.omdbapi.com/?s=${searchTerm}&page=1&apikey=8be51894`;
  const res = await fetch(`${link}`);
  const data = await res.json();
  console.log(data);
  if (data.Response == "True") {
    console.log(data.Search);
    displaySearchList(data.Search);
  }
}

// searchButton.addEventListener("click", find);
//hide search list and show when we have a value
function findMovie() {
  let searchTerm = searchBox.value; //trim
  if (searchTerm.length > 0) {
    searchList.classList.remove("hide-search-list");
    loadMovie(searchTerm);
  } else {
    searchList.classList.add("hide-search-list");
  }
}

// console.log(loadMovie("seabiscuit"));

function displaySearchList(movies) {
  searchList.innerHTML = "";
  for (let i = 0; i < movies.length; i++) {
    let searchListItem = document.createElement("div");
    //console.log(searchListItem);
    searchListItem.dataset.id = movies[i].imdbID;
    searchListItem.classList.add("search-list-listitem");
    if (movies[i].Poster != "N/A") {
      moviePoster = movies[i].Poster;
    } else {
      moviePoster = "not found.png";
    }
    searchListItem.innerHTML = `
    <div class="search-item-thumbnail">
    <img
      src="${moviePoster}"
    />
  </div>
  <div class="search-item-info">
    <h3>${movies[i].Title}</h3>
    <p>${movies[i].Year}</p>
  </div>
    `;

    searchList.appendChild(searchListItem);
  }
  loadMovieResult();
}

function loadMovieResult() {
  const searchListMovies = searchList.querySelectorAll(".search-list-listitem");
  searchListMovies.forEach((movie) => {
    movie.addEventListener("click", async () => {
      console.log(movie.dataset.id);
      searchList.classList.add("hide-search-list");
      searchBox.value = "";
      const result = await fetch(
        `https://www.omdbapi.com/?i=${movie.dataset.id}&apikey=8be51894`
      );
    });
  });
}
// const url = `https://www.omdbapi.com/?s=${searchterm}&page=1&apikey=8be51894`;
// let movies = [];
// fetch(url)
// .then((end)=>end.json())
// .then((data)=>)
