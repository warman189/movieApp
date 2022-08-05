import("./script.js");

// const API_KEY = "de46e108-2055-4f45-a5c7-bc84dd7eb81b";
// const API_URL_POPULAR =
//   "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1";
// const API_URL_SEARCH =
//   "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";

// getMovies(API_URL_POPULAR);

// async function getMovies(url) {
//   const resp = await fetch(url, {
//     headers: {
//       "Content-Type": "application/json",
//       "X-API-KEY": API_KEY,
//     },
//   });
//   const respData = await resp.json();
//   showMovies(respData);
// }

// function showMovies(data) {
//   const movieEl = document.querySelector(".new__rel__content");

//   data.films.forEach((movie) => {
//     const moviesEl = document.createElement("div");
//     moviesEl.classList.add("movie__cover");
//     moviesEl.innerHTML = `<img src="${movie.posterUrlPreview}" class="movie__cover" alt="${movie.nameRu}">`;
//     movieEl.appendChild(moviesEl);
//   });
// }
