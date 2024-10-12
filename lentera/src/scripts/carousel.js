document.addEventListener("DOMContentLoaded", () => {
  initializeCarousel("carouselExample1");
  initializeCarousel("carouselExample2");
  initializeCarousel("carouselExample3");
});

function initializeCarousel(carouselId) {
  let slideIndex = 1;
  const carousel = document.getElementById(carouselId);
  const items = carousel.querySelectorAll(".carousel-item");
  const prevButton = carousel.querySelector(".carousel-control-prev");
  const nextButton = carousel.querySelector(".carousel-control-next");

  showSlides(carouselId, slideIndex);

  prevButton.addEventListener("click", () => {
    showSlides(carouselId, (slideIndex -= 1));
  });

  nextButton.addEventListener("click", () => {
    showSlides(carouselId, (slideIndex += 1));
  });

  function showSlides(carouselId, n) {
    const items = document.querySelectorAll(`#${carouselId} .carousel-item`);
    if (n > items.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = items.length;
    }
    items.forEach((item, index) => {
      item.style.display = index === slideIndex - 1 ? "block" : "none";
    });
  }
}
