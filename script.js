let currentIndex = 0;
const slideInterval = 3000; // Set the interval in milliseconds (3 seconds in this case)
let intervalId;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    if (index < 0) {
        currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    const translateValue = -currentIndex * 100 + '%';
    slides.style.transition = 'transform 0.5s ease-in-out';
    slides.style.transform = 'translateX(' + translateValue + ')';
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function startAutoSlide() {
    intervalId = setInterval(nextSlide, slideInterval);
}

function stopAutoSlide() {
    clearInterval(intervalId);
}

// Start auto sliding when the page loads
startAutoSlide();

// Pause auto sliding when the user interacts with the slider
document.querySelector('.slider').addEventListener('mouseenter', stopAutoSlide);
document.querySelector('.slider').addEventListener('mouseleave', startAutoSlide);

function show() {
  var input=document.getElementById("search").value;

  if(input=="cup"){
    alert("Choose from products section")
  }else{
    alert("No result found")
  }
}

console("Your using webcraft ")