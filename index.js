//https://www.omdbapi.com/?s=${searchterm}&page=1&apikey=8be51894
const searchBox = document.getElementById("search");
const searchButton = document.getElementById("search-button");
const searchList = document.getElementById("search-list");
const resultGrid = document.getElementById("result-grid");
// searchBox.addEventListener("click", fi);
// searchButton.addEventListener("click", find);
async function loadMovie(searchterm) {
  const link = `https://www.omdbapi.com/?s=${searchterm}&page=1&apikey=8be51894`;
  const res = await fetch(`${link}`);
  const data = await res.json();
  console.log(data);
  if (data.Response == "True") {
    console.log(data.Search);
    displaySearchList(data.Search);
  }
}
console.log(loadMovie("seabiscuit"));

function findMovie() {}
function displaySearchList(movies) {}
// const url = `https://www.omdbapi.com/?s=${searchterm}&page=1&apikey=8be51894`;
// let movies = [];
// fetch(url)
// .then((end)=>end.json())
// .then((data)=>)
