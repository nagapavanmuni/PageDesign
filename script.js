document.addEventListener("DOMContentLoaded", function () {
  const slidesContainer = document.querySelector(".carousel-slides");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentIndex = 0;
  const totalSlides = slides.length;

  function goToSlide(index) {
    slidesContainer.style.transform = "translateX(" + -index * 100 + "%)";
  }

  function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    goToSlide(currentIndex);
  }

  function showPrevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    goToSlide(currentIndex);
  }

  // Event Listeners for arrow buttons
  nextBtn.addEventListener("click", showNextSlide);
  prevBtn.addEventListener("click", showPrevSlide);

  // Optional: Auto-play functionality
  // setInterval(showNextSlide, 7000); // Uncomment to enable auto-sliding every 7 seconds

  // Set initial position
  goToSlide(0);
});
