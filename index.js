const searchBox = document.getElementById("search");
const searchButton = document.getElementById("search-button");
const searchList = document.getElementById("search-list");
const resultGrid = document.getElementById("result-grid");
searchBox.addEventListener("click", fi);
searchButton.addEventListener("click", find);
async function loadMovie(searchterm) {
  const url = `https://www.omdbapi.com/?s=${searchterm}&page=1&apikey=8be51894`;
  const res = await fetch(`${url}`);
  const data = await res.json();
  if (data.Response == "True") displayMovieList(data.Search);
}
