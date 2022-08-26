import("./script.js");

const API_KEY = "de46e108-2055-4f45-a5c7-bc84dd7eb81b";
const API_URL_POPULAR =
  "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1";
const API_URL_SEARCH =
  "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";

// *** Async function for movies ***

getMovies(API_URL_POPULAR);

async function getMovies(url) {
  const resp = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": API_KEY,
    },
  });
  const respData = await resp.json();
  showMovies(respData);
}

function showMovies(data) {
  const movieEl = document.querySelector(".main_inner");

  data.films.forEach((movie) => {
    const moviesEl = document.createElement("div");
    moviesEl.classList.add("main_movie_card");
    moviesEl.innerHTML = `<div class="movie_card_description">
      <div class="movie_description_tag">
        <p>${movie.genres.map((genre) => ` ${genre.genre}`)}</p>
      </div>
      <div class="movie_description_rating">${movie.rating}</div>
      <h1 class="movie_description_title">${movie.nameRu}</h1>
      <a href="#" class="btn_movie_watch">Watch now ❯</a
      >
    </div>
    <img
      src="${movie.posterUrlPreview}"
      alt="${movie.nameRu}"
      class="movie_cover_logo"
    />`;
    movieEl.appendChild(moviesEl);
  });
}
