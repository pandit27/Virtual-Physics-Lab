// variable declaration
const home_nav = document.querySelector(".home-nav");
const circuit_nav = document.querySelector(".circuit-simulation-nav");
const resourses_nav = document.querySelector(".resources-nav");
const about_nav = document.querySelector(".about-nav");

home_nav.addEventListener("click", () => {
  location.href = "index.html";
});

circuit_nav.addEventListener("click", () => {
  location.href = "src/circuit-nav.html";
});

about_nav.addEventListener("click", () => {
  location.href = "src/about-nav.html";
});

resourses_nav.addEventListener("click", () => {
  location.href = "src/resources-nav.html";
});

about_nav = document.addEventListener("click", () => {
  about_nav.addEventListener("hover", () => {
    location.reload();
  });
});
