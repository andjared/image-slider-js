const prevBtn = document.querySelector("#prev-btn");

const nextBtn = document.querySelector("#next-btn");

const slides = document.querySelectorAll(".slide");

const order = document.querySelector(".slide-order");

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

const slider = () => {
  if (counter === slides.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slides.length - 1;
  }

  order.textContent = `${counter + 1} / 6`;

  slides.forEach(
    (slide) => (slide.style.transform = `translateX(-${counter * 100}%)`)
  );
};

prevBtn.addEventListener("click", () => {
  counter--;
  slider();
});

nextBtn.addEventListener("click", () => {
  counter++;
  slider();
});
