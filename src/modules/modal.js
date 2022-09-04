const modal = () => {
  const buttons = document.querySelectorAll(".popup-btn");
  const modal = document.querySelector(".popup");
  const closeBtn = modal.querySelector(".popup-close");
  const popupContent = modal.querySelector(".popup-content");
  let animId;

  const animModal = (prop) => {
    const step = prop + 10;
    animId = requestAnimationFrame(() => animModal(step));
    popupContent.style.transform = `rotate(${step}deg)`;
    if (step === 360) {
      cancelAnimationFrame(animId);
    }
  };

  buttons.forEach((element) => {
    element.addEventListener("click", () => {
      modal.style.display = "block";
      if (screen.width >= 768) {
        animModal(0);
      }
    });
  });

  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "none";
  });
};

export default modal;
