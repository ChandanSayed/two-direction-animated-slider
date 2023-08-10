let slideIndex = 1;
let setPrevIndex;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
  setPrevIndex += n;
}

function showSlides(n) {
  let slides = document.getElementsByClassName('slides');

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (slide of slides) {
    slide.classList.remove('current');
    slide.classList.remove('prev');
  }

  slides[slideIndex - 1].classList.add('current');

  if (slideIndex == 1) {
    setPrevIndex = slides.length;
  } else {
    setPrevIndex = slideIndex - 1;
  }

  slides[setPrevIndex - 1].classList.add('prev');

  if (n == 4) {
    n = 1;
  } else if (n == 0) {
    n = 3;
  }

  document.querySelector('.currentSlider').innerHTML = n;
}
