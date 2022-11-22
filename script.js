const prevBtn = document.querySelector("#prev-btn");

const nextBtn = document.querySelector("#next-btn");

const slides = document.querySelectorAll(".slide");

slides.forEach((slide, index) => {
  console.log(index);
  slide.style.left = `${index * 100}%`;
});

let counter = 0;
// console.log(counter);

const slider = (type) => {
  console.log(counter);

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
