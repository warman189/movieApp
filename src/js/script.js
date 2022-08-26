// *** Scroll for Header container ***

let headContainer = document.querySelector(".header_scroll");
let nextHeadBtn = document.querySelector(".head_scroll_next");

nextHeadBtn.onclick = function leftScroll() {
  prevBtn.style.display = "";
  headContainer.scrollBy({
    left: 1700,
    behavior: "smooth",
  });
};
// ***

// *** Scroll Function for main container ***
let mainContent = document.querySelector(".main_container");
let nextBtn = document.querySelector(".main_scroll_next");
let prevBtn = document.querySelector(".main_scroll_previous");

nextBtn.onclick = function leftScroll() {
  prevBtn.style.display = "";
  mainContent.scrollBy({
    left: 350,
    behavior: "smooth",
  });
};

prevBtn.onclick = function rightScroll() {
  mainContent.scrollBy({
    left: -350,
    behavior: "smooth",
  });
};
// *** ***
