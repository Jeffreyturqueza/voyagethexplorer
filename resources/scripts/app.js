const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0;
let yValue = 0;

let rotateDegree = 0;

function update(cursorPosition) {
  parallax_el.forEach((el) => {

    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;
    let speedz = el.dataset.speedz;
    let rotateSpeed = el.dataset.rotate;

    let isInLeft = 
      parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
    let zValue = 
      (cursorPosition - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;

    el.style.transform = `perspective(2300px) translateZ(${
      zValue * speedz
    }px) rotateY(${rotateDegree * rotateSpeed}deg) translateX(calc(-50% + ${
      -xValue * speedx
    }px)) translateY(calc(-50% + ${yValue * speedy}px))`;
  });
}


window.addEventListener("mousemove", (e) => {

    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    rotateDegree = (xValue / window.innerWidth / 2) * 20;

    // console.log(rotateDegree);

    update(e.clientX);
});

/* destination */

const track = document.querySelector(".carousel-track");
const images = document.querySelectorAll(".carousel-track img");
const pagination = document.getElementById("pagination");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentIndex = 0;
const totalPages = images.length;

function updateCarousel() {
  const offset = -currentIndex * (images[0].offsetWidth + 10);
  track.style.transform = `translateX(${offset}px)`;
  pagination.textContent = String(currentIndex + 1).padStart(2, '0');
}

prev.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

next.addEventListener("click", () => {
  if (currentIndex < totalPages - 1) {
    currentIndex++;
    updateCarousel();
  }
});

updateCarousel();

document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector('.carousel-track');
  const cards = document.querySelectorAll('.card__article');
  const nextButton = document.getElementById('next');
  const prevButton = document.getElementById('prev');
  const pagination = document.getElementById('pagination');

  let currentIndex = 0;
  const cardWidth = cards[0].offsetWidth + 40; // 328px + approx margin

  function updateCarousel() {
    const translateX = -currentIndex * cardWidth;
    track.style.transform = `translateX(${translateX}px)`;
    pagination.textContent = String(currentIndex + 1).padStart(2, '0');
  }

  nextButton.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  // Optional: Initial call
  updateCarousel();
});

const container = document.querySelector('.carousel-container');
const btnLeft = document.querySelector('.carousel-arrow.left');
const btnRight = document.querySelector('.carousel-arrow.right');

const scrollAmount = 360; // width of each card + gap

btnLeft.addEventListener('click', () => {
  container.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth',
  });
});

btnRight.addEventListener('click', () => {
  container.scrollBy({
    left: scrollAmount,
    behavior: 'smooth',
  });
});
