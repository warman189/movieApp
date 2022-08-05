const movieDescription = document.querySelectorAll(".movie_card_description");
const btnMovieWatch = document.querySelectorAll(".btn_movie_watch");

for (let i = 0; i < movieDescription.length; i++) {
  for (let j = 0; j < btnMovieWatch.length; j++) {
    movieDescription[i].addEventListener("mouseover", (_) => {
      btnMovieWatch[j].style.display = "";
    });
    movieDescription[i].addEventListener("mouseout", (_) => {
      btnMovieWatch[j].style.display = "none";
    });
  }
}