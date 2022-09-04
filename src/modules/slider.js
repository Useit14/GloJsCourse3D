const slider = (classes) => {
  try {
    let result = false;
    classes.forEach((prop) => {
      for (let index = 0; index < document.styleSheets.length; index++) {
        const element = document.styleSheets[index];
        for (let index = 0; index < element["rules"].length; index++) {
          const elementInner = element["rules"][index];
          if (
            elementInner.selectorText &&
            elementInner.selectorText.includes(`.${prop}`)
          ) {
            result = true;
            return;
          }
        }
      }
      if (result === false) throw new SyntaxError("Error");
    });
  } catch (e) {
    return;
  }

  const [
    classSlider,
    classSlides,
    classDots,
    classActiveSlides,
    classActiveDots,
  ] = classes;

  const sliderBlock = document.querySelector(`.${classSlider}`);
  const slides = document.querySelectorAll(`.${classSlides}`);
  let dots = document.querySelectorAll(`.${classDots}`);
  const timeInterval = 2000;
  const portfolioContent = document.querySelector(`.${classSlider}`);

  let currentSlide = 0;
  let interval;

  const validate = () => {
    if (!document.querySelector(classSlider)) return;
    if (!document.querySelector(classSlides)) return;
    if (!document.querySelector(classDots)) return;
    if (!document.querySelector(classActiveSlides)) return;
    if (!document.querySelector(classActiveDots)) return;
  };

  const initDots = () => {
    const ul = document.createElement("ul");
    ul.classList.add("portfolio-dots");
    slides.forEach((slide, index) => {
      const li = document.createElement("li");
      li.classList.add("dot");
      if (index === 0) li.classList.add(classActiveDots);
      ul.insertAdjacentElement("beforeend", li);
    });
    portfolioContent.insertAdjacentElement("beforeend", ul);
    dots = document.querySelectorAll(`.${classDots}`);
  };

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
  };

  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  };

  const autoSlide = () => {
    prevSlide(slides, currentSlide, classActiveSlides);
    prevSlide(dots, currentSlide, classActiveDots);

    currentSlide++;
    if (currentSlide >= slides.length) currentSlide = 0;
    nextSlide(slides, currentSlide, classActiveSlides);
    nextSlide(dots, currentSlide, classActiveDots);
  };

  const startSlide = (timer = 1500) => {
    interval = setInterval(autoSlide, timer);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  sliderBlock.addEventListener("click", (e) => {
    e.preventDefault();
    if (!e.target.matches(".dot, .portfolio-btn")) {
      return;
    }

    prevSlide(slides, currentSlide, classActiveSlides);
    prevSlide(dots, currentSlide, classActiveDots);

    if (e.target.matches("#arrow-right")) {
      currentSlide++;
    } else if (e.target.matches("#arrow-left")) {
      currentSlide--;
    } else if (e.target.classList.contains("dot")) {
      dots.forEach((dot, index) => {
        if (e.target === dot) {
          currentSlide = index;
        }
      });
    }

    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;

    nextSlide(slides, currentSlide, classActiveSlides);
    nextSlide(dots, currentSlide, classActiveDots);
  });

  sliderBlock.addEventListener(
    "mouseenter",
    (e) => {
      if (e.target.matches(".dot, .portfolio-btn")) {
        stopSlide();
      }
    },
    true
  );

  sliderBlock.addEventListener(
    "mouseleave",
    (e) => {
      if (e.target.matches(".dot, .portfolio-btn")) {
        startSlide(timeInterval);
      }
    },
    true
  );

  initDots();
  startSlide(timeInterval);
};

export default slider;
