var slides = document.querySelectorAll(".slide");
var dots = document.querySelectorAll(".dot");
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 2000);

function showSlide(index) {
  slides.forEach(function (slide) {
    slide.classList.remove("active");
  });
  dots.forEach(function (dot) {
    dot.classList.remove("active");
  });

  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

dots.forEach(function (dot, index) {
  dot.addEventListener("click", function () {
    clearInterval(slideInterval);
    showSlide(index);
    slideInterval = setInterval(nextSlide, 2000);
  });
});
