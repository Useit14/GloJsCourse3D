import { animate } from "./helpers";

const modal = () => {
  const buttons = document.querySelectorAll(".popup-btn");
  const modal = document.querySelector(".popup");
  const popupContent = modal.querySelector(".popup-content");

  buttons.forEach((element) => {
    element.addEventListener("click", () => {
      modal.style.display = "block";
      if (screen.width >= 768) {
        animate({
          duration: 2000,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            popupContent.style.opacity = progress;
          },
        });
      }
    });
  });


  modal.addEventListener("click", (e) => {
    if (
      !e.target.closest(".popup-content") ||
      e.target.classList.contains("popup-close")
    ) {
      modal.style.display = "none";
    }

  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "none";

  });
};

export default modal;
